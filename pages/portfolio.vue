<template>
  <section>
    <h1 class="display-3">Portfolio</h1>

    <span class="lead">
      These are projects which I have worked on (or at least partially) in my job or in my free time. For most of the projects, I cannot share
      the source code. Instead, I can show which tech stack was used and link to the result.
      Also take a look at <router-link to="/projects">my open source projects</router-link>.
    </span>

    <hr class="my-4" />

    <ProjectBoard :projects="projects" col_settings="row-cols-1 row-cols-md-2 row-cols-lg-3 g-3"/>
  </section>
</template>

<script>
import ProjectBoard from "~/components/ProjectBoard";

export default {
  components: {ProjectBoard},
  layout: 'default',

  computed: {
    projects() {
      return [
        {
          title: 'TRENZ Docs',
          description: 'A way to host Azure DevOps wikis (or any Markdown-based wiki, really) publicly. Includes authentication support.',
          links: [
            {title: 'API Source', href: 'https://github.com/trenz-gmbh/trenz-docs-api'},
            {title: 'Frontend Source', href: 'https://github.com/trenz-gmbh/trenz-docs'},
            {title: 'Example', href: 'https://docs.ela.easylogic.de'}
          ],
          languages: ['Vue', 'TS', '.NET', 'C#']
        },
        {
          title: 'SVB',
          description: 'Your specialist online shop for technical boat equipment, sailing accessories and water sports equipment.',
          links: [
            {title: 'Visit', href: 'https://svb24.com/'}
          ],
          languages: ['PHP', 'Symfony']
        },
        {
          title: 'sendmeback Account',
          description: 'Customer backend for managing purchased sendmeback products. Features an ASP.NET backend with JWT authentication.',
          links: [],
          languages: ['TS', 'Vue']
        },
        {
          title: 'sendmeback App',
          description: 'App for viewing registered products and pairing a smartphone with a product. Enable localization and sending notifications to the smartphone.',
          links: [],
          languages: ['Dart', 'Flutter', 'Android', 'iOS']
        },
        {
          title: 'Age of Aincrad (website)',
          description: 'A website for a game (currently in development). Features include login via Discord, Strapi as a backend and a Vuetify frontend.',
          links: [
            {title: 'Visit', href: 'https://age-of-aincrad.com/'}
          ],
          languages: ['TS', 'Vue']
        },
        {
          title: 'TRENZ Pilot Plug Manager App',
          description: 'Mobile application to interact with a TRENZ Pilot Plug. Features cross-platform TCP socket communication. Analytics using Microsoft App Center.',
          links: [
            {title: 'Play Store', href: 'https://play.google.com/store/apps/details?id=de.trenz.PilotPlugRemote'},
            {title: 'App Store', href: 'https://apps.apple.com/us/app/pilot-plug-manager/id1437240460'}
          ],
          languages: ['C#', '.NET', 'Xamarin', 'Android', 'iOS']
        },
        {
          title: 'TRENZ Pilot Plug Manager',
          description: 'Desktop application to interact with a TRENZ Pilot Plug. Features serial port and socket communication. Analytics using Microsoft App Center.',
          links: [
            {title: 'Visit', href: 'https://manager.trenz-pilotplug.com/'}
          ],
          languages: ['C#', '.NET', 'WPF']
        },
      ];
    }
  },
}
</script>
