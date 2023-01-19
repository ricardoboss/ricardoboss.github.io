<template>
  <section>
    <h1 class="display-3">Projects</h1>

    <span class="lead">
      Open source projects I maintain/started. These projects where created and updated exclusively or mostly in my free time.
      Also take a look at <router-link to="/portfolio">my Portfolio</router-link> to see which projects I used in my everyday jobs.
    </span>

    <hr class="my-4" />

    <ProjectBoard :projects="projects" col_settings="row-cols-1 row-cols-md-2 row-cols-lg-3 g-3"/>
  </section>
</template>

<script>
import ProjectBoard from "~/components/ProjectBoard.vue";

export default {
  components: {ProjectBoard},
  layout: 'default',

  computed: {
    projects() {
      return [
        {
          title: 'dart_nmea',
          description: 'A Dart decoder for the NMEA0183 protocol.',
          links: [
            {title: 'Source', href: 'https://github.com/ricardoboss/dart_nmea'}
          ],
          languages: ['Dart']
        },
        {
          title: 'states-game',
          description: 'A game where you can guess the 50 states of the USA.',
          links: [
            {title: 'Play now!', href: 'https://states-game.ricardoboss.de'},
            {title: 'Source', href: 'https://github.com/ricardoboss/states-game'}
          ],
          languages: ['TS', 'Vue']
        },
        {
          title: 'HostedWPF',
          description: 'Base classes for windows, pages and controls using MVVM and dependency injection.',
          links: [
            {title: 'Source', href: 'https://github.com/ricardoboss/HostedWPF'},
            {title: 'nuget', href: 'https://www.nuget.org/packages/HostedWPF/'}
          ],
          languages: ['C#', '.NET', 'WPF']
        },
        {
          title: 'yapsi',
          description: 'Yet another pub-sub implementation.',
          links: [
            {title: 'Source', href: 'https://github.com/ricardoboss/yapsi'},
            {title: 'nuget', href: 'https://www.nuget.org/packages/yapsi/'}
          ],
          languages: ['C#', '.NET']
        },
        {
          title: 'extended-nmea',
          description: 'A TypeScript decoder for the NMEA0183 protocol.',
          links: [
            {title: 'Source', href: 'https://github.com/ricardoboss/extended-nmea'}
          ],
          languages: ['TS', 'Vue']
        },
        {
          title: 'vessel-state',
          description: 'A Vuex store plugin for maintaining an application-wide vessel state.',
          links: [
            {title: 'Source', href: 'https://github.com/ricardoboss/vessel-state'}
          ],
          languages: ['TS', 'Vue']
        },
        {
          image: 'https://raw.githubusercontent.com/elephox-dev/.github/main/profile/logo.svg',
          title: 'Elephox',
          description: 'Yet another PHP framework.',
          links: [
            {title: 'Project Homepage', href: 'https://elephox.dev'},
            {title: 'Source', href: 'https://github.com/elephox-dev/framework'}
          ],
          languages: ['PHP']
        },
        {
          title: 'It\'s rocket science',
          description: 'A little browser game in which you control a rocket, orbiting a single planet.',
          links: [
            {title: 'Project Homepage', href: 'https://rocket-science.ricardoboss.de'},
            {title: 'Source', href: 'https://github.com/ricardoboss/rocket-science'}
          ],
          languages: ['JS', 'Vue']
        },
        {
          title: 'php-console-logger',
          description: 'Simple PHP package for logging to a console with color and formatting.',
          links: [
            {title: 'Source', href: 'https://github.com/ricardoboss/php-console-logger'}
          ],
          languages: ['PHP']
        },
        {
          title: 'ricardoboss.de',
          description: 'This website.',
          links: [
            {title: 'Project Homepage', href: 'https://ricardoboss.de'},
            {title: 'Source', href: 'https://github.com/ricardoboss/ricardoboss.github.io/tree/source'}
          ],
          languages: ['JS', 'Vue']
        },
        {
          title: 'Analyzer Studio',
          description: 'Tool to help you compare objects via properties defined by you.',
          links: [
            {title: 'Source', href: 'https://github.com/ricardoboss/AnalyzerStudio'}
          ],
          languages: ['C#', '.NET', 'WPF']
        },
        {
          title: 'laravel-roles-migrations',
          description: 'A tool which adds migrations for <a href="https://github.com/jeremykenedy/laravel-roles" target="_blank">jeremykenedy/laravel-roles</a>.',
          links: [
            {title: 'Source', href: 'https://github.com/ricardoboss/laravel-roles-migrations'}
          ],
          languages: ['PHP']
        },
        {
          image: '/img/gmc-logo-banner.120.min.png',
          title: 'GameModeControl',
          description: 'A plugin for Minecraft Servers which adds commands and permissions for changing the gamemode of players.',
          links: [
            {title: 'Project Homepage', href: 'https://dev.bukkit.org/projects/gamemode-control'},
            {title: 'Statistics', href: 'https://bstats.org/plugin/bukkit/GMC'},
            {title: 'Source', href: 'https://github.com/ricardoboss/GameModeControl'}
          ],
          languages: ['Java']
        },
        {
          title: 'WEpS',
          description: 'WorldEdit plus Signs. Adds a WE-style command for editing signs to Minecraft Servers.',
          links: [
            {title: 'Project Homepage', href: 'https://dev.bukkit.org/projects/world-edit-plus-signs'},
            {title: 'Source', href: 'https://github.com/ricardoboss/WEpS'}
          ],
          languages: ['Java']
        },
        {
          title: 'dotnet-remote-setup',
          description: 'A script to help you set up .NET Core debugging on a remote device (like a Raspberry PI).',
          links: [
            {title: 'Source', href: 'https://github.com/ricardoboss/dotnet-remote-setup'}
          ],
          languages: ['Powershell']
        },
        {
          title: 'php-installer',
          description: 'GUI which downloads and installs PHP versions for Windows.',
          links: [
            {title: 'Source', href: 'https://github.com/ricardoboss/php-installer'}
          ],
          languages: ['C#', '.NET', 'WPF']
        },
        {
          title: 'BSCLI',
          description: 'Command line tool which downloads and installs Beat Saber songs from <a href="https://beatsaver.com/" target="_blank">BeatSaver</a>.',
          links: [
            {title: 'Source', href: 'https://github.com/ricardoboss/BSCLI'}
          ],
          languages: ['C#', '.NET']
        },
        {
          title: 'WebConsole',
          description: 'Remote console interface for Minecraft servers. Plugin is written in Java, client in PHP.',
          links: [
            {title: 'Project Homepage', href: 'https://dev.bukkit.org/projects/webconsole'},
            {title: 'Client Source', href: 'https://github.com/ricardoboss/WebConsole-Client'},
            {title: 'Plugin Source', href: 'https://github.com/ricardoboss/WebConsole-Server'},
          ],
          languages: ['PHP', 'Java']
        },
        {
          title: 'LoginLib',
          description: 'A php library that provides the background mechanics of a registration and login for your website.',
          links: [
            {title: 'Source', href: 'https://github.com/ricardoboss/LoginLib'},
          ],
          languages: ['PHP']
        }
      ];
    }
  }
}
</script>
