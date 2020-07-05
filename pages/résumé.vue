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
            from: "July 2020"
          },
          {
            description: "Apprenticeship",
            from: "August 2018",
            to: "July 2020",
          },
          {
            description: "Temporary help (software developer)",
            from: "April 2018",
            to: "August 2018"
          },
          {
            description: "Trainee",
            from: "April 2018",
            to: "April 2018",
          },
          {
            title: "Busse Computertechnik",
            description: "Trainee",
            from: "February 2018",
            to: "February 2018"
          }
        ],

        educationTimeline: [
          {
            title: "Schulzentrum SII Utbremen (professional school)",
            description: "Apprenticeship",
            from: "August 2018",
            to: "July 2020"
          },
          {
            title: "University of Bremen",
            description: "BoS in Computer Science (dropout)",
            from: "August 2017",
            to: "February 2018"
          },
          {
            title: "Max-Planck Gymnasium (High School)",
            description: "Abitur",
            from: "August 2009",
            to: "July 2017"
          },
        ]
      }
    }
  }
</script>
