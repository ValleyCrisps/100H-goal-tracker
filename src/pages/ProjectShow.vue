<template>
  <base-layout :page-title="'temp'" :back-button="true">
    {{ $route.params.id }}
  </base-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ProjectShow',

  components: {}
})
</script>
