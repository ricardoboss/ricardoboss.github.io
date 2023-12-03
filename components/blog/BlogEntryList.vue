<script setup lang="ts">
import BlogEntryListItem from "~/components/blog/BlogEntryListItem.vue"
import type { QueryBuilderParams } from "@nuxt/content/dist/runtime/types"

const query: QueryBuilderParams = {
  sort: [
    {
      createdAt: -1,
    },
  ],
  only: ["title", "description", "createdAt", "_path", "_id"],
}

// maybe use https://github.com/fumeapp/dayjs

function humanMonth(m: number) {
  switch (m) {
    case 0:
      return "January"
    case 1:
      return "February"
    case 2:
      return "March"
    case 3:
      return "April"
    case 4:
      return "May"
    case 5:
      return "June"
    case 6:
      return "July"
    case 7:
      return "August"
    case 8:
      return "September"
    case 9:
      return "October"
    case 10:
      return "November"
    case 11:
      return "December"
  }
}

function entryYear(entry: { createdAt: string }) {
  return new Date(entry.createdAt).getFullYear()
}

function entryMonth(entry: { createdAt: string }) {
  return new Date(entry.createdAt).getMonth()
}

// kinda dirty, but it works
let year = 0
let month = 0
</script>

<template>
  <div id="blog-entry-list">
    <ContentList path="/blog" :query="query">
      <template #default="{ list }">
        <template v-for="entry in list" :key="entry._id">
          <template v-if="year !== entryYear(entry)">
            <h2 class="year-header">{{ (year = entryYear(entry)) }}</h2>
          </template>

          <template v-if="month !== entryMonth(entry)">
            <h3 class="month-header">
              {{ humanMonth((month = entryMonth(entry))) }}
            </h3>
          </template>

          <blog-entry-list-item :entry="entry" class="blog-entry-list-item" />
        </template>
      </template>
      <template #not-found>No blog entries found.</template>
    </ContentList>
  </div>
</template>

<style scoped lang="scss">
#blog-entry-list {
  display: flex;
  flex-direction: column;
  gap: 1em;

  .year-header {
    margin: 0 0 0 0;
    padding-bottom: 0.25em;

    border-bottom: 1px solid #404040;

    font-size: 1.75em;
    font-weight: 400;

    &:first-child {
      margin-top: 0;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  .month-header {
    margin: 0 0 0 0.5em;
    padding-bottom: 0.25em;

    border-bottom: 1px solid #404040;

    font-size: 1.4em;
    font-weight: 300;
  }
}
</style>
