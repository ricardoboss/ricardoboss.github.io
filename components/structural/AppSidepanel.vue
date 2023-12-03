<script setup lang="ts">
import Picture from '~/assets/img/ricardo-boss-2023.square.min.png'
import TitleRoller from '~/components/TitleRoller.vue'

const slogans = [
  'Software Developer',
  'Fullstack Developer',
  '.NET Developer',
  'Software Engineer',
  'PHP Developer',
  'Vue.js Developer',
  'Backend Developer',
  'Web Developer',
  'Mobile App Developer',
]
</script>

<template>
  <aside>
    <div id="sticky-wrapper">
      <img alt="Ricardo Boss 20231" :src="Picture" id="picture" />

      <div id="info">
        <span>Hi, I'm</span>
        <span>Ricardo Boss</span>
        <span>a</span>
        <title-roller :titles="slogans" :interval="10000" />
      </div>
    </div>
  </aside>
</template>

<style scoped lang="scss">
@import '@/style/global';

aside {
  display: flex;
  flex-direction: column;
  padding: 1em;
}

#sticky-wrapper {
  position: sticky;
  top: 1em;
}

#picture {
  width: 100%;
  height: auto;

  margin: 0 auto;

  border: solid 2px $accent;
  border-radius: 50%;
}

#info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5em;

  margin-top: 2em;

  :nth-child(2) {
    font-size: 2em;
  }

  :nth-child(3) {
    margin-top: 1em;
  }

  :nth-child(4) {
    font-size: 1.3em;
  }
}
</style>
