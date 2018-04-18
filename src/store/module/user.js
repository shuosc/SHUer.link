import axios from 'axios'

const state = {
  loginState: false,
  cardID: 10000000,
  password: "",
  settings: {
    avatar: "",
    name: "",
    nickname: "",
    changeWallpaperTime: "",
    autoComplete: true,
    autoChangeWallpaper: true,
    defaultWikiLanguage: "zh",
    defaultSearchEngine: "baidu",
    theme: "default",
    wallpaperCategory: {
      others: true,
      SHU: true
    },
    defaultBackgroundImage: "string",
    collection: [{
      collectionId: "string",
      collectionName: "string",
      collectionDescription: "string",
      defaultSearchInfo: "string",
      searchEngine: [{
        searchEngineId: "string",
        name: "string",
        description: "string",
        url: "string"
      }]
    }],
    navigation: [{
      navigationId: "string",
      title: "string",
      description: "string",
      url: "string"
    }],
    searchEngine: [{
      searchEngineId: "string",
      name: "string",
      description: "string",
      url: "string"
    }],
    token: "string"
  }
}

const getters = {
  loginState: state => state.loginState
}

const actions = {}

const mutations = {
  login(state, payload) {
    state.loginState = true
    state.settings = payload.settings
    state.cardID = payload.cardID
  },
  logout(state) {
    state.loginState = false
    state.settings = {}
  },
  changeSettings(state) {
    console.log(state)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
