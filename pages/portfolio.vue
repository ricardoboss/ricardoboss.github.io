<script setup lang="ts">
import PageHeader from '~/components/structural/PageHeader.vue'
import CardDeck from '~/components/CardDeck.vue'
import type CardData from '~/models/CardData'

const portfolio = [
  {
    title: 'TRENZ Docs',
    description:
      'A way to host Azure DevOps wikis (or any Markdown-based wiki, really) publicly. Includes authentication support.',
    links: [
      {
        title: 'API Source',
        href: 'https://github.com/trenz-gmbh/trenz-docs-api',
        target: '_blank',
      },
      {
        title: 'Frontend Source',
        href: 'https://github.com/trenz-gmbh/trenz-docs',
        target: '_blank',
      },
      {
        title: 'Example',
        href: 'https://docs.ela.easylogic.de',
        target: '_blank',
      },
    ],
    pills: ['Vue', 'TS', '.NET', 'C#'],
  },
  {
    title: 'SVB',
    description:
      'Your specialist online shop for technical boat equipment, sailing accessories and water sports equipment.',
    links: [{ title: 'Visit', href: 'https://svb24.com/', target: '_blank' }],
    pills: ['PHP', 'Symfony'],
  },
  {
    title: 'sendmeback Account',
    description:
      'Customer backend for managing purchased sendmeback products. Features an ASP.NET backend with JWT authentication.',
    pills: ['TS', 'Vue'],
  },
  {
    title: 'sendmeback App',
    description:
      'App for viewing registered products and pairing a smartphone with a product. Enable localization and sending notifications to the smartphone.',
    pills: ['Dart', 'Flutter', 'Android', 'iOS'],
  },
  {
    title: 'Age of Aincrad (website)',
    description:
      'A website for a game (currently in development). Features include login via Discord, Strapi as a backend and a Vuetify frontend.',
    links: [
      { title: 'Visit', href: 'https://age-of-aincrad.com/', target: '_blank' },
    ],
    pills: ['TS', 'Vue'],
  },
  {
    title: 'TRENZ Pilot Plug Manager App',
    description:
      'Mobile application to interact with a TRENZ Pilot Plug. Features cross-platform TCP socket communication. Analytics using Microsoft App Center.',
    links: [
      {
        title: 'Play Store',
        href: 'https://play.google.com/store/apps/details?id=de.trenz.PilotPlugRemote',
        target: '_blank',
      },
      {
        title: 'App Store',
        href: 'https://apps.apple.com/us/app/pilot-plug-manager/id1437240460',
        target: '_blank',
      },
    ],
    pills: ['C#', '.NET', 'Xamarin', 'Android', 'iOS'],
  },
  {
    title: 'TRENZ Pilot Plug Manager',
    description:
      'Desktop application to interact with a TRENZ Pilot Plug. Features serial port and socket communication. Analytics using Microsoft App Center.',
    links: [
      {
        title: 'Visit',
        href: 'https://manager.trenz-pilotplug.com/',
        target: '_blank',
      },
    ],
    pills: ['C#', '.NET', 'WPF'],
  },
] as CardData[]
</script>

<template>
  <main>
    <page-header title="Portfolio">
      These are projects which I have worked on (or at least partially) in my
      job or in my free time. For most of the projects, I cannot share the
      source code. Instead, I can show which tech stack was used and link to the
      result. Also take a look at
      <router-link to="/projects">my personal open source projects</router-link>
      .
    </page-header>

    <card-deck :cards="portfolio" />
  </main>
</template>

<style scoped lang="scss"></style>
