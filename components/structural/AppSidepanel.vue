<script setup lang="ts">
import Picture from '~/assets/img/ricardo-boss-2023.square.min.png'
</script>

<template>
  <aside>
    <img alt="Ricardo Boss 20231" :src="Picture" id="picture" />
  </aside>
</template>

<style scoped lang="scss">
aside {
  display: flex;
  flex-direction: column;
  padding: 1rem;
}

#picture {
  width: 100%;
  height: auto;
  border-radius: 50%;
  margin: 0 auto;
}
</style>
