<script setup lang="ts">
import type CardData from "~/models/CardData"
import CardDeck from "~/components/CardDeck.vue"

import MailSvg from "~/assets/vector/mail.svg"
import LinkedinSvg from "~/assets/vector/linkedin.svg"
import XingSvg from "~/assets/vector/xing.svg"
import DiscordSvg from "~/assets/vector/discord.svg"
import GithubSvg from "~/assets/vector/github.svg"
import TwitterSvg from "~/assets/vector/twitter.svg"
import MastodonSvg from "~/assets/vector/mastodon.svg"
import PageHeader from "~/components/structural/PageHeader.vue"

const contactCards = [
  {
    image: MailSvg,
    title: "Mail",
    description: "mail@ricardoboss.de",
    links: [{ title: "Send me an e-mail", href: "mailto:mail@ricardoboss.de" }],
  },
  {
    image: LinkedinSvg,
    title: "LinkedIn",
    description: "Ricardo Boss",
    links: [
      {
        title: "LinkedIn Profile",
        href: "https://www.linkedin.com/in/ricardo-boss/",
        rel: "me",
      },
    ],
  },
  {
    image: XingSvg,
    title: "Xing",
    description: "Ricardo Boss",
    links: [
      {
        title: "Xing Profile",
        href: "https://www.xing.com/profile/Ricardo_Boss2",
        rel: "me",
      },
    ],
  },
  {
    image: DiscordSvg,
    title: "Discord",
    description: "mizzle_de",
    links: [{ title: "Join my server", href: "https://discord.gg/JE9cZb39" }],
  },
  {
    image: GithubSvg,
    title: "GitHub",
    description: "ricardoboss",
    links: [
      {
        title: "GitHub Profile",
        href: "https://github.com/ricardoboss",
        rel: "me",
      },
    ],
  },
  {
    image: TwitterSvg,
    title: "Twitter",
    description: "@_ricardoboss",
    links: [
      {
        title: "Twitter Profile",
        href: "https://twitter.com/_ricardoboss",
        rel: "me",
      },
    ],
  },
  {
    image: MastodonSvg,
    title: "Mastodon",
    description: "ricardoboss",
    links: [
      {
        title: "phpc.social",
        href: "https://phpc.social/@ricardoboss",
        rel: "me",
      },
      {
        title: "dotnet.social",
        href: "https://dotnet.social/@ricardoboss",
        rel: "me",
      },
    ],
  },
] as CardData[]
</script>

<template>
  <main>
    <page-header title="Contact" />

    <card-deck
      :cards="contactCards"
      image-max-height="64px"
      card-width="15em"
    />
  </main>
</template>
