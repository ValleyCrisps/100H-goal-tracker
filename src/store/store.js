// import { InjectionKey } from '@vue/runtime-core'
import { createStore } from 'vuex'
import projects from '@/store/modules/projects'

// interface Project {
//   id: number
//   name: string
//   status: string
//   max: number
//   hours: number
//   image: string
//   progress: number
//   subprojects: object[]
// }

// // define your typings for the store state
// export interface State {
//   projects: Project[]
// }

// define injection key
// export const key: InjectionKey<Store<State>> = Symbol()

const store = createStore({
  modules: { projects }
})

export default store
