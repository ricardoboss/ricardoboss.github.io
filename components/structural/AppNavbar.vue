<script setup lang="ts"></script>

<template>
  <nav>
    <router-link to="/blog">Blog</router-link>
    <router-link to="/curriculum-vitae">Curriculum Vitae</router-link>
    <router-link to="/projects">Projects</router-link>
    <router-link to="/portfolio">Portfolio</router-link>
    <router-link to="/uses">Uses</router-link>
    <router-link to="/contact">Contact</router-link>
  </nav>
</template>

<style scoped lang="scss">
@import "@/style/global";

nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: center;

  padding: 1rem 1rem 0 0;

  & > * {
    margin-left: -0.5rem;

    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;

    transition: background 0.1s ease-out;

    white-space: nowrap;

    &.router-link-active {
      background: $accent !important;
      color: $body-bg;
    }

    &:hover {
      background: transparentize($accent, 0.85);
    }
  }
}
</style>
