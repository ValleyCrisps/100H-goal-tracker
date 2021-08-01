<template>
  <base-layout :page-title="'New Item'" :back-button="true">
    <ion-icon :icon="heart"></ion-icon>
    <ion-icon :ios="logoApple" :md="logoAndroid"></ion-icon>
  </base-layout>
</template>

<script lang="ts">
import { IonIcon } from '@ionic/vue'
import { heart, logoApple, logoAndroid } from 'ionicons/icons'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NewItem',

  components: {
    IonIcon
  },

  setup() {
    return { heart, logoApple, logoAndroid }
  }
})
</script>

<style></style>
