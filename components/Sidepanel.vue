<template>
	<aside class="sticky-top align-self-start">
    <img src="/img/ricardo-boss-2019.min.png" alt="Ricardo Boss" class="rounded-circle shadow-lg w-75 mb-4">

    <span class="h3 font-weight-light">Ricardo Boss</span>

    <SloganRoller class="text-muted text-nowrap" :slogans="slogans" interval="30000" />
  </aside>
</template>

<script>
	import SloganRoller from "./SloganRoller.vue";
  export default {
		name: "Sidepanel",
    components: {SloganRoller},

    data() {
		  return {
		    slogans: [
		      'Software Developer',
          'Webdeveloper',
          'Backend Developer',
          'Database Engineer',
          'Fullstack Developer',
          '.NET Developer',
          'Microsoft Certified'
        ],
      }
    }
  }
</script>
