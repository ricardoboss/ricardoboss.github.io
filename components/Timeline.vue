<template>
	<ol class="timeline">
    <li v-for="(milestone, i) in milestones" :key="i"
        class="timeline-item" :class="i === 0 ? 'current' : ''">
      <div class="timeline-timespan" v-html="timespan(milestone)"></div>
      <div class="timeline-line">
        <div class="timeline-dot"></div>
      </div>
      <div class="timeline-content">
        <h5 v-if="milestone.hasOwnProperty('title')" class="timeline-title">{{ milestone.title }}</h5>
        <p v-if="milestone.hasOwnProperty('description')" class="timeline-description">
          {{ milestone.description }}
        </p>
      </div>
    </li>
  </ol>
</template>

<script>
	export default {
		name: "Timeline",

    props: [
		  'milestones'
    ],

    methods: {
      timespan(milestone) {
		    if (!milestone.hasOwnProperty('to'))
          return `since ${milestone.from}`;

		    if (milestone.from === milestone.to)
		      return milestone.from;

        return `<span class="d-none d-md-inline"><span class="text-nowrap">${milestone.from}</span> - </span><span class="text-nowrap">${milestone.to}</span>`;
      }
    }
	}
</script>

<style scoped>

</style>
