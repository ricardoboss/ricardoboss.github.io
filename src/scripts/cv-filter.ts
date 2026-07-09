const filters = document.querySelectorAll<HTMLElement>("[data-cv-filter]")

filters.forEach((filter) => {
  const buttons = [...filter.querySelectorAll<HTMLButtonElement>("[data-cv-pill-toggle]")]
  const selected = new Set<string>()

  const sync = () => {
    const hasSelection = selected.size > 0

    buttons.forEach((button) => {
      const technology = button.dataset.cvPillToggle
      const isSelected = !!technology && selected.has(technology)
      button.setAttribute("aria-pressed", isSelected.toString())
      button.classList.toggle("inactive", hasSelection && !isSelected)
    })
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const technology = button.dataset.cvPillToggle
      if (!technology) return

      if (selected.has(technology)) {
        selected.delete(technology)
      } else {
        selected.add(technology)
      }

      sync()
    })
  })

  sync()
})
