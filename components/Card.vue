<script setup lang="ts">
import type CardData from '~/models/CardData'
import CardLink from '~/components/CardLink.vue'
import Pill from '~/components/Pill.vue'

interface Props {
  card: CardData
  imageMaxHeight?: string
}

defineProps<Props>()
</script>

<template>
  <div class="card">
    <img
      v-if="card.image"
      class="image"
      :alt="card.title"
      :src="card.image"
      :style="`--image-max-height: ${
        card.imageMaxHeight ?? imageMaxHeight ?? 'auto'
      }; --image-padding: ${card.imagePadding ?? '1em'};`"
    />
    <div class="title">{{ card.title }}</div>
    <div class="description" v-html="card.description" />
    <div class="links" v-if="card.links">
      <card-link v-for="(link, i) in card.links" :key="i" :link="link" />
    </div>
    <div class="pills" v-if="card.pills">
      <pill v-for="(pill, i) in card.pills" :key="i" :pill="pill" />
    </div>
  </div>
</template>

<style scoped lang="scss">
$item-padding: 0.75rem;
$card-bg: #333333;
$card-border: 1px solid lighten($card-bg, 5%);
$card-link-hover: lighten($card-bg, 3%);

@mixin card-section {
  padding-left: $item-padding;
  padding-right: $item-padding;

  &:not(:first-child) {
    padding-top: $item-padding;
  }

  &:not(:last-child) {
    padding-bottom: $item-padding;
    border-bottom: $card-border;
  }

  &:last-child {
    padding-bottom: $item-padding;
  }

  &:first-child {
    padding-top: $item-padding;
  }
}

.card {
  background: $card-bg;
  border: $card-border;
  border-radius: $item-padding;
  display: flex;
  flex-direction: column;
  overflow: clip;

  .image {
    width: auto;
    height: auto;
    max-height: var(--image-max-height);
    padding: var(--image-padding) !important;
  }

  .title {
    font-size: 1.3rem;
    font-weight: 600;

    border-bottom: none !important;
    padding-bottom: 0 !important;
  }

  .description {
    height: 100%;
    min-height: 6rem;
  }

  .links {
    display: flex;
    flex-direction: column;

    padding: 0 !important;

    & > * {
      @include card-section;

      color: currentColor;
      text-decoration: none;

      &:hover {
        background: $card-link-hover;
      }
    }
  }

  .pills {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.25rem;
  }

  & > * {
    @include card-section;
  }
}
</style>
