const state = {
  sidebarState: false,
  searchState: false
}

const getters = {}

const mutations = {
  toggleSidebar(state) {
    state.sidebarState = !state.sidebarState
  },
  toggleSearch(state) {
    state.searchState = !state.searchState
  }
}

const actions = {}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
