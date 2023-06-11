<template>
  <section>
    <ProjectBoard :projects="contactInformation" image_height="128" col_settings="row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xxl-5 g-3"></ProjectBoard>
  </section>
</template>

<script>
import ProjectBoard from "../components/ProjectBoard.vue";

export default {
  name: "contact",
  components: {ProjectBoard},

  data() {
    return {
      contactInformation: [
        {
          image: '/vector/mail.svg',
          title: 'Mail',
          description: 'mail@ricardoboss.de',
          links: [
            {title: 'Send me an e-mail', href: 'mailto:mail@ricardoboss.de'}
          ]
        },
        {
          image: '/vector/linkedin.svg',
          title: 'LinkedIn',
          description: 'Ricardo Boss',
          links: [
            {title: 'LinkedIn Profile', href: 'https://www.linkedin.com/in/ricardo-boss/', rel: 'me'}
          ]
        },
        {
          image: '/vector/xing.svg',
          title: 'Xing',
          description: 'Ricardo Boss',
          links: [
            {title: 'Xing Profile', href: 'https://www.xing.com/profile/Ricardo_Boss2', rel: 'me'}
          ]
        },
        {
          image: '/vector/discord.svg',
          title: 'Discord',
          description: 'mizzle#3242',
          links: [
            {title: 'Add as Friend', href: 'https://discord.gg/8YRaBMNP'}
          ]
        },
        {
          image: '/vector/github.svg',
          title: 'GitHub',
          description: 'ricardoboss',
          links: [
            {title: 'GitHub Profile', href: 'https://github.com/ricardoboss', rel: 'me'}
          ]
        },
        {
          image: '/vector/twitter.svg',
          title: 'Twitter',
          description: '@_ricardoboss',
          links: [
            {title: 'Twitter Profile', href: 'https://twitter.com/_ricardoboss', rel: 'me'}
          ]
        },
        {
          image: '/vector/mastodon.svg',
          title: 'Mastodon',
          description: 'ricardoboss',
          links: [
            {title: 'phpc.social', href: 'https://phpc.social/@ricardoboss', rel: 'me'},
            {title: 'dotnet.social', href: 'https://dotnet.social/@ricardoboss', rel: 'me'}
          ]
        }
      ]
    }
  }
}
</script>
