<template>
  <main>
    <ContentDoc>
      <template #default="{ doc }">
        <NuxtLink to="/blog">&laquo; Back to overview</NuxtLink>

        <article>
          <h1>{{ doc.title }}</h1>
          <div class="date">
            Created at
            {{ new Date(doc.createdAt).toLocaleDateString() }}
          </div>
          <ContentRenderer :value="doc" />
        </article>
      </template>

      <template #not-found>
        <h1>Not found</h1>
        <p>Sorry, but the requested blog post could not be found.</p>
      </template>
    </ContentDoc>

    <NuxtLink to="/blog">&laquo; Back to overview</NuxtLink>
  </main>
</template>

<style scoped lang="scss">
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
</style>
