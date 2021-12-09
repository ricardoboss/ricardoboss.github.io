<template>
  <section>
    <h1 class="display-3">Blog</h1>

    <div class="blog-entry-list">
      <nuxt-link v-for="post in posts" :key="post.path"
                 class="d-flex flex-column py-3 p-2 border-bottom blog-entry"
                 :to="post.path">
        <h5 class="mb-0 entry-title">
          <span class="text-muted me-2 num-sign">&num;</span>{{ post.title }}
        </h5>

        <small class="text-nowrap text-muted">
          {{ $moment(post.createdAt).fromNow() }} on {{ $moment(post.createdAt).format("L") }}
        </small>

        <p class="m-3">{{ post.description }}</p>
      </nuxt-link>
      <div v-if="posts.length === 0">
        No posts were found.
      </div>
    </div>
  </section>
</template>

<script>
export default {
  layout: "default",

  async asyncData({ $content, error }) {
    try {
      const posts = await $content({ deep: true })
        .only(['title', 'description', 'path', 'createdAt'])
        .sortBy("createdAt", "desc")
        .fetch();
      return { posts };
    } catch (err) {
      error({
        statusCode: 404,
        message: "Page could not be found"
      });
    }
  },

  data() {
    return {
      posts: []
    };
  }
};
</script>

<style scoped lang="scss">
.blog-entry-list {
  display: flex;
  flex-direction: column;
}

.num-sign {
  transition: all 0.2s;
}

.blog-entry {
  color: inherit;
  text-decoration: none;
  transition: all 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.1);

    .entry-title {
      color: var(--bs-primary);

      .num-sign {
        color: inherit !important;
      }
    }
  }
}
</style>
