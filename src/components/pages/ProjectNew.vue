<template>
  <base-layout :page-title="'Add a project'" :back-button="true">
    <project-input-form @save-project="saveProject" />
  </base-layout>
</template>

<script>
import ProjectInputForm from '@/components/projects/ProjectInputForm.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ProjectNew',

  components: { ProjectInputForm },

  methods: {
    saveProject(project) {
      this.$store.dispatch('addProject', project)
      this.$router.replace('/home')
    }
  }
})
</script>

<style></style>
