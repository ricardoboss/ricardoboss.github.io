<template>
  <transition name="fade-down" mode="out-in">
    <span v-html="currentSlogan" :key="currentSloganIndex" />
  </transition>
</template>

<script>
export default {
  name: "SloganRoller",

  props: [
    'slogans',
    'interval'
  ],

  created() {
    this.handleId = setInterval(this.updateSlogan, this.interval);
  },

  beforeDestroy() {
    clearInterval(this.handleId);
  },

  data() {
    return {
      handleId: null,
      currentSloganIndex: 0,
    }
  },

  computed: {
    currentSlogan() {
      return this.slogans[this.currentSloganIndex];
    }
  },

  methods: {
    updateSlogan() {
      this.currentSloganIndex = Math.floor(Math.random() * this.slogans.length);
    }
  }
}
</script>
