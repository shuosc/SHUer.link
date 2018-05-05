import purple from '!raw-loader!!muse-ui/dist/theme-default.css'
import blue from '!raw-loader!!muse-ui/dist/theme-light.css'
import black from '!raw-loader!!muse-ui/dist/theme-carbon.css'
import green from '!raw-loader!!muse-ui/dist/theme-teal.css'
import transparent from '!raw-loader!!../style/transparent.css'
import axios from 'axios'

const state = {
  loginState: false,
  searchEngine: "shuerlink",
  info: {
    name: '',
    nickname: '',
    password: '',
    card_id: '',
    token: '',
    avatar: '',
  },
  settings: {
    autoChangeWallpaper: false,
    autoComplete: true,
    changeWallpaperTime: 'everyDay',
    theme: 'transparent',
    defaultSearchEngine: 'Google',
    defaultWikiLanguage: 'en',
    defaultBackgroundImage: '',
    wallpaperCategory: {
      SHU: true,
      others: false
    }
  },
  themes: {
    transparent,
    black,
    purple,
    blue,
    green
  },
}

const getters = {

}

const mutations = {
  login(state, payload) {
    state.loginState = true
    state.info = payload
  },
  logout(state) {
    state.loginState = false
  },
  initSettings(state, set) {
    state.settings = set
    state.searchEngine = state.settings.defaultSearchEngine
    // state.searchEngines.Wikipedia.desktop = `https://${state.user.settings.defaultWikiLanguage}.m.wikipedia.org/w/index.php?search=`
    // state.searchEngines.Wikipedia.mobile = `https://${state.user.settings.defaultWikiLanguage}.m.wikipedia.org/w/index.php?search=`
    if (document.getElementById('muse-theme')) {
      document.getElementById('muse-theme').innerHTML = state.themes[state.settings.theme] || ''
    } else {
      const styleEl = document.createElement('style')
      styleEl.id = 'muse-theme'
      document.body.appendChild(styleEl)
      styleEl.innerHTML = state.themes[state.settings.theme] || ''
    }
  },
  changeTheme(state, val) {
    if (document.getElementById('muse-theme')) {
      document.getElementById('muse-theme').innerHTML = state.themes[state.settings.theme] || ''
    } else {
      const styleEl = document.createElement('style')
      styleEl.id = 'muse-theme'
      document.body.appendChild(styleEl)
      styleEl.innerHTML = state.themes[state.settings.theme] || ''
    }
  }
}

const actions = {
  saveChanges(state) {
    axios.patch(`/api/v1/users/${state.info.card_id}/custom`, {
      shuerlink: state.settings
    })
  },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
