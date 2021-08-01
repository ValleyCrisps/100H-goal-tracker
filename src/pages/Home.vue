<template>
  <base-layout :page-title="'Projects'">
    <div id="container">
      <strong>Ready to create an app?</strong>
      <p>
        Start with Ionic
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://ionicframework.com/docs/components"
          >UI Components</a
        >
      </p>
    </div>
    <ion-list v-for="project in projects" :key="project.id">
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
    </ion-list>

    <ion-fab vertical="bottom" horizontal="end" slot="fixed">
      <ion-fab-button @click="() => router.push('/new')">
        <ion-icon :icon="add"></ion-icon>
      </ion-fab-button>
    </ion-fab>
  </base-layout>
</template>

<script lang="ts">
import {
  IonList,
  IonImg,
  IonItem,
  IonBadge,
  IonLabel,
  IonNote,
  IonFab,
  IonFabButton,
  IonIcon,
  IonProgressBar,
  IonThumbnail
} from '@ionic/vue'

import { defineComponent } from 'vue'
import { add } from 'ionicons/icons'
import { useRouter } from 'vue-router'
import { projects } from '@/data/projects'

export default defineComponent({
  name: 'Home',

  components: {
    IonList,
    IonImg,
    IonItem,
    IonBadge,
    IonLabel,
    IonNote,
    IonFab,
    IonFabButton,
    IonIcon,
    IonProgressBar,
    IonThumbnail
  },

  setup() {
    console.log(projects)
    return {
      router: useRouter(),
      add,
      projects
    }
  }
})
</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}

.active {
  background-color: green;
}

.hold {
  background-color: red;
}
</style>
