export function pillClass(value: string) {
  return value
    .replace("#", "s")
    .replace("++", "pp")
    .replace(".", "")
    .toLowerCase()
}
