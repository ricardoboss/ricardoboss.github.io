<script setup lang="ts">
import Pill from '~/components/Pill.vue'
import type TimelineItem from '~/models/TimelineItem'

interface Props {
  items: TimelineItem[]
  noCurrent?: boolean
}

defineProps<Props>()

function timespan(item: TimelineItem) {
  if (typeof item.to === 'undefined') return `since ${fromText(item.from)}`
  if (item.from === item.to) return fromText(item.from)

  return `${fromText(item.from)} - ${toText(item.to)}`
}

function fromText(from: string) {
  // return this.$moment(from).format('MMMM YYYY')
  return from
}

function toText(to: string) {
  // return this.$moment(to).format('MMMM YYYY')
  return to
}
</script>

<template>
  <ol class="timeline">
    <li
      v-for="(milestone, i) in items"
      :key="i"
      class="timeline-item"
      :class="{
        current: i === 0 && !noCurrent,
        minor: milestone.minor,
      }"
    >
      <div class="timeline-line">
        <div class="timeline-dot-highlight"></div>
        <div class="timeline-dot"></div>
      </div>
      <div class="timeline-content">
        <component
          v-if="typeof milestone.title !== 'undefined'"
          :is="typeof milestone.link !== 'undefined' ? 'a' : 'span'"
          :href="milestone.link"
          :target="milestone.hasOwnProperty('link') ? '_blank' : undefined"
          class="timeline-title"
        >
          {{ milestone.title }}
        </component>
        <span class="timeline-timespan">{{ timespan(milestone) }}</span>
        <p
          v-if="typeof milestone.description !== 'undefined'"
          class="timeline-description"
        >
          {{ milestone.description }}
        </p>
        <div
          v-if="
            typeof milestone.pills !== 'undefined' && milestone.pills.length > 0
          "
          class="timeline-badges"
        >
          <pill v-for="pill in milestone.pills" :key="pill" :pill="pill" />
        </div>
      </div>
    </li>
  </ol>
</template>

<style scoped lang="scss">
@import '@/style/global';

$timeline-item-min-height: 2rem;
$timeline-item-margin-bottom: 3rem;
$timeline-item-line-margin-bottom: 0.5rem;

$timeline-line-width: 4.5px;
$timeline-line-spacer: 2em;
$timeline-line-color: lighten($body-bg, 5%);

$timeline-bullet-width: 1.25rem;
$timeline-bullet-current-color: $accent;

.timeline {
  list-style: none;
  padding-left: 0;
}

.timeline-item {
  display: flex;
  flex-direction: row;
  min-height: $timeline-item-min-height;

  &.current .timeline-dot,
  &.current .timeline-dot-highlight {
    background: $timeline-bullet-current-color;
  }

  &.current .timeline-dot-highlight {
    animation: dot-highlight 2s infinite;
  }

  &:last-of-type .timeline-line {
    background: transparent;
  }

  &.minor .timeline-line .timeline-dot,
  &.minor .timeline-line .timeline-dot-highlight {
    display: none;
  }
}

.timeline-line {
  width: $timeline-line-width;

  background: $timeline-line-color;
  margin: 0 $timeline-line-spacer;

  position: relative;
  top: (1 - $timeline-bullet-width) / 2;

  .timeline-dot,
  .timeline-dot-highlight {
    display: block;
    width: $timeline-bullet-width;
    height: $timeline-bullet-width;

    border-radius: 50%;
    background: $timeline-line-color;

    position: absolute;
    left: calc(#{$timeline-line-width / 2} - #{$timeline-bullet-width / 2});
  }
}

.timeline-content {
  flex-grow: 1;
  margin-bottom: $timeline-item-margin-bottom;
}

.timeline-title,
.timeline-description,
.timeline-timespan,
.timeline-badges {
  margin-bottom: $timeline-item-line-margin-bottom;
  display: block;
}

.timeline-title {
  text-decoration: none;
  color: inherit;
}

.timeline-badges {
  margin-left: -0.25rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
}

.timeline-timespan {
  opacity: 0.5;
}

@keyframes dot-highlight {
  from {
    opacity: 0.5;
    transform: scale(1);
  }

  to {
    opacity: 0;
    transform: scale(2);
  }
}
</style>
