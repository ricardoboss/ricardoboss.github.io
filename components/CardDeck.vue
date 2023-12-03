<script setup lang="ts">
import type CardData from '~/models/CardData'
import Card from '~/components/Card.vue'

export interface Props {
  cards: CardData[]
  imageMaxHeight?: string
  cardWidth?: string
}

defineProps<Props>()
</script>

<template>
  <div class="card-deck" :style="`--card-width: ${cardWidth ?? '20rem'}`">
    <card
      v-for="(card, i) in cards"
      :key="i"
      :card="card"
      :image-max-height="imageMaxHeight"
    >
      {{ card.title }}
    </card>
  </div>
</template>

<style scoped lang="scss">
.card-deck {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(var(--card-width), 1fr));
  grid-gap: 1rem;
}
</style>
