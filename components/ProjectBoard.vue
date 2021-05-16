<template>
  <div class="row" :class="col_settings">
    <div class="col"
         v-for="(project, i) in projects" :key="i">
      <div class="card h-100 shadow">
        <img v-if="project.hasOwnProperty('image')"
             class="card-img-top" :class="'p-' + (typeof image_padding !== 'undefined' ? image_padding : 3)" :height="typeof image_height !== 'undefined' ? image_height : false"
             :src="project.image" :alt="project.title">
        <div class="card-body">
          <h5 class="card-title">{{ project.title }}</h5>
          <p class="card-text" v-html="project.description"></p>
        </div>
        <div v-if="project.hasOwnProperty('links') && project.links.length > 0" class="list-group list-group-flush">
          <a v-for="link in project.links" :key="link.title"
             class="list-group-item list-group-item-action"
             :href="link.href" target="_blank">
            {{ link.title }}
          </a>
        </div>
        <div v-if="project.hasOwnProperty('languages')" class="card-body flex-grow-0 text-right py-2">
          <span v-for="language in project.languages" :key="language"
                class="badge rounded-pill ms-1" :class="getBackgroundClass(language)">
            {{ language }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
	export default {
		name: "ProjectBoard",

    props: [
      'projects',
      'col_settings',
      'image_height',
      'image_padding'
    ],

    methods: {
		  getBackgroundClass(language) {
		    let kebab = language
          .replace('#', 's')
          .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
          .map(x => x.toLowerCase())
          .join('-');

		    return 'bg-lang-' + kebab;
      }
    }
	}
</script>

<style scoped>

</style>
