<template>
  <span class="badge rounded-pill ms-1" :class="backgroundClass">
    {{ language }}
  </span>
</template>

<script>
export default {
  name: "LangBadge",

  props: {
    language: {
      type: String,
      required: true
    }
  },

  computed: {
    backgroundClass() {
      let kebab = this.language
        .replace('#', 's')
        .replace('++', 'pp')
        .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
        .map(x => x.toLowerCase())
        .join('-');

      return 'bg-lang-' + kebab;
    }
  }
}
</script>
