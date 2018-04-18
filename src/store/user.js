const state = {
  loginState: false,
  settings: {}
}

const getters = {

}

const mutations = {
  login(state) {
    state.loginState = true
  },
  logout(state) {
    state.loginState = false
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
