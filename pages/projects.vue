<template>
  <section>
    <h1 class="display-3">Projects</h1>

    <ProjectBoard :projects="projects" col_settings="row-cols-1 row-cols-md-2 row-cols-lg-3 g-3" />
  </section>
</template>

<script>
	import ProjectBoard from "../components/ProjectBoard.vue";
  export default {
    components: {ProjectBoard},
    layout: 'default',

    computed: {
      projects() {
        return [
          {
            title: 'extended-nmea',
            description: 'A TypeScript decoder for the NMEA0183 protocol.',
            links: [
              { title: 'Source', href: 'https://github.com/ricardoboss/extended-nmea' }
            ],
            languages: ['TS', 'Vue']
          },
          {
            title: 'vessel-state',
            description: 'A Vuex store plugin for maintaining an application-wide vessel state.',
            links: [
              { title: 'Source', href: 'https://github.com/ricardoboss/vessel-state' }
            ],
            languages: ['TS', 'Vue']
          },
          {
            image: '/img/philly-banner.120.min.png',
            title: 'Philly',
            description: 'Yet another PHP framework.',
            links: [
              {title: 'Project Homepage', href: 'https://philly.ricardoboss.de'},
              {title: 'Source', href: 'https://github.com/ricardoboss/Philly'}
            ],
            languages: ['PHP']
          },
          {
            title: 'It\'s rocket science',
            description: 'A little browser game in which you control a rocket, orbiting a single planet.',
            links: [
              { title: 'Project Homepage', href: 'https://rocket-science.ricardoboss.de' },
              { title: 'Source', href: 'https://github.com/ricardoboss/rocket-science' }
            ],
            languages: ['JS', 'Vue']
          },
          {
            title: 'php-console-logger',
            description: 'Simple PHP package for logging to a console with color and formatting.',
            links: [
              { title: 'Source', href: 'https://github.com/ricardoboss/php-console-logger' }
            ],
            languages: ['PHP']
          },
          {
            title: 'ricardoboss.de',
            description: 'This website.',
            links: [
              {title: 'Project Homepage', href: 'https://ricardoboss.de'},
              { title: 'Source', href: 'https://github.com/ricardoboss/ricardoboss.github.io/tree/source' }
            ],
            languages: ['JS', 'Vue']
          },
          {
            title: 'Analyzer Studio',
            description: 'Tool to help you compare objects via properties defined by you.',
            links: [
              { title: 'Source', href: 'https://github.com/ricardoboss/AnalyzerStudio' }
            ],
            languages: ['C#', '.NET']
          },
          {
            title: 'laravel-roles-migrations',
            description: 'A tool which adds migrations for <a href="https://github.com/jeremykenedy/laravel-roles" target="_blank">jeremykenedy/laravel-roles</a>.',
            links: [
              { title: 'Source', href: 'https://github.com/ricardoboss/laravel-roles-migrations' }
            ],
            languages: ['PHP']
          },
          {
            image: '/img/gmc-logo-banner.120.min.png',
            title: 'GameModeControl',
            description: 'A plugin for Minecraft Servers which adds commands and permissions for changing the gamemode of players.',
            links: [
              { title: 'Project Homepage', href: 'https://dev.bukkit.org/projects/gamemode-control' },
              { title: 'Statistics', href: 'https://bstats.org/plugin/bukkit/GMC' },
              { title: 'Source', href: 'https://github.com/ricardoboss/GameModeControl' }
            ],
            languages: ['Java']
          },
          {
            title: 'WEpS',
            description: 'WorldEdit plus Signs. Adds a WE-style command for editing signs to Minecraft Servers.',
            links: [
              { title: 'Project Homepage', href: 'https://dev.bukkit.org/projects/world-edit-plus-signs' },
              { title: 'Source', href: 'https://github.com/ricardoboss/WEpS' }
            ],
            languages: ['Java']
          },
          {
            title: 'dotnet-remote-setup',
            description: 'A script to help you set up .NET Core debugging on a remote device (like a Raspberry PI).',
            links: [
              { title: 'Source', href: 'https://github.com/ricardoboss/dotnet-remote-setup' }
            ],
            languages: ['Powershell']
          },
          {
            title: 'php-installer',
            description: 'GUI which downloads and installs PHP versions for Windows.',
            links: [
              { title: 'Source', href: 'https://github.com/ricardoboss/php-installer' }
            ],
            languages: ['C#', '.NET']
          },
          {
            title: 'BSCLI',
            description: 'Command line tool which downloads and installs Beat Saber songs from <a href="https://beatsaver.com/" target="_blank">BeatSaver</a>.',
            links: [
              { title: 'Source', href: 'https://github.com/ricardoboss/BSCLI' }
            ],
            languages: ['C#', '.NET']
          },
          {
            title: 'WebConsole',
            description: 'Remote console interface for Minecraft servers. Plugin is written in Java, client in PHP.',
            links: [
              { title: 'Project Homepage', href: 'https://dev.bukkit.org/projects/webconsole' },
              { title: 'Client Source', href: 'https://github.com/ricardoboss/WebConsole-Client' },
              { title: 'Plugin Source', href: 'https://github.com/ricardoboss/WebConsole-Server' },
            ],
            languages: ['PHP', 'Java']
          },
          {
            title: 'LoginLib',
            description: 'A php library that provides the background mechanics of a registration and login for your website.',
            links: [
              { title: 'Source', href: 'https://github.com/ricardoboss/LoginLib' },
            ],
            languages: ['PHP']
          }
        ];
      }
    }
	}
</script>

<style scoped>

</style>
