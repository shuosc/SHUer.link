import Vue from 'vue'
import Vuex from 'vuex'
/* eslint-disable */
// import light from '!raw-loader!../assets/themes/light-theme.css'
// import dark from '!raw-loader!../assets/themes/dark-theme.css'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  state: {
    // theme: 'light',
    // themes: {
    //   light,
    //   dark
    // },
    cardID: '',
    password: '',
    device: '',
    sidebarState: false,
    loginState: false
  },
  mutations: {
    // changeTheme (state, val) {
    //   state.theme = val
    // },
    detectDevice (state) {
      state.device = device.mobile()
    },
    changeSidebar (state) {
      state.sidebarState = !state.sidebarState
    }
  }
})

export default store
