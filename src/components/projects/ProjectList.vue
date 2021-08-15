<template>
  <ion-list v-for="project in projects" :key="project.id">
    <project-list-item :project="project" />
  </ion-list>
</template>

<script>
import { IonList } from '@ionic/vue'
import ProjectListItem from '@/components/projects/ProjectListItem.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ProjectList',

  components: {
    IonList,
    ProjectListItem
  },

  props: {
    projects: {}
  }
})
</script>
