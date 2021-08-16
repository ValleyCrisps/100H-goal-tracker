const state = {
  projects: [
    {
      id: 1,
      name: 'Project 1',
      status: 'active',
      goal: 100,
      description: '',
      progress: 10,
      image:
        'https://image.freepik.com/free-vector/multitasking-concept-illustration_52683-32123.jpg',
      subprojects: []
    },
    {
      id: 2,
      name: 'Project 2',
      status: 'hold',
      goal: 100,
      description: '',
      progress: 30,
      image:
        'https://image.freepik.com/free-vector/adult-male-multitasking-concept_52683-32632.jpg',
      subprojects: []
    },
    {
      id: 3,
      name: 'Project 3',
      status: 'active',
      goal: 50,
      description: '',
      progress: 10,
      image:
        'https://image.freepik.com/free-vector/multitasking-theme-illustration_52683-32122.jpg',
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
    project.id = Math.floor(Math.random() * 100000000000000)
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
