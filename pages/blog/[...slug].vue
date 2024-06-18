<template>
  <main>
    <ContentDoc>
      <template #default="{ doc }">
        <NuxtLink to="/blog">&laquo; Back to overview</NuxtLink>

        <article>
          <h1 id="title">{{ doc.title }}</h1>
          <div id="date">
            Created at
            {{ new Date(doc.createdAt).toLocaleDateString() }}
          </div>
          <ContentRenderer :value="doc" id="article-content" />
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
#title {
  font-size: 3em;
  font-weight: 300;

  margin-top: 0.5em;
  margin-bottom: 0.25em;
}

#date {
  font-size: 0.8em;
  opacity: 0.5;
}

#article-content {
  font-size: 1.2em;
  font-weight: 300;
  letter-spacing: 0.03em;
  line-height: 1.85;
  max-width: 80ch;
  margin: 0 auto;
}
</style>
