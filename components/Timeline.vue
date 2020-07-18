<template>
	<ol class="timeline">
    <li v-for="(milestone, i) in milestones" :key="i"
        class="timeline-item" :class="i === 0 ? 'current' : ''">
      <div class="timeline-line">
        <div class="timeline-dot"></div>
      </div>
      <div class="timeline-content">
        <h5 v-if="milestone.hasOwnProperty('title')" class="timeline-title">{{ milestone.title }}</h5>
        <p v-if="milestone.hasOwnProperty('description')" class="timeline-description">
          {{ milestone.description }}
        </p>
        <span class="timeline-timespan" v-html="timespan(milestone)"></span>
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
          return `since ${this.fromText(milestone.from)}`;

		    if (milestone.from === milestone.to)
		      return this.fromText(milestone.from);

        return `${this.fromText(milestone.from)} - ${this.toText(milestone.to)}`;
      },

      fromText(from) {
        return this.$moment(from).format("MMMM YYYY");
      },

      toText(to) {
        return this.$moment(to).format("MMMM YYYY");
      }
    },
	}
</script>

<style scoped>

</style>
