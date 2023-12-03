<script setup lang="ts"></script>

<template>
  <main>
    <ContentDoc v-slot="{ doc }">
      <NuxtLink to="/blog">&laquo; Back to overview</NuxtLink>

      <article>
        <h1>{{ doc.title }}</h1>
        <div class="date">
          Created at
          {{ new Date(doc.createdAt).toLocaleDateString() }}
        </div>
        <ContentRenderer :value="doc" />
      </article>
    </ContentDoc>

    <NuxtLink to="/blog">&laquo; Back to overview</NuxtLink>
  </main>
</template>

<style scoped lang="scss">
article {
  h1 {
    font-size: 3em;
    font-weight: 300;

    margin-top: 0.5em;
    margin-bottom: 0.25em;
  }

  .date {
    font-size: 0.8em;
    opacity: 0.5;
  }
}
</style>
