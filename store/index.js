import Vuex from 'vuex'
/* eslint-disable */
// import light from '!raw-loader!../assets/themes/light-theme.css'
// import dark from '!raw-loader!../assets/themes/dark-theme.css'

const store = () => new Vuex.Store({
  state: {
    // theme: 'light',
    // themes: {
    //   light,
    //   dark
    // },
    user: {
      cardID: '',
      password: '',
      name: '',
      nickname: '',
      tocken: '',
      custom: {
      }
    },
    device: '',
    sidebarState: false,
    loginState: true
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
