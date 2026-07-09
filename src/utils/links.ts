export function isExternalLink(href: string) {
  return /^https?:\/\//.test(href)
}

export function externalLinkTarget(href: string) {
  return isExternalLink(href) ? "_blank" : undefined
}

export function externalLinkRel(href: string, rel?: string) {
  if (!isExternalLink(href)) return rel

  const values = new Set((rel ?? "").split(/\s+/).filter(Boolean))
  values.add("noopener")
  values.add("noreferrer")

  return [...values].join(" ")
}
