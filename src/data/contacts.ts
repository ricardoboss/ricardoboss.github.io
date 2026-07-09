import type { ContactMethod } from "../types"

export const contacts = [
  {
    icon: "/contact/mail.svg",
    title: "Mail",
    detail: "mail@ricardoboss.de",
    links: [{ label: "Send me an e-mail", href: "mailto:mail@ricardoboss.de" }],
  },
  {
    icon: "/contact/linkedin.svg",
    title: "LinkedIn",
    detail: "Ricardo Boss",
    links: [
      {
        label: "LinkedIn Profile",
        href: "https://www.linkedin.com/in/ricardo-boss/",
        rel: "me",
      },
    ],
  },
  {
    icon: "/contact/discord.svg",
    title: "Discord",
    detail: "mizzle_de",
    links: [{ label: "Join my server", href: "https://discord.gg/JE9cZb39" }],
  },
  {
    icon: "/contact/github.svg",
    title: "GitHub",
    detail: "ricardoboss",
    links: [
      {
        label: "GitHub Profile",
        href: "https://github.com/ricardoboss",
        rel: "me",
      },
    ],
  },
] satisfies ContactMethod[]
