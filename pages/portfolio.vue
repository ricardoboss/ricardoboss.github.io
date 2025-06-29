<script setup lang="ts">
import PageHeader from "~/components/structural/PageHeader.vue"
import CardDeck from "~/components/CardDeck.vue"
import type CardData from "~/models/CardData"
import { useHead, useSeoMeta } from "#app/composables"

const description =
  "These are projects which I have worked on (or at least partially) in my job or in my free time."

useHead({
  title: "Portfolio"
})

useSeoMeta({
  description
})

const portfolio = [
  {
    title: "Pilot-Guard",
    description: "An app for all maritime pilots to report non-conformant pilot ladder arrangements (nc-pta).",
    links: [
      {
        title: "Play Store",
        href: "https://play.google.com/store/apps/details?id=de.trenz.pilotguard",
        target: "_blank"
      },
      {
        title: "App Store (iOS/iPadOS)",
        href: "https://apps.apple.com/us/app/pilot-guard/id6462422656",
        target: "_blank"
      }
    ],
    pills: ["Flutter", "Dart", "Android", "iOS", ".NET", "C#"]
  },
  {
    title: "Ladder Reporting App",
    description: "An app for the German maritime pilots to report non-conformant pilot ladder arrangements (nc-pta). The app communicates with an API to create reports that can be submitted to the German authorities.",
    links: [
      {
        title: "Play Store",
        href: "https://play.google.com/store/apps/details?id=de.trenz.lra",
        target: "_blank"
      },
      {
        title: "App Store (iOS/iPadOS)",
        href: "https://apps.apple.com/us/app/ladder-reporting/id1634788761",
        target: "_blank"
      }
    ],
    pills: ["Flutter", "Dart", "Android", "iOS", ".NET", "C#"]
  },
  {
    title: "TRENZ Pilot Unit Manager App",
    description:
      "Mobile application to interact with a TRENZ Pilot Unit. Features cross-platform TCP socket and Serial communication.",
    links: [
      {
        title: "Play Store",
        href: "https://play.google.com/store/apps/details?id=de.trenz.PilotPlugRemote",
        target: "_blank"
      },
      {
        title: "App Store (iOS/iPadOS/macOS)",
        href: "https://apps.apple.com/us/app/pilot-plug-manager/id1437240460",
        target: "_blank"
      },
      {
        title: "Microsoft Store",
        href: "https://apps.microsoft.com/store/detail/9PP8DLSF17GH?launch=true&mode=mini",
        target: "_blank"
      },
      {
        title: "Wiki",
        href: "https://docs.trenz-pilotunit.com/wiki/Welcome",
        target: "_blank"
      }
    ],
    pills: ["Flutter", "Dart", "Android", "iOS", "macOS", "Windows"]
  },
  {
    title: "TRENZ Docs",
    description:
      "A way to host Azure DevOps wikis (or any Markdown-based wiki, really) publicly. Includes authentication support.",
    links: [
      {
        title: "API Source",
        href: "https://github.com/trenz-gmbh/trenz-docs-api",
        target: "_blank"
      },
      {
        title: "Frontend Source",
        href: "https://github.com/trenz-gmbh/trenz-docs",
        target: "_blank"
      },
      {
        title: "Example",
        href: "https://docs.ela.easylogic.de",
        target: "_blank"
      }
    ],
    pills: ["Vue", "TS", ".NET", "C#"]
  },
  {
    title: "SVB",
    description:
      "Your specialist online shop for technical boat equipment, sailing accessories and water sports equipment.",
    links: [{ title: "Visit", href: "https://svb24.com/", target: "_blank" }],
    pills: ["PHP", "Symfony"]
  },
  {
    title: "sendmeback Account",
    description:
      "Customer backend for managing purchased sendmeback products. Features an ASP.NET backend with JWT authentication.",
    pills: ["TS", "Vue"]
  },
  {
    title: "sendmeback App",
    description:
      "App for viewing registered products and pairing a smartphone with a product. Enable localization and sending notifications to the smartphone.",
    pills: ["Dart", "Flutter", "Android", "iOS"]
  },
  {
    title: "Age of Aincrad (website)",
    description:
      "A website for a game (currently in development). Features include login via Discord, Strapi as a backend and a Vuetify frontend.",
    links: [
      { title: "Visit", href: "https://age-of-aincrad.com/", target: "_blank" }
    ],
    pills: ["TS", "Vue"]
  },
  {
    title: "(legacy) TRENZ Pilot Plug Manager",
    description:
      "Desktop application to interact with a TRENZ Pilot Plug. Features serial port and socket communication. Analytics using Microsoft App Center.",
    pills: ["C#", ".NET", "WPF", "Windows"]
  }
] as CardData[]
</script>

<template>
  <main>
    <page-header title="Portfolio">
      {{ description }} For most of the projects, I cannot share the source
      code. Instead, I can show which tech stack was used and link to the
      result. Also take a look at
      <router-link to="/projects">my personal open source projects</router-link>
      .
    </page-header>

    <card-deck :cards="portfolio" />
  </main>
</template>

<style scoped lang="scss"></style>
