<template>
  <ol class="timeline">
    <li v-for="(milestone, i) in milestones" :key="i"
        class="timeline-item"
        :class="{current: i === 0 && !noCurrent, minor: milestone.hasOwnProperty('minor') && milestone.minor}">
      <div class="timeline-line">
        <div class="timeline-dot-highlight"></div>
        <div class="timeline-dot"></div>
      </div>
      <div class="timeline-content">
        <component v-if="milestone.hasOwnProperty('title')"
                   :is="milestone.hasOwnProperty('link') ? 'a' : 'span'"
                   :href="milestone.link"
                   :target="milestone.hasOwnProperty('link') ? '_blank' : ''"
                   class="timeline-title">{{ milestone.title }}</component>
        <span class="timeline-timespan" v-html="timespan(milestone)"></span>
        <p v-if="milestone.hasOwnProperty('description')" class="timeline-description" v-html="milestone.description"></p>
        <div v-if="milestone.hasOwnProperty('languages')" class="timeline-badges">
          <lang-badge v-for="language in milestone.languages"
                      :key="language"
                      :language="language"
          />
        </div>
      </div>
    </li>
  </ol>
</template>

<script>
import LangBadge from "./LangBadge";
export default {
  name: "Timeline",
  components: {LangBadge},

  props: {
    milestones: {
      type: Array,
      required: true
    },
    noCurrent: {
      type: Boolean,
      default: false
    }
  },

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
