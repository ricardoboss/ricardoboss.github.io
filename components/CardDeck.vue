<script setup lang="ts">
import type CardData from '~/models/CardData'
import Card from '~/components/Card.vue'

export interface Props {
  cards: CardData[]
}

defineProps<Props>()
</script>

<template>
  <div class="card-deck">
    <card v-for="(card, i) in cards" :key="i" :card="card">
      {{ card.title }}
    </card>
  </div>
</template>

<style scoped lang="scss">
.card-deck {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  grid-gap: 1rem;
}
</style>
