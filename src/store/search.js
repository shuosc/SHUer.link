const state = {
  searchString: "",
  webpages: [],
  images: [],
  videos: [],
  schoolWebs: [],
  wikiLanguages: {
    zh: {
      title: '中文',
      value: 'zh'
    },
    en: {
      title: 'English',
      value: 'en'
    },
    es: {
      title: 'Español',
      value: 'es'
    },
    de: {
      title: 'Deutsch',
      value: 'de'
    },
    fr: {
      title: 'Français',
      value: 'fr'
    },
    ja: {
      title: '日本語',
      value: 'ja'
    },
    ru: {
      title: 'Русский',
      value: 'ru'
    },
    nl: {
      title: 'Nederlands',
      value: 'nl'
    },
    it: {
      title: 'Italiano',
      value: 'it'
    },
    sv: {
      title: 'Svenska',
      value: 'sv'
    },
    ar: {
      title: 'العربية',
      value: 'ar'
    },
    vi: {
      title: 'Tiếng Việt',
      value: 'vi'
    },
    uk: {
      title: 'Українська',
      value: 'uk'
    }
  },
  searchEngines: [{
    title: '谷歌',
    value: 'Google',
    icon: ':iconfont icon-Google',
    desktop: 'https://www.google.com/search?newwindow=1&hl=zh-CN&q=',
    mobile: 'https://www.google.com/search?newwindow=1&hl=zh-CN&q='
  }, {
    title: '必应',
    value: 'Bing',
    icon: ':iconfont icon-Bing',
    desktop: 'https://www.bing.com/search?q=',
    mobile: 'https://www.bing.com/search?q='
  }, {
    title: '百度',
    value: 'Baidu',
    icon: ':iconfont icon-Baidu',
    desktop: 'https://www.baidu.com/s?wd=',
    mobile: 'https://www.baidu.com/s?wd='
  }, {
    title: '维基百科',
    value: 'Wikipedia',
    icon: ':iconfont icon-Wikipedia',
    desktop: 'https://zh.m.wikipedia.org/w/index.php?search=',
    mobile: 'https://zh.m.wikipedia.org/w/index.php?search='
  }, {
    title: '网盘',
    value: 'Cloud',
    icon: ':iconfont icon-Cloud',
    desktop: 'https://www.panc.cc/s/',
    mobile: 'https://www.panc.cc/m/s/?s='
  }, {
    title: '知网',
    value: 'CNKI',
    icon: ':iconfont icon-CNKI',
    desktop: 'http://epub.cnki.net/kns/brief/default_result.aspx?txt_1_sel=FT%24%25%3D%7C&txt_1_special1=%25&txt_extension=&expertvalue=&cjfdcode=%C2%A4tid=txt_1_value1&dbJson=coreJson&dbPrefix=SCDB&db_opt=CJFQ%2CCJFN%2CCDFD%2CCMFD%2CCPFD%2CIPFD%2CCCND%2CCCJD%2CHBRD&db_value=&hidTabChange=&hidDivIDS=&singleDB=SCDB&db_codes=&singleDBName=&againConfigJson=false&action=scdbsearch&ua=1.11&txt_1_value1=',
    mobile: 'http://wap.cnki.net/touch/web/Article/Search/?kw='
  }, {
    title: '谷歌学术',
    value: 'GoogleScholar',
    icon: ':iconfont icon-GoogleScholar',
    desktop: 'https://scholar.google.com/scholar?hl=zh-CN&q=',
    mobile: 'https://scholar.google.com/scholar?hl=zh-CN&q='
  }, {
    title: 'Wolfram Alpha',
    value: 'WolframAlpha',
    icon: ':iconfont icon-WolframAlpha',
    desktop: 'http://www.wolframalpha.com/input/?i=',
    mobile: 'http://m.wolframalpha.com/input/?i='
  }, {
    title: '知乎',
    value: 'Zhihu',
    icon: ':iconfont icon-Zhihu',
    desktop: 'https://www.zhihu.com/search?type=content&q=',
    mobile: 'https://www.zhihu.com/search?type=content&q='
  }, {
    title: '高德地图',
    value: 'Map',
    icon: ':iconfont icon-Map',
    desktop: 'https://uri.amap.com/search?keyword=',
    mobile: 'https://m.amap.com/search/mapview/keywords='
  }, {
    title: '虾米音乐',
    value: 'Music',
    icon: ':iconfont icon-Music',
    desktop: 'http://www.xiami.com/search?key=',
    mobile: 'https://h.xiami.com/index.html?f=&from=#!/search/result/?key='
  }, {
    title: '豆瓣',
    value: 'Douban',
    icon: ':iconfont icon-Douban',
    desktop: 'https://www.douban.com/search?q=',
    mobile: 'https://m.douban.com/search/?query='
  }, {
    title: '微信',
    value: 'Wechat',
    icon: ':iconfont icon-Wechat',
    desktop: 'http://weixin.sogou.com/weixin?type=2&query=',
    mobile: 'http://weixin.sogou.com/weixinwap?type=2&query='
  }, {
    title: '淘宝',
    value: 'Taobao',
    icon: ':iconfont icon-Taobao',
    desktop: 'https://s.taobao.com/search?q=',
    mobile: 'https://s.m.taobao.com/h5?q='
  }, {
    title: '微博',
    value: 'Weibo',
    icon: ':iconfont icon-Weibo',
    desktop: 'https://s.weibo.com/weibo/',
    mobile: 'https://s.weibo.com/weibo/'
  }, {
    title: '京东',
    value: 'JD',
    icon: ':iconfont icon-JD',
    desktop: 'https://search.jd.com/Search?keyword=',
    mobile: 'https://so.m.jd.com/ware/search.action?keyword='
  }, {
    title: '哔哩哔哩',
    value: 'Bilibili',
    icon: ':iconfont icon-Bilibili',
    desktop: 'https://search.bilibili.com/all?keyword=',
    mobile: 'https://m.bilibili.com/search.html?keyword='
  }, {
    title: 'GitHub',
    value: 'GitHub',
    icon: ':iconfont icon-GitHub',
    desktop: 'https://github.com/search?q=',
    mobile: 'https://github.com/search?q='
  }, {
    title: 'Stack Overflow',
    value: 'StackOverflow',
    icon: ':iconfont icon-StackOverflow',
    desktop: 'https://stackoverflow.com/search?q=',
    mobile: 'https://stackoverflow.com/search?q='
  }]
}

const getters = {

}

const mutations = {
  inputChange(state, searchString) {
    state.searchString = searchString
  },
  searchContent(state, payload) {
    state.webpages = payload.webpages
    state.images = payload.images
    state.videos = payload.videos
  },
  clearResults(state) {
    state.webpages = []
    state.images = []
    state.videos = []
  },
  setWebpages(state, webpages) {
    state.webpages = webpages
  },
  setImages(state, images) {
    state.images = images
  },
  setVideos(state, videos) {
    state.videos = videos
  },
  setSchool(state, schoolWebs) {
    state.schoolWebs = schoolWebs
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
