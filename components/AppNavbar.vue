<script setup lang="ts"></script>

<template>
  <nav>
    <router-link to="/blog">Blog</router-link>
    <router-link to="/curriculum-vitae">Curriculum Vitae</router-link>
    <router-link to="/projects">Projects</router-link>
    <router-link to="/portfolio">Portfolio</router-link>
    <router-link to="/contact">Contact</router-link>
  </nav>
</template>

<style scoped lang="scss">
@import '@/style/global';

nav {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 5dvh;
  margin-top: 0.5rem;
  margin-right: 0.5rem;

  & > * {
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;

    &.router-link-active {
      background: $accent;
      color: $body-bg;
    }
  }
}
</style>
