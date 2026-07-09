const explorers = document.querySelectorAll<HTMLElement>("[data-project-explorer]")
const filterKeys = ["kind", "languages", "frameworks", "platforms"]

type ProjectSelection = Map<string, Set<string>>

explorers.forEach((explorer) => {
  const form = explorer.querySelector<HTMLFormElement>("[data-project-filters]")
  const search = form?.querySelector<HTMLInputElement>("input[name='query']")
  const cards = [...explorer.querySelectorAll<HTMLElement>("[data-project-card]")]
  const count = explorer.querySelector<HTMLElement>("[data-project-count]")
  const clearButton = explorer.querySelector<HTMLButtonElement>("[data-project-clear]")
  const sourceButtons = [
    ...explorer.querySelectorAll<HTMLButtonElement>("[data-project-source-option]"),
  ]
  const filterButtons = [
    ...explorer.querySelectorAll<HTMLButtonElement>("[data-project-filter]"),
  ]
  const selected: ProjectSelection = new Map()
  let source = ""

  if (!form) return

  const currentQuery = () => search?.value.trim().toLowerCase() ?? ""

  const escapeRegExp = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")

  const clearHighlights = (card: HTMLElement) => {
    card.querySelectorAll("mark.query-highlight").forEach((mark) => {
      mark.replaceWith(document.createTextNode(mark.textContent ?? ""))
    })
    card.normalize()
  }

  const highlightQuery = (card: HTMLElement, query: string) => {
    clearHighlights(card)
    if (!query) return

    const pattern = new RegExp(escapeRegExp(query), "gi")
    const walker = document.createTreeWalker(card, NodeFilter.SHOW_TEXT, {
      acceptNode: (node) => {
        const parent = node.parentElement
        if (!parent || !node.textContent?.trim()) return NodeFilter.FILTER_REJECT
        if (["MARK", "SCRIPT", "STYLE", "SVG"].includes(parent.tagName)) {
          return NodeFilter.FILTER_REJECT
        }

        pattern.lastIndex = 0
        return pattern.test(node.textContent)
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_REJECT
      },
    })
    const matches: Text[] = []

    while (walker.nextNode()) {
      matches.push(walker.currentNode as Text)
    }

    matches.forEach((node) => {
      const fragment = document.createDocumentFragment()
      const text = node.textContent ?? ""
      let offset = 0

      pattern.lastIndex = 0
      text.replace(pattern, (match, index: number) => {
        fragment.append(document.createTextNode(text.slice(offset, index)))

        const mark = document.createElement("mark")
        mark.className = "query-highlight"
        mark.textContent = match
        fragment.append(mark)

        offset = index + match.length
        return match
      })

      fragment.append(document.createTextNode(text.slice(offset)))
      node.replaceWith(fragment)
    })
  }

  const cardValues = (card: HTMLElement, key: string) => {
    if (key === "kind") return [card.dataset.kind ?? ""]

    return (card.dataset[key] ?? "").split("|").filter(Boolean)
  }

  const cardMatchesSelection = (
    card: HTMLElement,
    selection: ProjectSelection,
    query: string,
  ) => {
    const searchable = [
      card.dataset.title,
      card.dataset.description,
      card.dataset.source,
      card.dataset.kind,
      card.dataset.languages,
      card.dataset.frameworks,
      card.dataset.platforms,
    ]
      .join(" ")
      .toLowerCase()

    if (query && !searchable.includes(query)) return false
    if (source && card.dataset.source !== source) return false

    return filterKeys.every((key) => {
      const group = selection.get(key)
      if (!group || group.size === 0) return true

      const values = cardValues(card, key)
      return [...group].some((value) => values.includes(value))
    })
  }

  const matchingCount = (selection: ProjectSelection, query: string) =>
    cards.filter((card) => cardMatchesSelection(card, selection, query)).length

  const copySelection = (selection: ProjectSelection): ProjectSelection =>
    new Map([...selection.entries()].map(([key, values]) => [key, new Set(values)]))

  const withAddedSelection = (key: string, value: string) => {
    const next = copySelection(selected)
    const group = next.get(key) ?? new Set<string>()
    group.add(value)
    next.set(key, group)
    return next
  }

  const readUrl = () => {
    const params = new URLSearchParams(window.location.search)
    if (search) {
      search.value = params.get("q") ?? ""
    }

    source = params.get("source")?.toLowerCase() ?? ""
    if (!["open", "closed"].includes(source)) {
      source = ""
    }

    selected.clear()
    for (const [key, value] of params.entries()) {
      if (!filterKeys.includes(key)) continue

      const group = selected.get(key) ?? new Set<string>()
      value
        .split(",")
        .map((item) => item.trim().toLowerCase())
        .filter(Boolean)
        .forEach((item) => group.add(item))

      if (group.size > 0) {
        selected.set(key, group)
      }
    }
  }

  const writeUrl = () => {
    const params = new URLSearchParams()
    const query = search?.value.trim()

    if (query) {
      params.set("q", query)
    }

    if (source) {
      params.set("source", source)
    }

    for (const [key, values] of selected.entries()) {
      if (values.size > 0) {
        params.set(key, [...values].sort().join(","))
      }
    }

    const queryString = params.toString()
    const nextUrl = queryString
      ? `${window.location.pathname}?${queryString}`
      : window.location.pathname

    window.history.replaceState(null, "", nextUrl)
  }

  const pruneImpossibleSelection = () => {
    const query = currentQuery()
    if (matchingCount(selected, query) > 0) return

    for (const [key, values] of [...selected.entries()].reverse()) {
      for (const value of [...values].reverse()) {
        values.delete(value)
        if (values.size === 0) selected.delete(key)
        if (matchingCount(selected, query) > 0) return
      }
    }
  }

  const applyFilters = () => {
    const query = currentQuery()
    let visible = 0

    filterButtons.forEach((button) => {
      const key = button.dataset.projectFilter
      const value = button.dataset.projectFilterValue?.toLowerCase()
      const isSelected = !!key && !!value && !!selected.get(key)?.has(value)
      const canSelect =
        isSelected ||
        (!!key && !!value && matchingCount(withAddedSelection(key, value), query) > 0)

      button.disabled = !canSelect
      button.setAttribute("aria-pressed", isSelected.toString())
      button.classList.toggle("inactive", selected.size > 0 && !isSelected)
      button.classList.toggle("unavailable", !canSelect)
    })

    sourceButtons.forEach((button) => {
      const value = button.dataset.projectSourceOption ?? ""
      button.setAttribute("aria-pressed", (value === source).toString())
    })

    cards.forEach((card) => {
      const matches = cardMatchesSelection(card, selected, query)

      card.hidden = !matches
      if (matches) {
        highlightQuery(card, query)
        visible++
      } else {
        clearHighlights(card)
      }
    })

    if (count) {
      count.textContent = `${visible} project${visible === 1 ? "" : "s"}`
    }
  }

  form.addEventListener("input", () => {
    pruneImpossibleSelection()
    writeUrl()
    applyFilters()
  })

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const key = button.dataset.projectFilter
      const value = button.dataset.projectFilterValue?.toLowerCase()
      if (!key || !value || button.disabled) return

      const group = selected.get(key) ?? new Set<string>()
      if (group.has(value)) {
        group.delete(value)
      } else {
        group.add(value)
      }

      if (group.size === 0) {
        selected.delete(key)
      } else {
        selected.set(key, group)
      }

      pruneImpossibleSelection()
      writeUrl()
      applyFilters()
    })
  })

  sourceButtons.forEach((button) => {
    button.addEventListener("click", () => {
      source = button.dataset.projectSourceOption ?? ""
      pruneImpossibleSelection()
      writeUrl()
      applyFilters()
    })
  })

  clearButton?.addEventListener("click", () => {
    selected.clear()
    source = ""
    if (search) search.value = ""
    writeUrl()
    applyFilters()
  })

  readUrl()
  pruneImpossibleSelection()
  writeUrl()
  applyFilters()
})
