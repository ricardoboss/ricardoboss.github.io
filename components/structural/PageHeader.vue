<script setup lang="ts">
interface Props {
  title: string
}

defineProps<Props>()
</script>

<template>
  <section>
    <h1>{{ title }}</h1>

    <p v-if="$slots.default">
      <slot />
    </p>

    <hr />
  </section>
</template>

<style scoped lang="scss">
section {
  h1 {
    font-size: 3em;
    line-height: 1.2;
    font-weight: 200;
    margin-top: 0;
    margin-bottom: 0.5em;
  }

  p {
    font-size: 1.05em;
    line-height: 1.5;
  }

  hr {
    border: 0;
    border-top: 1px solid #404040;
    margin: 1.5em 0;
  }
}
</style>
