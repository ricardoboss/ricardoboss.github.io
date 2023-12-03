<script setup lang="ts">
import AppSidepanel from '~/components/structural/AppSidepanel.vue'
import AppNavbar from '~/components/structural/AppNavbar.vue'
import AppFooter from '~/components/structural/AppFooter.vue'
</script>

<template>
  <div id="default-layout">
    <app-sidepanel id="sidepanel" />
    <app-navbar id="navbar" />
    <div id="content">
      <NuxtPage />
    </div>
    <app-footer id="footer" />
  </div>
</template>

<style lang="scss" scoped>
#default-layout {
  display: grid;

  grid-template:
    'navbar' auto
    'content' minmax(100dvh, 1fr)
    'footer' auto / 1fr;

  @media (min-width: 800px) {
    grid-template:
      'sidepanel navbar ' auto
      'sidepanel content' minmax(100dvh, 1fr)
      'sidepanel footer' auto / 300px 1fr;

    #sidepanel {
      display: block;
    }
  }
}

#sidepanel {
  grid-area: sidepanel;

  display: none;
}

#navbar {
  grid-area: navbar;
}

#content {
  grid-area: content;
  padding-right: 1em;
  padding-left: 1em;
}

#footer {
  grid-area: footer;
}
</style>
