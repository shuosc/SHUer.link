/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'
import light from '!raw-loader!../assets/themes/light-theme.css'
import dark from '!raw-loader!../assets/themes/dark-theme.css'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  state: {
    theme: 'light',
    themes: {
      light,
      dark
    },
    device: ''
  },
  mutations: {
    changeTheme (state, val) {
      state.theme = val
    },
    initDevice (state) {
      state.device = device.mobile()
    }
  }
})

export default store
