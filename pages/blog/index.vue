<template>
  <section>
    <h1 class="display-3">Blog</h1>

    <div class="blog-entry-list">
      <nuxt-link v-for="post in sortedPosts" :key="post.attributes.title"
                 class="d-flex flex-column py-3 p-2 border-bottom blog-entry"
                 :to="getPermalink(post)">
        <h5 class="mb-0 entry-title">
          <span class="text-muted mr-2 num-sign">&num;</span>{{ post.attributes.title }}
        </h5>

        <small class="text-nowrap text-muted">
          {{ $moment(post.attributes.timestamp).fromNow() }} on {{ $moment(post.attributes.timestamp).format('L') }}
        </small>

        <p class="m-3">{{ post.attributes.summary }}</p>
      </nuxt-link>
      <div v-if="posts.length === 0">
        No posts were found.
      </div>
    </div>
  </section>
</template>

<script>
	export default {
    layout: 'default',

    async asyncData() {
      try {
        const resolve = require.context("~/content/", true, /\d{4}-\d{2}-\d{2}-.+\.md$/i);
        const now = new Date();
        const imports = resolve.keys()
          .map(k => {
            let p = resolve(k);

            return {
              attributes: p.attributes,
              meta: p.meta
            };
          })
          .filter(post => {
            let postTimestamp = new Date(post.attributes.timestamp);

            return postTimestamp < now;
          });

        return {
          posts: imports
        };
      } catch (e) {
        console.error(e);

        throw e;
      }
    },

    data() {
      return {
        posts: []
      }
    },

    methods: {
      getPermalink(post) {
        let filename = post.meta.resourcePath // path to file
          .split('\\').pop()                  // handle windows paths
          .split('/').pop()                   // handle *nix paths
          .split('.').shift();                // remove extension

        return `/blog/${filename}`;
      }
    },

    computed: {
      sortedPosts() {
        return this.posts.slice().sort(p => p.attributes.timestamp).reverse();
      }
    }
	}
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
    background: rgba(255,255,255,0.1);

    .entry-title {
      color: var(--bs-primary);

      .num-sign {
        color: inherit !important;
      }
    }
  }
}
</style>
