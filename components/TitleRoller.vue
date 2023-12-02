<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'

interface Props {
  titles: string[]
  interval: number
}

const props = defineProps<Props>()

const handleId = ref<null | number>(null)
const currentSloganIndex = ref<number>(0)

onMounted(() => {
  handleId.value = setInterval(updateSlogan, props.interval)
})

onUnmounted(() => {
  const handle = handleId.value
  if (handle !== null) {
    clearInterval(handle)
  }
})

const currentSlogan = computed(() => {
  return props.titles[currentSloganIndex.value]
})

function updateSlogan() {
  currentSloganIndex.value++

  if (currentSloganIndex.value >= props.titles.length) {
    currentSloganIndex.value = 0
  }
}
</script>

<template>
  <transition name="fade-down" mode="out-in">
    <span v-html="currentSlogan" :key="currentSloganIndex" />
  </transition>
</template>

<style scoped lang="scss">
.fade-down-enter-active,
.fade-down-leave-active {
  transition: all 0.3s ease-in-out;
}

.fade-down-enter-from,
.fade-down-leave-to {
  opacity: 0;
  transform: translateY(1em) scale(0.5);
}
</style>
