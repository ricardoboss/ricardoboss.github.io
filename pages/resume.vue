<template>
  <section>
    <h1 class="display-3">Résumé</h1>

    <h2>Work</h2>
    <Timeline :milestones="workTimeline"/>

    <h2>Education</h2>
    <Timeline :milestones="educationTimeline"/>
  </section>
</template>

<script>
import Timeline from "../components/Timeline.vue";

export default {
  components: {Timeline},
  layout: 'default',

  data() {
    return {
      workTimeline: [
        {
          title: "SVB-Spezialversand für Yacht- und Bootszubehör GmbH",
          description: "Software Developer",
          from: "2021-10",
        },
        {
          title: "sendmeback GmbH",
          description: "Software Developer",
          from: "2021-06",
          to: "2021-10",
        },
        {
          title: "TRENZ GmbH",
          description: "Junior Software Developer",
          from: "2020-07",
          to: "2021-05",
        },
        {
          description: "Apprenticeship",
          from: "2018-08",
          to: "2020-07",
        },
        {
          description: "Temporary help (software developer)",
          from: "2018-05",
          to: "2018-08",
        },
        {
          description: "Trainee",
          from: "2018-04",
          to: "2018-04",
        },
        {
          title: "Busse Computertechnik",
          description: "Trainee",
          from: "2018-03",
          to: "2018-03",
        }
      ],

      educationTimeline: [
        {
          title: "Schulzentrum SII Utbremen (professional school)",
          description: "Apprenticeship",
          from: "2018-08",
          to: "2020-07",
        },
        {
          title: "University of Bremen",
          description: "BoS in Computer Science (dropout)",
          from: "2017-07",
          to: "2018-02",
        },
        {
          title: "Max-Planck Gymnasium (High School)",
          description: "Abitur",
          from: "2009-08",
          to: "2017-07",
        },
      ]
    }
  }
}
</script>
