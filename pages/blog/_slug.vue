<template>
  <article>
    <h1>{{ title }}</h1>

    <transition name="fade" mode="out-in">
      <main v-if="post !== null" key="article">
        <div class="d-flex flex-row flex-wrap small text-muted mb-3">
          <span class="mbr-1">{{ agoText }}</span>
          <span class="mbr-1">on {{ dateText }}</span>
          <span class="mbr-1">by {{ authorText }}</span>
        </div>

        <p class="lead" v-html="post.attributes.summary"></p>

        <component :is="post.vue.component" />
      </main>

      <div v-else-if="error" key="error">
        <div class="alert alert-danger" role="alert">
          <strong>Oh no!</strong> Looks like I couldn't find this post.
        </div>

        <a href="javascript:history.back()">&laquo; back to the previous page</a>
      </div>

      <div v-else class="w-100 h-100 d-flex justify-content-center align-items-center" key="loader">
        <div class="spinner-border"></div>
      </div>
    </transition>

    <hr>

    <p>
      Questions? Comments? You can contact me using e-mail, Twitter or Discord. Visit my <nuxt-link to="/contact">contact</nuxt-link> page for details.
    </p>

    <nuxt-link class="mb-2" to="/blog">&laquo; back to overview</nuxt-link>
  </article>
</template>

<script>
  export default {
    layout: 'default',

    async asyncData({params}) {
      return {
        slug:params.slug
      };
    },

    async created() {
	    try {
        this.post = await import(`~/content/${this.slug}.md`);
      } catch (e) {
        this.error = true;
      }
    },

    data() {
	    return {
	      slug: null,
        post: null,
        error: false
      }
    },

    computed: {
	    title() {
	      if (this.post !== null)
	        return this.post.attributes.title;

	      if (this.error)
	        return "Error";

	      return "Loading...";
      },

      agoText() {
	      return this.$moment(this.post.attributes.timestamp).fromNow();
      },

      dateText() {
	      return this.$moment(this.post.attributes.timestamp).format('L');
      },

      authorText() {
	      return "Ricardo Boss";
      }
    }
	}
</script>
