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
      class="item"
      :class="{
        current: i === 0 && !noCurrent,
        minor: milestone.minor,
      }"
    >
      <div class="line">
        <div class="dot-highlight" v-if="i === 0 && !noCurrent"></div>
        <div class="dot"></div>
      </div>
      <div class="content">
        <component
          v-if="typeof milestone.title !== 'undefined'"
          :is="typeof milestone.link !== 'undefined' ? 'a' : 'span'"
          :href="milestone.link"
          :target="milestone.hasOwnProperty('link') ? '_blank' : undefined"
          class="title"
        >
          {{ milestone.title }}
        </component>
        <span class="timespan">{{ timespan(milestone) }}</span>
        <p
          v-if="typeof milestone.description !== 'undefined'"
          class="description"
        >
          {{ milestone.description }}
        </p>
        <div
          v-if="
            typeof milestone.pills !== 'undefined' && milestone.pills.length > 0
          "
          class="badges"
        >
          <pill v-for="pill in milestone.pills" :key="pill" :pill="pill" />
        </div>
      </div>
    </li>
  </ol>
</template>

<style scoped lang="scss">
@import '@/style/global';

$item-min-height: 2rem;
$item-margin-bottom: 3rem;
$item-line-margin-bottom: 0.5rem;

$line-width: 4.5px;
$line-spacer: 2em;
$line-color: lighten($body-bg, 5%);

$bullet-width: 1.25rem;
$bullet-color: lighten($body-bg, 10%);
$bullet-current-color: $accent;

.timeline {
  list-style: none;
  padding-left: 0;

  .item {
    display: flex;
    flex-direction: row;
    min-height: $item-min-height;

    &.current {
      .dot,
      .dot-highlight {
        background: $bullet-current-color;
      }

      .dot {
        animation: dot-pulse 1s infinite alternate ease-in;
      }

      .dot-highlight {
        animation: dot-highlight 2s 0.75s infinite ease-out;
      }
    }

    .dot {
      background: $bullet-color;
    }

    &:last-of-type .line {
      background: transparent;
    }

    &.minor .line .dot,
    &.minor .line .dot-highlight {
      display: none;
    }
  }

  .line {
    width: $line-width;

    background: $line-color;
    margin: 0 $line-spacer;

    position: relative;
    top: (1 - $bullet-width) / 2;

    .dot,
    .dot-highlight {
      display: block;
      width: $bullet-width;
      height: $bullet-width;

      border-radius: 50%;

      position: absolute;
      left: calc(#{$line-width / 2} - #{$bullet-width / 2});
    }
  }

  .content {
    flex-grow: 1;
    margin-bottom: $item-margin-bottom;
  }

  .title,
  .description,
  .timespan,
  .badges {
    margin-bottom: $item-line-margin-bottom;
    display: block;
  }

  .title {
    text-decoration: none;
    color: inherit;
  }

  .badges {
    margin-left: -0.25rem;
    display: flex;
    flex-wrap: wrap;
    gap: 0.25rem;
  }

  .timespan {
    opacity: 0.5;
  }
}

@keyframes dot-highlight {
  0% {
    opacity: 0.5;
    transform: scale(0.8);
  }

  90% {
    transform: scale(2);
  }

  100% {
    opacity: 0;
  }
}

@keyframes dot-pulse {
  0% {
    transform: scale(1);
  }

  80% {
    transform: scale(1);
  }

  100% {
    transform: scale(1.1);
  }
}
</style>
