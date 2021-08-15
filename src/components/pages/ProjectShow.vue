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

<script lang="js">
import { defineComponent } from 'vue'
import ProjectOverview from '@/components/projects/ProjectOverview.vue'

export default defineComponent({
  name: 'ProjectShow',

  components: { ProjectOverview },

  computed: {
    project() {
      // return this.$store.getters.project(Number(this.$route.params.id))
      return this.$store.getters.project(this.$route.params.id)
    }
  }
})
</script>
