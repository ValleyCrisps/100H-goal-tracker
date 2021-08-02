import { InjectionKey } from '@vue/runtime-core'
import { createStore, Store } from 'vuex'
import { projects } from '@/data/projects'

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

// define your typings for the store state
export interface State {
  projects: Project[]
}

// define injection key
export const key: InjectionKey<Store<State>> = Symbol()

const store = createStore<State>({
  state: {
    projects
  },
  getters: {
    projects(state) {
      return state.projects
    },
    project(state) {
      return (id: number) => {
        return state.projects.find(p => p.id === id)
      }
    }
  }
})

export default store
