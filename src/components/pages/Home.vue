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
</style>
