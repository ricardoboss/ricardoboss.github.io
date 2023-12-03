<script setup lang="ts">
import PageHeader from '~/components/structural/PageHeader.vue'
import BlogEntryList from '~/components/blog/BlogEntryList.vue'
</script>

<template>
  <main>
    <page-header title="Blog">
      I occasionally write about things I find interesting or projects I want to
      document. Don't expect regular updates.
    </page-header>

    <blog-entry-list />
  </main>
</template>
