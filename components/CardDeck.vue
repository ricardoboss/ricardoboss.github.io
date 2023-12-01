<script setup lang="ts">
import type Card from '~/models/Card'

export interface Props {
  cards: Card[]
}

defineProps<Props>()
</script>

<template>
  <div>
    <div v-for="(card, i) in cards" :key="i">
      {{ card.title }}
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
