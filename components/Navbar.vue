<template>
  <ul role="menu" class="nav nav-pills justify-content-end">
    <li class="nav-item">
      <nuxt-link class="nav-link" to="/blog" active-class="active">Blog</nuxt-link>
    </li>
    <li class="nav-item">
      <nuxt-link class="nav-link" to="/curriculum-vitae">Curriculum Vitae</nuxt-link>
    </li>
    <li class="nav-item">
      <nuxt-link class="nav-link" to="/projects">Projects</nuxt-link>
    </li>
    <li class="nav-item">
      <nuxt-link class="nav-link" to="/portfolio">Portfolio</nuxt-link>
    </li>
    <li class="nav-item">
      <nuxt-link class="nav-link" to="/contact">Contact</nuxt-link>
    </li>
    <li class="nav-item">
      <nuxt-link class="nav-link" to="/uses">Uses</nuxt-link>
    </li>
  </ul>
</template>

<style scoped lang="scss">
.nav-link {
  padding: .4rem .85rem;
}
</style>
