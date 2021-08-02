import { ComponentCustomProperties } from 'vue'
import { Store } from '@/store/store.ts'

interface Project {
  id: number
  name: string
  status: string
  max: number
  hours: number
  image: string
  progress: number
  subprojects: object[]
}

declare module '@vue/runtime-core' {
  // declare your own store states
  interface State {
    projects: Project[]
  }

  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}
