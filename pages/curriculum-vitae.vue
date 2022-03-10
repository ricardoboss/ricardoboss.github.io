<template>
  <section>
    <h1 class="display-3">Curriculum Vitae</h1>

    <h2>Work</h2>
    <timeline :milestones="workTimeline"/>

    <h2>Education</h2>
    <timeline no-current :milestones="educationTimeline"/>
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
          description: "Backend Developer",
          from: "2021-10",
          languages: ["PHP", "Symfony", "MySQL", "Bash", "Docker"],
          link: "https://svb.de/",
        },
        {
          title: "sendmeback GmbH",
          description: "Full-Stack Developer",
          from: "2021-06",
          to: "2021-10",
          languages: ["Vue", "JS", "Flutter", "Dart", "Android", "iOS", "C#", ".NET", "PostgreSQL"],
          link: "https://sendmeback.de/",
        },
        {
          title: "TRENZ GmbH",
          description: "Junior Software Developer",
          from: "2020-07",
          to: "2021-05",
          languages: ["C#", ".NET", "WPF", "Xamarin", "Android", "iOS", "C++", "MSSQL", "Powershell", "Bash"],
          link: "https://www.trenz.de/",
        },
        {
          description: "Apprenticeship",
          from: "2018-08",
          to: "2020-07",
          languages: ["PHP", "MySQL", "Java"],
          minor: true,
        },
        {
          description: "Temporary help (software developer)",
          from: "2018-05",
          to: "2018-08",
          minor: true,
        },
        {
          description: "Trainee",
          from: "2018-04",
          to: "2018-04",
          minor: true,
        },
        {
          title: "Busse Computertechnik",
          description: "Trainee",
          from: "2018-03",
          to: "2018-03",
          link: "https://www.busse-computer.de/",
        }
      ],

      educationTimeline: [
        {
          title: "Schulzentrum SII Utbremen (Professional School)",
          description: "Apprenticeship",
          from: "2018-08",
          to: "2020-07",
          link: "https://www.szut.de/"
        },
        {
          title: "University of Bremen",
          description: "BoS in Computer Science (not finished)",
          from: "2017-07",
          to: "2018-02",
          link: "https://www.uni-bremen.de/"
        },
        {
          title: "Max-Planck Gymnasium (High School)",
          description: "Abitur",
          from: "2009-08",
          to: "2017-07",
          link: "https://maxe-online.de/"
        },
      ]
    }
  }
}
</script>
