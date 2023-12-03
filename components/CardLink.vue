<script setup lang="ts">
import type CardLinkData from "~/models/CardLinkData"

interface Props {
  link: CardLinkData
}

defineProps<Props>()
</script>

<template>
  <a :href="link.href" :rel="link.rel" :target="link.target">
    {{ link.title }}
  </a>
</template>
