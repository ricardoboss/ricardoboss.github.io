<script setup lang="ts">
import { computed } from 'vue'
import type { MarkdownParsedContent } from '@nuxt/content/dist/runtime/types'

interface Props {
  entry: MarkdownParsedContent
}

const props = defineProps<Props>()

const ago = computed(() => {
  const now = new Date()
  const then = new Date(props.entry.createdAt)

  const diff = now.getTime() - then.getTime()

  const seconds = Math.floor(diff / 1000)
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)
  const months = Math.floor(days / 30)
  const years = Math.floor(months / 12)

  if (years > 0) {
    return `${years} year${years === 1 ? '' : 's'}`
  }

  if (months > 0) {
    return `${months} month${months === 1 ? '' : 's'}`
  }

  if (days > 0) {
    return `${days} day${days === 1 ? '' : 's'}`
  }

  if (hours > 0) {
    return `${hours} hour${hours === 1 ? '' : 's'}`
  }

  if (minutes > 0) {
    return `${minutes} minute${minutes === 1 ? '' : 's'}`
  }

  return `${seconds} second${seconds === 1 ? '' : 's'}`
})

const humanDate = computed(() => {
  const date = new Date(props.entry.createdAt)

  return date.toLocaleDateString()
})
</script>

<template>
  <NuxtLink :to="entry._path" class="blog-entry-list-item">
    <h2 class="title">{{ entry.title }}</h2>
    <div class="date">{{ ago }} ago on {{ humanDate }}</div>
    <p class="description">
      <ContentSlot>
        {{ entry.description }}
      </ContentSlot>
    </p>
  </NuxtLink>
</template>

<style scoped lang="scss">
@import '@/style/global';

.blog-entry-list-item {
  color: inherit;
  text-decoration: none;

  transition: all 0.2s;

  display: block;
  padding: 1.5em;

  border-radius: 0.5em;

  .title {
    @include link-style;

    margin-top: 0;
    margin-bottom: 0.25em;
  }

  .date {
    font-size: 0.8em;
    opacity: 0.5;
  }

  &:hover {
    background: #404040;
  }
}
</style>
