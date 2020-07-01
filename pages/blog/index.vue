<template>
  <section>
    <h1 class="display-3">Blog</h1>

    <div class="list-group list-group-flush rounded ml-3">
      <nuxt-link v-for="post in sortedPosts" :key="post.attributes.title"
                 class="list-group-item list-group-item-action row align-items-center"
                 :to="getPermalink(post)">
        <p class="text-nowrap small text-muted col-12 col-md-4">
          {{ $moment(post.attributes.timestamp).fromNow() }} on {{ $moment(post.attributes.timestamp).format('L') }}
        </p>

        <div class="col-12 col-md-8">
          <h5>{{ post.attributes.title }}</h5>

          <p>{{ post.attributes.summary }}</p>
        </div>
      </nuxt-link>
      <div v-if="posts.length === 0" class="list-group-item">
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
        const resolve = require.context("~/content/", true, /\.md$/);
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

        this.$ga.exception(e);

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
