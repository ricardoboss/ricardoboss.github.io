<template>
  <section>
    <h1 class="display-3">Résumé</h1>

    <h2>Work</h2>
    <Timeline :milestones="workTimeline" />

    <h2>Education</h2>
    <Timeline :milestones="educationTimeline" />

    <h2>Certifications</h2>
    <div class="d-flex">
      <div class="flex-grow-1 mr-3">
        <div class="row">
          <strong class="col-md-4">Microsoft Certified Developer</strong>
          <p class="col-md-8">
            On January 8, 2019 I completed the requirements to be recognized as a Microsoft Certified Professional by
            passing the exam #483: "Programming in C#".
          </p>
        </div>
      </div>
      <div class="d-flex flex-column">
        <figure class="figure" style="max-width: 12rem;">
          <img alt="Programming in C# - Exam Passed Badge" src="/img/programming-in-cs-badge.min.png"
               class="img-fluid">
          <figcaption class="figure-caption text-center">"Programming in C#" - Exam Passed Badge</figcaption>
        </figure>
      </div>
    </div>
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
            title: "TRENZ GmbH",
            description: "Junior Software Developer",
            from: "2020-07"
          },
          {
            description: "Apprenticeship",
            from: "2018-08",
            to: "2020-07",
          },
          {
            description: "Temporary help (software developer)",
            from: "2018-05",
            to: "2018-08"
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
            to: "2018-03"
          }
        ],

        educationTimeline: [
          {
            title: "Schulzentrum SII Utbremen (professional school)",
            description: "Apprenticeship",
            from: "2018-08",
            to: "2020-07"
          },
          {
            title: "University of Bremen",
            description: "BoS in Computer Science (dropout)",
            from: "2017-07",
            to: "2018-02"
          },
          {
            title: "Max-Planck Gymnasium (High School)",
            description: "Abitur",
            from: "2009-08",
            to: "2017-07"
          },
        ]
      }
    }
  }
</script>
