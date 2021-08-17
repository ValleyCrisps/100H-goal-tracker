<template>
  <ion-img :src="project.image" :alt="project.name"></ion-img>
  <ion-title class="ion-text-center">{{ project.name }}</ion-title>
  <ion-progress-bar :value="ratio"></ion-progress-bar>
  <ion-button
    color="secondary"
    fill="solid"
    strong
    size="large"
    @click="add(0.5)"
    >+0.5</ion-button
  ><ion-button
    color="secondary"
    fill="solid"
    strong
    size="large"
    @click="add(1)"
    >+1</ion-button
  >
  <ion-button color="secondary" fill="solid" strong size="large" @click="add(2)"
    >+2</ion-button
  >{{ project.progress }}
  <div class="goal">Goal: {{ project.goal }} hours</div>
  <div class="status">Status: {{ project.status }}</div>
  <p class="ion-text-center">
    Description: Lorem, ipsum dolor sit amet consectetur adipisicing elit.
    Deserunt vel a adipisci laboriosam corporis consequuntur sit similique
    voluptas voluptate laudantium itaque delectus, earum ratione rerum!
    Assumenda sequi laudantium iure aperiam!{{ project.description }}
  </p>
</template>

<script>
import { IonImg, IonTitle, IonProgressBar, IonButton } from '@ionic/vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ProjectOverview',
  components: {
    IonImg,
    IonTitle,
    IonProgressBar,
    IonButton
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
  },
  methods: {
    add(val) {
      const newProgress = this.project.progress + val
      this.$store.dispatch('projects/updateProject', {
        ...this.project,
        progress: newProgress
      })
    }
  }
})
</script>

<style scoped>
/* .title-wrapper {
  display: flex;
}
.title-wrapper {
  display: inline-flex;
  width: 60%;
} */
ion-img {
  width: 300px;
}
ion-progress-bar {
  width: 600px;
  height: 30px;
}
</style>
