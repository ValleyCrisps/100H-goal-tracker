<template>
  <div class="title-wrapper">
    <ion-img :src="project.image" :alt="project.name"></ion-img>
    <ion-title class="ion-text-center">{{ project.name }}</ion-title>
    <div>
      <ion-progress-bar :value="ratio"></ion-progress-bar>
    </div>
  </div>
  <div class="goal">Goal: {{ project.goal }} hours</div>
  <p class="ion-text-center">
    Description: Lorem, ipsum dolor sit amet consectetur adipisicing elit.
    Deserunt vel a adipisci laboriosam corporis consequuntur sit similique
    voluptas voluptate laudantium itaque delectus, earum ratione rerum!
    Assumenda sequi laudantium iure aperiam!{{ project.description }}
  </p>
</template>

<script>
import { IonImg, IonTitle, IonProgressBar } from '@ionic/vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ProjectOverview',
  components: {
    IonImg,
    IonTitle,
    IonProgressBar
  },
  props: {
    project: { type: Object, required: true }
  },
  data() {
    return {}
  },
  computed: {
    ratio() {
      return this.project.progress / this.project.goal
    }
  }
})
</script>

<style scoped>
.title-wrapper {
  display: flex;
}
ion-img {
  width: 300px;
}
ion-progress-bar {
  width: 600px;
  height: 30px;
}
</style>
