<script setup lang="ts">
import AppSidepanel from "~/components/structural/AppSidepanel.vue"
import AppNavbar from "~/components/structural/AppNavbar.vue"
import AppFooter from "~/components/structural/AppFooter.vue"
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

<style lang="scss">
#default-layout {
  display: grid;
  width: 100%;
  max-width: 100%;

  grid-template:
    "navbar" auto
    "content" minmax(100dvh, 1fr)
    "footer" auto / 1fr;

  @media (min-width: 800px) {
    grid-template:
      "sidepanel navbar " auto
      "sidepanel content" minmax(100dvh, 1fr)
      "sidepanel footer" auto / 300px 1fr;

    #sidepanel {
      display: block;
    }

    max-width: 1000px;
  }

  @media (min-width: 1200px) {
    max-width: 1200px;
  }

  @media (min-width: 1600px) {
    max-width: 1600px;
  }

  margin: 0 auto;
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
  min-width: 0;
}

#footer {
  grid-area: footer;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.15s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateX(0.5em);
}
</style>
