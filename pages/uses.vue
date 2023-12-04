<script setup lang="ts">
import PageHeader from "~/components/structural/PageHeader.vue"
import { useHead, useSeoMeta } from "#app/composables"
import { computed } from "vue"

const description = "This is the tech I use almost every day."

useHead({
  title: "Uses",
})

useSeoMeta({
  description,
})

interface Category {
  title: string
  lists: CategoryLists[]
}

interface CategoryLists {
  title: string
  items: CategoryListItem[]
}

interface CategoryListItem {
  title: string
  link: string
  comment?: string
}

interface Section extends CategoryListItem {
  category: string
  subcategory: string
}

const categories = [
  {
    title: "Software",
    lists: [
      {
        title: "Editor/IDE/Terminal",
        items: [
          {
            title: "JetBrains Rider",
            link: "https://jetbrains.com/rider/",
            comment: "The better dotnet IDE",
          },
          {
            title: "JetBrains PhpStorm",
            link: "https://jetbrains.com/phpstorm/",
            comment:
              "Using PhpStorm is like supercharging your PHP development process",
          },
          {
            title: "Android Studio",
            link: "https://developer.android.com/studio",
            comment: "JetBrains IDEs are just the best",
          },
          {
            title: "Windows Terminal",
            link: "https://www.microsoft.com/p/windows-terminal/9n0dx20hk701",
            comment:
              "Getting better with every update. IMHO the best terminal there is.",
          },
          {
            title: "PowerShell Core",
            link: "https://github.com/PowerShell/PowerShell",
          },
          {
            title: "WSL",
            link: "https://docs.microsoft.com/windows/wsl/about",
            comment: "Provides the best of both worlds: Windows 💞 Linux",
          },
          {
            title: "JetBrains Mono",
            link: "https://www.jetbrains.com/lp/mono/",
            comment: "Font ligatures turned on!",
          },
        ],
      },
      {
        title: "Productivity",
        items: [
          {
            title: "Fork",
            link: "https://fork.dev/",
            comment: "Beautiful tool for everyone working with git.",
          },
          {
            title: "1Password",
            link: "https://1password.com/",
          },
          {
            title: "Microsoft Edge",
            link: "https://www.microsoft.com/edge",
            comment:
              "Basically Google Chrome, but with better integration into Windows.",
          },
          {
            title: "Google Drive for Desktop",
            link: "https://www.google.com/intl/en/drive/download/",
          },
          {
            title: "Docker Desktop",
            link: "https://www.docker.com/products/docker-desktop",
          },
          {
            title: "JetBrains Toolbox",
            link: "https://www.jetbrains.com/toolbox/",
          },
          {
            title: "Microsoft PowerToys",
            link: "https://docs.microsoft.com/en-us/windows/powertoys/",
            comment: "You don't know you need these until you try them.",
          },
          {
            title: "AltSnap",
            link: "https://github.com/RamonUnch/AltSnap",
            comment:
              "Use alt+right-click to resize windows. Best. Feature. Ever.",
          },
          {
            title: "Discord",
            link: "https://discord.com/",
          },
          {
            title: "Windows-Auto-Night-Mode",
            link: "https://github.com/AutoDarkMode/Windows-Auto-Night-Mode",
          },
        ],
      },
      {
        title: "Games & Fun",
        items: [
          {
            title: "GOG Galaxy",
            link: "https://www.gog.com/galaxy",
          },
          {
            title: "Spotify",
            link: "https://www.spotify.com/",
            comment: "Music is love, music is life. 🎧",
          },
        ],
      },
    ],
  },
  {
    title: "Hardware",
    lists: [
      {
        title: "Computers/Networking",
        items: [
          {
            title: "Custom PC",
            link: "https://pcpartpicker.com/user/MCMainiac/saved/#view=sDjjHx",
          },
          {
            title: "Raspberry Pi 4 Model B (4GB RAM)",
            link: "https://www.raspberrypi.com/products/raspberry-pi-4-model-b/",
            comment: "Serves Home Assistant and Octoprint",
          },
          {
            title: "Fritz!Box 7530 AX",
            link: "https://avm.de/produkte/fritzbox/fritzbox-7530-ax/",
          },
          {
            title: "Ender 3 V2",
            link: "https://www.creality.com/products/ender-3-v2-3d-printer-csco",
            comment: "3D Printer with custom hotend fan shroud",
          },
        ],
      },
      {
        title: "Accessories",
        items: [
          {
            title: "Logitech G815 keyboard (US QWERTY layout)",
            link: "https://www.amazon.de/dp/B07VWFKTK7",
            comment: "⌨️ *click* *click* *click* *click* *click*",
          },
          {
            title: "Oculus Rift S",
            link: "https://www.oculus.com/rift-s/features/",
            comment: "Love me some Beat Saber! 📦🤺",
          },
        ],
      },
      {
        title: "Smart Home",
        items: [
          {
            title: "Home Assistant",
            link: "https://www.home-assistant.io/",
          },
          {
            title: "Octoprint",
            link: "https://octoprint.org/",
            comment: "Really neat for monitoring your print from anywhere",
          },
          {
            title: "Pi-Hole",
            link: "https://pi-hole.net/",
            comment:
              "A nice monitoring tool for the DNS requests in your network and also blocks unwanted domains",
          },
          {
            title: "Fritz!DECT 500",
            link: "https://avm.de/produkte/fritzdect/fritzdect-500/",
            comment: "Light bulbs controlled via DECT and Home Assistant",
          },
          {
            title: "Fritz!DECT 301",
            link: "https://avm.de/produkte/fritzdect/fritzdect-301/",
            comment: "Radiator controlled via DECT and Home Assistant",
          },
          {
            title: "LIFX A60",
            link: "https://www.amazon.de/dp/B01M66RQXV",
            comment: "Light bulbs controlled via Home Assistant",
          },
        ],
      },
    ],
  },
  {
    title: "Other",
    lists: [
      {
        title: "Hosting",
        items: [
          {
            title: "GitHub Pages",
            link: "https://pages.github.com/",
          },
          {
            title: "Cloudflare",
            link: "https://www.cloudflare.com/",
            comment: "Best DNS provider for free with DDoS protection included",
          },
          {
            title: "Netcup",
            link: "https://www.netcup.eu/?ref=85189",
            comment: "Cheap and reliable servers (referral link).",
          },
        ],
      },
    ],
  },
] as Category[]

