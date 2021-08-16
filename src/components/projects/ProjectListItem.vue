<template>
  <ion-item :router-link="`/projects/${project.id}`">
    <ion-thumbnail slot="start">
      <ion-img :src="project.image" :alt="project.title" />
    </ion-thumbnail>
    <ion-label>
      <h1>{{ project.name }}</h1>
      <ion-note>Project description 1 {{ project }} </ion-note>
      <ion-progress-bar :value="project.progress"></ion-progress-bar>
    </ion-label>
    <ion-badge :class="project.status" slot="end"
      >{{ project.status }}
    </ion-badge>
  </ion-item>
</template>

<script>
import {
  IonImg,
  IonItem,
  IonBadge,
  IonLabel,
  IonNote,
  IonProgressBar,
  IonThumbnail
} from '@ionic/vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ProjectListItem',

  components: {
    IonImg,
    IonItem,
    IonBadge,
    IonLabel,
    IonNote,
    IonProgressBar,
    IonThumbnail
  },

  props: {
    project: {}
  }
})
</script>

<style scoped>
ion-item {
  --background: var(--ion-color-pale);
}
</style>
