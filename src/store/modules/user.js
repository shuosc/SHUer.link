const state = {
  loginState: false,
  username: '',
  password: ''
}

const getters = {
  loginState: state => state.loginState
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
  login(state) {
    state.loginState = true
  },
  logout(state) {
    state.loginState = false
  }
}

export default {
  state,
  getters,
  // actions,
  mutations
}
