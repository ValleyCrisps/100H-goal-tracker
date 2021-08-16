<template>
  <form class="ion-padding" @submit.prevent="submitForm">
    <ion-list>
      <ion-item>
        <ion-label position="floating">Title</ion-label>
        <ion-input type="text" required v-model="name" />
      </ion-item>
      <ion-item>
        <ion-thumbnail slot="start">
          <img src="" />
        </ion-thumbnail>
        <ion-button
          type="button"
          fill="outline"
          color="primary"
          @click="takePhoto"
        >
          <ion-icon slot="start" :icon="camera"></ion-icon>
          Take photo
        </ion-button>
      </ion-item>
      <ion-item>
        <ion-label position="floating">Goal</ion-label>
        <ion-input type="number" required v-model="goal" />
      </ion-item>
      <ion-item>
        <ion-label position="floating">Description</ion-label>
        <ion-textarea rows="5" v-model="inputDescription" />
      </ion-item>
    </ion-list>
    <ion-button type="submit" expand="full">Add</ion-button>
  </form>
</template>

<script>
import {
  IonButton,
  IonIcon,
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonTextarea,
  IonThumbnail
} from '@ionic/vue'
// import { UserPhoto } from '@/components/projects/types'
import { camera } from 'ionicons/icons'
import { defineComponent } from 'vue'
import {
  Camera,
  CameraResultType,
  CameraSource
  // Photo
} from '@capacitor/camera'
import { isPlatform } from '@ionic/vue'
import { Filesystem } from '@capacitor/filesystem'

export default defineComponent({
  name: 'ProjectInputForm',
  emits: ['save-project'],

  components: {
    IonButton,
    IonIcon,
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonTextarea,
    IonThumbnail
  },
  data() {
    return {
      camera,
      name: '',
      goal: null,
      inputImageUrl: '',
      inputDescription: '',
      previewImageUrl: ''
      // photo: null
    }
  },
  methods: {
    async takePhoto() {
      const photo = await Camera.getPhoto({
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
        quality: 60
      })
      const fileName = new Date().getTime() + '.jpeg'
      const savedFileImage = await this.savePicture(photo, fileName)
      console.log(savedFileImage, fileName)
      // this.photos=[...this.photos, photo]
      // this.previewImageUrl = photo.webPath!
    },

    async savePicture(photo, fileName) {
      let base64Data
      // "hybrid" will detect mobile - iOS or Android
      if (isPlatform('hybrid')) {
        const file = await Filesystem.readFile({
          path: photo.path
        })
        base64Data = file.data
      } else {
        const response = await fetch(photo.webPath)
        const blob = await response.blob()
        // base64Data= await convertBlobToBase64(blob)
        console.log(blob)
      }
      console.log(base64Data, fileName)
    },

    submitForm() {
      const project = {
        name: this.name,
        image: this.inputImageUrl,
        goal: this.goal,
        description: this.inputDescription
      }
      this.$emit('save-project', project)
    }
  }
})
</script>

<style></style>
