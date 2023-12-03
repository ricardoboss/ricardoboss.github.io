<script setup lang="ts">
import { reactive } from 'vue'
import PageHeader from '~/components/structural/PageHeader.vue'

const posts = reactive([])

// async asyncData({ $content, error }) {
//   try {
//     let queryBuilder;
//     if (process.env.NODE_ENV === "development") {
//       queryBuilder = $content({ deep: true })
//     } else {
//       queryBuilder = $content('blog', { deep: true })
//     }
//
//     const posts = await queryBuilder
//       .only(['title', 'description', 'path', 'createdAt'])
//       .sortBy("createdAt", "desc")
//       .fetch();
//     return { posts };
//   } catch (err) {
//     error({
//       statusCode: 404,
//       message: "Page could not be found"
//     });
//   }
// },
</script>

<template>
  <main>
    <page-header title="Blog">
      I occasionally write about things I find interesting or projects I want to
      document. Don't expect regular updates.
    </page-header>

    <div id="blog-entry-list">
      <nuxt-link
        v-for="post in posts"
        :key="post.path"
        class="blog-entry"
        :to="post.path"
      >
        <h2 class="blog-entry-title">
          <span class="pound-sign">&num;</span>{{ post.title }}
        </h2>

        <small class="blog-entry-timestamp">
          <!--          {{ $moment(post.createdAt).fromNow() }} on {{ $moment(post.createdAt).format("L") }}-->
        </small>

        <p class="blog-entry-description">{{ post.description }}</p>
      </nuxt-link>

      <div v-if="posts.length === 0">No posts were found.</div>
    </div>
  </main>
</template>

<style scoped lang="scss">
.blog-entry-list {
  display: flex;
  flex-direction: column;
}

.pound-sign {
  transition: all 0.2s;
}

.blog-entry {
  color: inherit;
  text-decoration: none;
  transition: all 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.1);

    .blog-entry-title {
      color: var(--bs-primary);

      .pound-sign {
        color: inherit !important;
      }
    }
  }
}
</style>
