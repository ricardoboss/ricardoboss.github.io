<script setup lang="ts" generic="T">
defineProps<{
  data: T[]
  mainSelector: (item: T) => string
  subSelector: (item: T) => string
}>()

let main = ""
let sub = ""
</script>

<template>
  <div class="sectioned-list">
    <slot name="empty" v-if="data.length === 0" />
    <template v-else v-for="(item, i) in data" :key="i">
      <template v-if="main !== mainSelector(item)">
        <h2 class="main-header">{{ (main = mainSelector(item)) }}</h2>
      </template>

      <template v-if="sub !== subSelector(item)">
        <h3 class="sub-header">{{ (sub = subSelector(item)) }}</h3>
      </template>

      <div class="item">
        <slot name="item" v-bind="item" />
      </div>
    </template>
  </div>
</template>

<style scoped lang="scss">
@use "sass:color";

@import "@/style/global";

.sectioned-list {
  .main-header {
    font-weight: 300;
    font-size: 1.75em;

    margin: 0 0 0.5em 0;
    padding-top: 0.5em;
    padding-bottom: 0.5em;

    position: sticky;
    top: 0;

    z-index: 2;

    background: $body-bg;

    border-bottom: 1px solid color.adjust($body-bg, $lightness: 15%);
  }

  .sub-header {
    font-weight: 300;
    font-size: 1.5em;

    margin: 0 0 0.5em 0;
    padding-bottom: 0.25em;
    padding-top: 0.5em;

    position: sticky;
    top: 2.5em;

    z-index: 1;

    background: $body-bg;

    text-decoration: underline;
    text-decoration-color: color.adjust($body-bg, $lightness: 10%);
    text-underline-offset: 0.3em;
    text-decoration-thickness: 0.01em;
  }

  .item {
    margin-bottom: 0.5em;

    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
