const state = {
  projects: [
    {
      id: 1,
      name: 'Project 1',
      status: 'active',
      max: 100,
      hours: 10,
      image:
        'https://image.freepik.com/free-vector/multitasking-concept-illustration_52683-32123.jpg',
      progress: 0.1,
      subprojects: []
    },
    {
      id: 2,
      name: 'Project 2',
      status: 'hold',
      max: 100,
      hours: 30,
      image:
        'https://image.freepik.com/free-vector/adult-male-multitasking-concept_52683-32632.jpg',
      progress: 0.3,
      subprojects: []
    },
    {
      id: 3,
      name: 'Project 3',
      status: 'active',
      max: 50,
      hours: 10,
      image:
        'https://image.freepik.com/free-vector/multitasking-theme-illustration_52683-32122.jpg',
      progress: 0.2,
      subprojects: []
    }
  ]
}

const getters = {
  getProjects(state) {
    return state.projects
  },
  getProjectById(state) {
    return id => {
      return state.projects.find(p => p.id === id)
    }
  }
}

const actions = {
  addProject(context, project) {
    context.commit('addProject', project)
  }
}

const mutations = {
  addProject(state, project) {
    project.id = new Date().toISOString()
    state.projects.unshift(project)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
