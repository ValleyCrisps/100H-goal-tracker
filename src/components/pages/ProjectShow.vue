<template>
  <base-layout
    :page-title="project ? project.name : 'Loading...'"
    :back-button="true"
  >
    <div v-if="!project">Could not find project.</div>
    <project-overview
      v-else
      :image="project.image"
      :title="project.name"
      :description="project"
    ></project-overview>
  </base-layout>
</template>

<script>
import ProjectOverview from '@/components/projects/ProjectOverview.vue'

export default {
  name: 'ProjectShow',

  components: { ProjectOverview },

  computed: {
    project() {
      return this.$store.getters['projects/getProjectById'](
        Number(this.$route.params.id)
      )
    }
  }
}
</script>
