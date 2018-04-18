const state = {
  activeItem: 'search'
}

const getters = {
  activeItem: state => state.activeItem
}

// const actions = {
//   login (commit) {
//     commit(types.LOGIN)
//   },
//   logout (commit) {
//     commit(types.LOGOUT)
//   }
// }

const mutations = {
  changeNavItem(state, payload) {
    state.activeItem = payload.nav
  }
}

export default {
  namespaced: true,
  state,
  getters,
  // actions,
  mutations
}
