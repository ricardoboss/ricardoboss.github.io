<script setup lang="ts">
import PageHeader from "~/components/structural/PageHeader.vue"
import BlogEntryList from "~/components/blog/BlogEntryList.vue"
import { useHead, useSeoMeta } from "#app/composables"

const description =
  "I occasionally write about things I find interesting or projects I want to document."

useHead({
  title: "Blog",
})

useSeoMeta({
  description,
})
</script>

<template>
  <main>
    <page-header title="Blog">
      {{ description }} Don't expect regular updates.
    </page-header>

    <blog-entry-list />
  </main>
</template>
