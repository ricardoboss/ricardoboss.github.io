export interface Link {
  label: string
  href: string
  rel?: string
}

export const languages = [
  "Bash",
  "C#",
  "C++",
  "Dart",
  "Java",
  "JS",
  "PHP",
  "PowerShell",
  "STEP",
  "TS",
] as const

export const frameworks = [
  ".NET",
  "Astro",
  "Blazor",
  "Flutter",
  "RabbitMQ",
  "Symfony",
  "Vue",
  "WPF",
  "Xamarin",
] as const

export const platforms = [
  "Android",
  "Docker",
  "iOS",
  "macOS",
  "MSSQL",
  "MySQL",
  "PostgreSQL",
  "Web",
  "Windows",
] as const

export type Language = (typeof languages)[number]
export type Framework = (typeof frameworks)[number]
export type Platform = (typeof platforms)[number]

export interface Project {
  title: string
  description: string
  source: "open" | "closed"
  kind: "library" | "app" | "tool" | "game" | "website"
  image?: string
  imagePadding?: string
  languages: Language[]
  frameworks: Framework[]
  platforms: Platform[]
  links?: Link[]
}

export interface ContactMethod {
  title: string
  detail: string
  icon?: string
  links: Link[]
}

export interface CvEntry {
  title?: string
  role: string
  from: string
  to?: string
  languages?: Language[]
  frameworks?: Framework[]
  platforms?: Platform[]
  link?: string
  minor?: boolean
}

export interface UsesItem {
  title: string
  category: string
  subcategory: string
  link: string
  comment?: string
}
