<script setup lang="ts">
import Timeline from "../components/Timeline.vue"
import PageHeader from "~/components/structural/PageHeader.vue"
import type TimelineItem from "~/models/TimelineItem"

const workTimeline = [
  {
    title: "TRENZ GmbH",
    description: "Full-Stack Developer",
    from: "2022-05",
    pills: [
      "Vue",
      "TS",
      "Flutter",
      "Dart",
      "C#",
      ".NET",
      "Android",
      "iOS",
      "C++",
      "MSSQL",
    ],
    link: "https://trenz.de/",
  },
  {
    title: "SVB-Spezialversand für Yacht- und Bootszubehör GmbH",
    description: "Backend Developer",
    from: "2021-10",
    to: "2022-04",
    pills: ["PHP", "Symfony", "MySQL", "Bash", "Docker"],
    link: "https://svb.de/",
  },
  {
    title: "sendmeback GmbH",
    description: "Full-Stack Developer",
    from: "2021-06",
    to: "2021-10",
    pills: [
      "Vue",
      "JS",
      "Flutter",
      "Dart",
      "Android",
      "iOS",
      "C#",
      ".NET",
      "PostgreSQL",
    ],
  },
  {
    title: "TRENZ GmbH",
    description: "Junior Software Developer",
    from: "2020-07",
    to: "2021-05",
    pills: [
      "C#",
      ".NET",
      "WPF",
      "Xamarin",
      "Android",
      "iOS",
      "C++",
      "MSSQL",
      "Powershell",
      "Bash",
    ],
    link: "https://trenz.de/",
  },
  {
    description: "Apprenticeship",
    from: "2018-08",
    to: "2020-07",
    pills: ["PHP", "MySQL", "Java"],
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
  },
] as TimelineItem[]

const educationTimeline = [
  {
    title: "Schulzentrum SII Utbremen (Professional School)",
    description: "Apprenticeship",
    from: "2018-08",
    to: "2020-07",
    link: "https://www.szut.de/",
    pills: ["Java", "SQLite"],
  },
  {
    title: "University of Bremen",
    description: "BoS in Computer Science (not finished)",
    from: "2017-07",
    to: "2018-02",
    link: "https://www.uni-bremen.de/",
    pills: ["Java"],
  },
  {
    title: "Max-Planck Gymnasium (High School)",
    description: "Abitur",
    from: "2009-08",
    to: "2017-07",
    link: "https://maxe-online.de/",
    pills: ["Delphi", "Java"],
  },
] as TimelineItem[]
</script>

<template>
  <section>
    <page-header title="Curriculum Vitae" />

    <h2>Work</h2>
    <timeline :items="workTimeline" />

    <h2>Education</h2>
    <timeline no-current :items="educationTimeline" />
  </section>
</template>

<style scoped lang="scss">
h2 {
  font-size: 2em;
  font-weight: 300;
}
</style>
