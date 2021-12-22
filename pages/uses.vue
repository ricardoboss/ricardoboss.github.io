<template>
  <section>
    <h1>Uses</h1>

    <p>
      This is the tech I use almost every day. Discover other tech enthusiasts
      builds at <a href="https://uses.tech/" target="_blank">uses.tech</a>!
    </p>

    <hr>

    <div v-for="section in sections">
      <h2>{{ section.title }}</h2>

      <div v-for="list in section.lists">
        <h3>{{ list.title }}</h3>

        <ul>
          <li v-for="entry in list.items">
            <a :href="entry.link" target="_blank">
              <span class="item-title">{{ entry.title }}</span>
              <span class="item-link">{{ entry.link }}</span>
            </a>

            <p v-if="entry.comment">{{ entry.comment }}</p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  layout: 'default',

  data() {
    return {
      sections: [
        {
          title: "Software",
          lists: [
            {
              title: "Editor/IDE/Terminal",
              items: [
                {
                  title: "JetBrains PhpStorm",
                  link: "https://jetbrains.com/phpstorm/",
                  comment: "Using the Darcula theme 🧛"
                },
                {
                  title: "VS Code",
                  link: "https://code.visualstudio.com/"
                },
                {
                  title: "Windows Terminal",
                  link: "https://www.microsoft.com/p/windows-terminal/9n0dx20hk701",
                  comment: "Getting better with every update. IMHO the best terminal there is."
                },
                {
                  title: "PowerShell Core",
                  link: "https://github.com/PowerShell/PowerShell"
                },
                {
                  title: "WSL",
                  link: "https://docs.microsoft.com/windows/wsl/about",
                  comment: "Provides the best of both worlds: Windows 💞 Linux"
                },
                {
                  title: "JetBrains Mono",
                  link: "https://www.jetbrains.com/lp/mono/",
                  comment: "Font ligatures turned on!"
                }
              ]
            },
            {
              title: "Productivity",
              items: [
                {
                  title: "Fork",
                  link: "https://fork.dev/",
                  comment: "Beautiful tool for everyone working with git."
                },
                {
                  title: "1Password",
                  link: "https://1password.com/"
                },
                {
                  title: "Microsoft Edge",
                  link: "https://www.microsoft.com/edge",
                  comment: "Basically Google Chrome, but with better integration into Windows."
                },
                {
                  title: "Google Drive for Desktop",
                  link: "https://www.google.com/intl/en/drive/download/"
                },
                {
                  title: "Docker Desktop",
                  link: "https://www.docker.com/products/docker-desktop"
                },
                {
                  title: "JetBrains Toolbox",
                  link: "https://www.jetbrains.com/toolbox/"
                },
                {
                  title: "Microsoft PowerToys",
                  link: "https://docs.microsoft.com/en-us/windows/powertoys/",
                  comment: "You don't know you need these until you try them."
                },
                {
                  title: "AltSnap",
                  link: "https://github.com/RamonUnch/AltSnap",
                  comment: "Use alt+right-click to resize windows. Best. Feature. Ever."
                },
                {
                  title: "Discord",
                  link: "https://discord.com/"
                },
              ]
            },
            {
              title: "Games & Fun",
              items: [
                {
                  title: "GOG Galaxy",
                  link: "https://www.gog.com/galaxy"
                },
                {
                  title: "Spotify",
                  link: "https://www.spotify.com/",
                  comment: "Music is love, music is life. 🎧"
                }
              ]
            },
          ]
        },
        {
          title: "Hardware",
          lists: [
            {
              title: "Computers/Networking",
              items: [
                {
                  title: "Custom PC",
                  link: "https://pcpartpicker.com/user/MCMainiac/saved/#view=sDjjHx"
                },
                {
                  title: "Raspberry Pi 4 Model B (4GB RAM)",
                  link: "https://www.raspberrypi.com/products/raspberry-pi-4-model-b/",
                  comment: "Serves Home Assistant and Octoprint"
                },
                {
                  title: "Fritz!Box 7530 AX",
                  link: "https://avm.de/produkte/fritzbox/fritzbox-7530-ax/"
                },
                {
                  title: "Ender 3 V2",
                  link: "https://www.creality.com/de/goods-detail/ender-3-v2-3d-printer",
                  comment: "3D Printer with custom hotend"
                }
              ]
            },
            {
              title: "Accessories",
              items: [
                {
                  title: "Oculus Rift S",
                  link: "https://www.oculus.com/en-us/rift-s/",
                  comment: "Love me some Beat Saber! 📦🤺"
                }
              ]
            },
            {
              title: "Smart Home",
              items: [
                {
                  title: "Fritz!DECT 500",
                  link: "https://avm.de/produkte/fritzdect/fritzdect-500/",
                  comment: "Light bulbs controlled via DECT and Home Assistant"
                },
                {
                  title: "Fritz!DECT 301",
                  link: "https://avm.de/produkte/fritzdect/fritzdect-301/",
                  comment: "Radiator controller controlled via DECT and Home Assistant"
                },
                {
                  title: "LIFX E27",
                  link: "https://www.amazon.de/dp/B01M66RQXV",
                  comment: "Wireless LAN controller light bulb controlled via Home Assistant"
                },
                {
                  title: "Google Home Mini/Nest Mini",
                  link: "https://store.google.com/de/product/google_nest_mini",
                }
              ]
            },
          ]
        },
        {
          title: "Other",
          lists: [
            {
              title: "Hosting",
              items: [
                {
                  title: "GitHub Pages",
                  link: "https://pages.github.com/"
                },
                {
                  title: "Cloudflare",
                  link: "https://www.cloudflare.com/"
                },
                {
                  title: "Netcup",
                  link: "https://www.netcup.eu/"
                }
              ]
            },
          ]
        },
      ]
    };
  }
};
</script>

<style scoped>
li {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

p {
  padding-top: 0.25rem;
  margin-bottom: 0;
}

a {
  text-decoration: none;
}

.item-title {
  display: block;
  font-size: 120%;
  text-decoration: underline;
}

.item-link {
  display: block;
  font-size: 70%;
  opacity: 70%;
  filter: grayscale(1);
}
</style>
