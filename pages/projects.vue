<script setup lang="ts">
import CardDeck from "~/components/CardDeck.vue"
import type CardData from "~/models/CardData"
import GmcLogo from "~/assets/img/gmc-logo-banner.120.min.png"
import PageHeader from "~/components/structural/PageHeader.vue"
import { useHead, useSeoMeta } from "#app/composables"

const description =
  "Open source projects I maintain/started. These projects were created and updated exclusively or mostly in my free time."

useHead({
  title: "Projects"
})

useSeoMeta({
  description
})

const projects = [
  {
    title: "dart_kiota",
    description: "The unofficial Microsoft Kiota abstractions for Dart.",
    links: [
      { title: "Source", href: "https://github.com/ricardoboss/dart_kiota" }
    ],
    pills: ["Dart"]
  },
  {
    title: "Prolangle",
    description: "A game about programming languages.",
    links: [
      { title: "Play now!", href: "https://prolangle.ricardoboss.de" },
      { title: "Source", href: "https://github.com/ricardoboss/Prolangle" }
    ],
    pills: ["C#", ".NET", "Blazor"]
  },
  {
    title: "dart_seq",
    description: "A generic Seq client for Dart. Currently supports HTTP Ingress and Hive as a cache.",
    links: [
      { title: "Show on pub.dev", href: "https://pub.dev/packages/dart_seq" },
      { title: "HTTP Client", href: "https://pub.dev/packages/dart_seq_http_client" },
      { title: "Hive Cache", href: "https://pub.dev/packages/dart_seq_hive_cache" },
      { title: "Source", href: "https://github.com/ricardoboss/dart_seq" }
    ],
    pills: ["Dart"]
  },
  {
    image:
      "https://raw.githubusercontent.com/ricardoboss/STEP/main/StepLang.Homepage/images/repository-open-graph-logo.png",
    imagePadding: "0",
    title: "STEP",
    description:
      "A programming language for beginners. Strongly typed, interpreted and provides great error messages! Inspired by the likes of Javascript, Python, C# and Dart.",
    links: [
      { title: "Source", href: "https://github.com/ricardoboss/STEP" },
      { title: "Documentation", href: "https://ricardoboss.de/STEP" }
    ],
    pills: ["C#", ".NET", "STEP"]
  },
  {
    title: "PubNet",
    description:
      "Self-hosted alternative to pub.dev (Dart & Flutter package host)",
    links: [{ title: "Source", href: "https://github.com/ricardoboss/PubNet" }],
    pills: ["C#", ".NET", "ASP.NET", "Blazor"]
  },
  {
    title: "dart_nmea",
    description: "A Dart decoder for the NMEA0183 protocol.",
    links: [
      { title: "Source", href: "https://github.com/ricardoboss/dart_nmea" }
    ],
    pills: ["Dart"]
  },
  {
    title: "states-game",
    description: "A game where you can guess the 50 states of the USA.",
    links: [
      { title: "Play now!", href: "https://states-game.ricardoboss.de" },
      { title: "Source", href: "https://github.com/ricardoboss/states-game" }
    ],
    pills: ["TS", "Vue"]
  },
  {
    title: "HostedWPF",
    description:
      "Base classes for windows, pages and controls using MVVM and dependency injection.",
    links: [
      { title: "Source", href: "https://github.com/ricardoboss/HostedWPF" },
      { title: "nuget", href: "https://www.nuget.org/packages/HostedWPF/" }
    ],
    pills: ["C#", ".NET", "WPF"]
  },
  {
    title: "yapsi",
    description: "Yet another pub-sub implementation.",
    links: [
      { title: "Source", href: "https://github.com/ricardoboss/yapsi" },
      { title: "nuget", href: "https://www.nuget.org/packages/yapsi/" }
    ],
    pills: ["C#", ".NET"]
  },
  {
    title: "extended-nmea",
    description: "A TypeScript decoder for the NMEA0183 protocol.",
    links: [
      { title: "Source", href: "https://github.com/ricardoboss/extended-nmea" }
    ],
    pills: ["TS", "Vue"]
  },
  {
    title: "vessel-state",
    description:
      "A Vuex store plugin for maintaining an application-wide vessel state.",
    links: [
      { title: "Source", href: "https://github.com/ricardoboss/vessel-state" }
    ],
    pills: ["TS", "Vue"]
  },
  {
    image:
      "https://raw.githubusercontent.com/elephox-dev/.github/main/profile/logo.svg",
    title: "Elephox",
    description: "Yet another PHP framework.",
    links: [
      { title: "Project Homepage", href: "https://elephox.dev" },
      { title: "Source", href: "https://github.com/elephox-dev/framework" }
    ],
    pills: ["PHP"]
  },
  {
    title: "It's rocket science",
    description:
      "A little browser game in which you control a rocket, orbiting a single planet.",
    links: [
      {
        title: "Project Homepage",
        href: "https://rocket-science.ricardoboss.de"
      },
      {
        title: "Source",
        href: "https://github.com/ricardoboss/rocket-science"
      }
    ],
    pills: ["JS", "Vue"]
  },
  {
    title: "php-console-logger",
    description:
      "Simple PHP package for logging to a console with color and formatting.",
    links: [
      {
        title: "Source",
        href: "https://github.com/ricardoboss/php-console-logger"
      }
    ],
    pills: ["PHP"]
  },
  {
    title: "ricardoboss.de",
    description: "This website.",
    links: [
      { title: "Project Homepage", href: "https://ricardoboss.de" },
      {
        title: "Source",
        href: "https://github.com/ricardoboss/ricardoboss.github.io/tree/source"
      }
    ],
    pills: ["JS", "Vue"]
  },
  {
    title: "Analyzer Studio",
    description:
      "Tool to help you compare objects via properties defined by you.",
    links: [
      {
        title: "Source",
        href: "https://github.com/ricardoboss/AnalyzerStudio"
      }
    ],
    pills: ["C#", ".NET", "WPF"]
  },
  {
    title: "laravel-roles-migrations",
    description:
      "A tool which adds migrations for <a href=\"https://github.com/jeremykenedy/laravel-roles\" target=\"_blank\">jeremykenedy/laravel-roles</a>.",
    links: [
      {
        title: "Source",
        href: "https://github.com/ricardoboss/laravel-roles-migrations"
      }
    ],
    pills: ["PHP"]
  },
  {
    image: GmcLogo,
    title: "GameModeControl",
    description:
      "A plugin for Minecraft Servers which adds commands and permissions for changing the gamemode of players.",
    links: [
      {
        title: "Project Homepage",
        href: "https://dev.bukkit.org/projects/gamemode-control"
      },
      { title: "Statistics", href: "https://bstats.org/plugin/bukkit/GMC" },
      {
        title: "Source",
        href: "https://github.com/ricardoboss/GameModeControl"
      }
    ],
    pills: ["Java"]
  },
  {
    title: "WEpS",
    description:
      "WorldEdit plus Signs. Adds a WE-style command for editing signs to Minecraft Servers.",
    links: [
      {
        title: "Project Homepage",
        href: "https://dev.bukkit.org/projects/world-edit-plus-signs"
      },
      { title: "Source", href: "https://github.com/ricardoboss/WEpS" }
    ],
    pills: ["Java"]
  },
  {
    title: "dotnet-remote-setup",
    description:
      "A script to help you set up .NET Core debugging on a remote device (like a Raspberry PI).",
    links: [
      {
        title: "Source",
        href: "https://github.com/ricardoboss/dotnet-remote-setup"
      }
    ],
    pills: ["PowerShell"]
  },
  {
    title: "php-installer",
    description: "GUI which downloads and installs PHP versions for Windows.",
    links: [
      { title: "Source", href: "https://github.com/ricardoboss/php-installer" }
    ],
    pills: ["C#", ".NET", "WPF"]
  },
  {
    title: "BSCLI",
    description:
      "Command line tool which downloads and installs Beat Saber songs from <a href=\"https://beatsaver.com/\" target=\"_blank\">BeatSaver</a>.",
    links: [{ title: "Source", href: "https://github.com/ricardoboss/BSCLI" }],
    pills: ["C#", ".NET"]
  },
  {
    title: "WebConsole",
    description:
      "Remote console interface for Minecraft servers. Plugin is written in Java, client in PHP.",
    links: [
      {
        title: "Project Homepage",
        href: "https://dev.bukkit.org/projects/webconsole"
      },
      {
        title: "Client Source",
        href: "https://github.com/ricardoboss/WebConsole-Client"
      },
      {
        title: "Plugin Source",
        href: "https://github.com/ricardoboss/WebConsole-Server"
      }
    ],
    pills: ["PHP", "Java"]
  },
  {
    title: "LoginLib",
    description:
      "A php library that provides the background mechanics of a registration and login for your website.",
    links: [
      { title: "Source", href: "https://github.com/ricardoboss/LoginLib" }
    ],
    pills: ["PHP"]
  }
] as CardData[]
</script>

<template>
  <main>
    <page-header title="Projects">
      {{ description }} Also take a look at
      <router-link to="/portfolio">my Portfolio</router-link>
      to see which projects I used in my everyday jobs.
    </page-header>

    <card-deck :cards="projects" />
  </main>
</template>
