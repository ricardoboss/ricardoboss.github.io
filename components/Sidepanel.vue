<template>
	<aside class="sticky-top align-self-start">
    <img src="/img/ricardo-boss-2021.square.256.min.jpg" alt="Ricardo Boss 2020" style="border-width: 2px !important;" class="border rounded-circle border-primary shadow-lg w-75 mb-4">

    <span class="h3 font-weight-light">Ricardo Boss</span>

    <span class="h6 font-weight-light">aka mizzle</span>
    <span class="h6 font-weight-light">aka MCMainiac</span>

    <SloganRoller class="text-muted text-nowrap" :slogans="slogans" interval="15000" />
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