const sections = computed(() => {
  const sections: Section[] = []

  categories.forEach((category) => {
    category.lists.forEach((list) => {
      list.items.forEach((item) => {
        sections.push({
          ...item,
          category: category.title,
          subcategory: list.title,
        })
      })
    })
  })

  return sections
})
</script>

<template>
  <main>
    <page-header title="Uses">
      {{ description }} Discover other tech enthusiasts builds at
      <a href="https://uses.tech/" target="_blank">uses.tech</a>!
    </page-header>

    <sectioned-list
      :data="sections"
      :main-selector="(s) => s.category"
      :sub-selector="(s) => s.subcategory"
    >
      <template #item="{ title, link, comment }">
        <a :href="link" target="_blank" class="uses-item">
          <span class="title">{{ title }}</span>
          <span class="link">{{ link }}</span>
          <p v-if="comment" class="comment">{{ comment }}</p>
        </a>
      </template>
    </sectioned-list>
  </main>
</template>

<style lang="scss" scoped>
@import "@/style/global";

.uses-item {
  display: flex;
  flex-direction: column;
  gap: 0.75em;

  padding: 0.5em;
  border-radius: 0.5em;

  color: currentColor;
  text-decoration: none;

  .title {
    @include link-style;

    font-size: 1.2em;
  }

  .link {
    font-size: 0.8em;
    opacity: 0.5;
  }

  .comment {
    margin: 0;
  }

  &:hover {
    background: #404040;
  }
}
</style>
