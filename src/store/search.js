const state = {
  searchString: ""
}

const getters = {

}

const mutations = {
  inputChange(state, searchString) {
    state.searchString = searchString
  }
}

const actions = {

}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
