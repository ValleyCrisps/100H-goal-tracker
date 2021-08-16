<template>
  <base-layout :page-title="'Projects'">
    <project-list :projects="projects" />

    <ion-fab vertical="bottom" horizontal="end" slot="fixed">
      <ion-fab-button router-link="/projects/new">
        <ion-icon :icon="add"></ion-icon>
      </ion-fab-button>
    </ion-fab>
  </base-layout>
</template>

<script>
import { IonFab, IonFabButton, IonIcon } from '@ionic/vue'
import ProjectList from '@/components/projects/ProjectList.vue'
import { defineComponent } from 'vue'
import { add } from 'ionicons/icons'

export default defineComponent({
  name: 'Home',

  components: {
    IonFab,
    IonFabButton,
    IonIcon,
    ProjectList
  },

  computed: {
    projects() {
      return this.$store.getters['projects/getProjects']
    }
  },

  data() {
    return {
      add
    }
  }
})
</script>

<style scoped>
ion-fab-button {
  --background: var(--ion-color-bright);
  --color: var(--ion-color-bright-contrast);
}
</style>
