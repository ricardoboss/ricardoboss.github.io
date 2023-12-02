<script setup lang="ts">
import AppSidepanel from '~/components/AppSidepanel.vue'
import AppNavbar from '~/components/AppNavbar.vue'
import AppFooter from '~/components/AppFooter.vue'
</script>

<template>
  <div id="default-layout">
    <app-sidepanel id="sidepanel" />
    <app-navbar id="navbar" />
    <div id="content">
      <slot />
    </div>
    <app-footer id="footer" />
  </div>
</template>

<style lang="scss" scoped>
#default-layout {
  display: grid;
  grid-template:
    'sidepanel navbar ' auto
    'sidepanel content' minmax(100dvh, 1fr)
    'sidepanel footer' auto / 2fr 7fr;
}

#sidepanel {
  grid-area: sidepanel;
}

#navbar {
  grid-area: navbar;
}

#content {
  grid-area: content;
  padding-right: 1rem;
  padding-left: 1rem;
}

#footer {
  grid-area: footer;
}
</style>
