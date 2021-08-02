<template>
  <base-layout :page-title="'Add a project'" :back-button="true">
    <form>
      <ion-list>
        <ion-item>
          <ion-label position="floating">Title</ion-label>
          <ion-input type="text" required />
        </ion-item>
        <ion-item>
          <ion-label position="floating">Image URL</ion-label>
          <ion-input type="url" required />
        </ion-item>
        <ion-item>
          <ion-label position="floating">Description</ion-label>
          <ion-textarea rows="5" />
        </ion-item>
      </ion-list>
    </form>
  </base-layout>
</template>

<script lang="ts">
import { IonList, IonItem, IonLabel, IonInput, IonTextarea } from '@ionic/vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ProjectNew',

  components: { IonList, IonItem, IonLabel, IonInput, IonTextarea }
})
</script>

<style></style>
