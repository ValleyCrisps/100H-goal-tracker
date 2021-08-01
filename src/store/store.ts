import { InjectionKey } from '@vue/runtime-core'
import { createStore, Store } from 'vuex'
import { projects } from '@/data/projects'

// define your typings for the store state
export interface State {
  projects: object[]
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
    }
  }
})

export default store
