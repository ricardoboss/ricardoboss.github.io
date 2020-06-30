<template>
  <div class="layout-container">
    <div class="layout-row">
      <Sidepanel class="layout-sidepanel"/>

      <div class="layout-main-panel">
        <nav class="layout-row">
          <Navbar class="layout-navbar" />
        </nav>

        <main class="layout-row">
          <transition name="fade" appear>
            <nuxt class="layout-content" />
          </transition>
        </main>
      </div>
    </div>
  </div>
</template>
<script>
  import Navbar from "../components/Navbar.vue";
  import Sidepanel from "../components/Sidepanel.vue";

  export default {
    components: {Sidepanel, Navbar}
  }
</script>
