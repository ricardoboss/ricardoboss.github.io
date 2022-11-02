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
             :href="link.href" :rel="link.rel" target="_blank">
            {{ link.title }}
          </a>
        </div>
        <div v-if="project.hasOwnProperty('languages')" class="card-body flex-grow-0 text-right py-2">
          <lang-badge v-for="language in project.languages"
                      :key="language"
                      :language="language"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
	import LangBadge from "./LangBadge";
  export default {
		name: "ProjectBoard",
    components: {LangBadge},

    props: [
      'projects',
      'col_settings',
      'image_height',
      'image_padding'
    ]
	}
</script>
