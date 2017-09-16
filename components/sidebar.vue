<template>
  <div class="sidebar">
    <mu-drawer right :docked="false" :open="this.$store.state.sidebarState"
               @close="toggleSidebar">
      <mu-appbar title="设置" />
        <div class="center">
          <h3>{{ name }}</h3>
          <mu-avatar :size="80" :src="avatar" />
        </div>
        <mu-list>
          <mu-list-item title="外观设置" toggleNested :open="false">
            <mu-list-item title="自动切换壁纸" slot="nested" @click="toggleSelect('autoChangeWallpaper')">
              <mu-switch v-model="settings.autoChangeWallpaper" slot="right" />
            </mu-list-item>
            <mu-list-item title="切换壁纸间隔" slot="nested" toggleNested :open="false">
              <mu-list-item title="每天" slot="nested" @click="changeRadioCheck('changeTime','everyDay')">
                  <mu-radio nativeValue="everyDay" name="changeWallpaperTime" slot="right"
                            :disabled="!settings.autoChangeWallpaper"
                            v-model="settings.changeTime" />
              </mu-list-item>
              <mu-list-item title="每小时" slot="nested" @click="changeRadioCheck('changeTime','everyHour')">
                  <mu-radio nativeValue="everyHour" name="changeWallpaperTime" slot="right"
                            :disabled="!settings.autoChangeWallpaper"
                            v-model="settings.changeTime" />
              </mu-list-item>
              <mu-list-item title="每分钟" slot="nested" @click="changeRadioCheck('changeTime','everyMinute')">
                  <mu-radio nativeValue="everyMinute" name="changeWallpaperTime" slot="right"
                            :disabled="!settings.autoChangeWallpaper" v-model="settings.changeTime" />
              </mu-list-item>
            </mu-list-item>
            <mu-list-item title="壁纸来源" slot="nested" toggleNested :open="false">
              <mu-list-item title="上大" slot="nested" @click="toggleSelect('wallpaperCategory','SHU')">
                <mu-checkbox v-model="settings.wallpaperCategory.SHU" slot="left" />
              </mu-list-item>
              <mu-list-item title="其他" slot="nested" @click="toggleSelect('wallpaperCategory','others')">
                <mu-checkbox v-model="settings.wallpaperCategory.others" slot="left" />
              </mu-list-item>
            </mu-list-item>
            <mu-list-item title="主题切换" slot="nested" toggleNested :open="false">
              <mu-list-item title="学长黑" slot="nested" @click="changeTheme('black')">
                <mu-radio nativeValue="black" name="theme" v-model="settings.theme" slot="right" />
              </mu-list-item>
              <mu-list-item title="学弟紫" slot="nested" @click="changeTheme('purple')">
                <mu-radio nativeValue="purple" name="theme" v-model="settings.theme" slot="right" />
              </mu-list-item>
              <mu-list-item title="上大蓝" slot="nested" @click="changeTheme('blue')">
                <mu-radio nativeValue="blue" name="theme" v-model="settings.theme" slot="right" />
              </mu-list-item>
              <mu-list-item title="开源绿" slot="nested" @click="changeTheme('green')">
                <mu-radio nativeValue="green" name="theme" v-model="settings.theme" slot="right" />
              </mu-list-item>
            </mu-list-item>
          </mu-list-item>
          <mu-list-item title="搜索设置" toggleNested :open="false">
            <mu-list-item title="默认搜索引擎" slot="nested" toggleNested :open="false">
              <mu-list-item title="谷歌" slot="nested" @click="changeRadioCheck('defaultSearchEngine','Google')">
                <mu-radio nativeValue="Google" name="defaultSearchEngine" slot="right"
                          v-model="settings.defaultSearchEngine" />
              </mu-list-item>
              <mu-list-item title="必应" slot="nested" @click="changeRadioCheck('defaultSearchEngine','Bing')">
                <mu-radio nativeValue="Bing" name="defaultSearchEngine" slot="right"
                          v-model="settings.defaultSearchEngine" />
              </mu-list-item>
              <mu-list-item title="百度" slot="nested" @click="changeRadioCheck('defaultSearchEngine','Baidu')">
                <mu-radio nativeValue="Baidu" name="defaultSearchEngine" slot="right"
                          v-model="settings.defaultSearchEngine" />
              </mu-list-item>
              <mu-list-item title="维基百科" slot="nested" @click="changeRadioCheck('defaultSearchEngine','Wikipedia')">
                <mu-radio nativeValue="Wikipedia" name="defaultSearchEngine" slot="right"
                          v-model="settings.defaultSearchEngine" />
              </mu-list-item>
              <mu-list-item title="知网" slot="nested" @click="changeRadioCheck('defaultSearchEngine','CNKI')">
                <mu-radio nativeValue="CNKI" name="defaultSearchEngine" slot="right"
                          v-model="settings.defaultSearchEngine" />
              </mu-list-item>
              <mu-list-item title="谷歌学术" slot="nested" @click="changeRadioCheck('defaultSearchEngine','GoogleScholar')">
                <mu-radio nativeValue="GoogleScholar" name="defaultSearchEngine" slot="right"
                          v-model="settings.defaultSearchEngine" />
              </mu-list-item>
              <mu-list-item title="知乎" slot="nested" @click="changeRadioCheck('defaultSearchEngine','Zhihu')">
                <mu-radio nativeValue="Zhihu" name="defaultSearchEngine" slot="right"
                          v-model="settings.defaultSearchEngine" />
              </mu-list-item>
            </mu-list-item>
          </mu-list-item>
        </mu-list>
    </mu-drawer>
  </div>
</template>

<script type="text/ecmascript-6">
  /* eslint-disable */
  import purple from '!raw-loader!!muse-ui/dist/theme-default.css'
  import blue from '!raw-loader!!muse-ui/dist/theme-light.css'
  import black from '!raw-loader!!muse-ui/dist/theme-carbon.css'
  import green from '!raw-loader!!muse-ui/dist/theme-teal.css'

  export default {
    name: 'sidebar',
    data: function () {
      return {
        settings: {
          autoChangeWallpaper: false,
          changeTime: 'everyDay',
          theme: 'black',
          themes: {
            black,
            purple,
            blue,
            green
          },
          wallpaperCategory: {
            SHU: true,
            others: false
          },
          defaultSearchEngine: 'Google'
        }
      }
    },
    methods: {
      toggleSidebar: function () {
        this.$store.commit('changeSidebar')
      },
      toggleSelect: function (key1, key2) {
        if (arguments.length === 1) {
          this.settings[ key1 ] = !this.settings[ key1 ]
        } else {
          this.settings[ key1 ][ key2 ] = !this.settings[ key1 ][ key2 ]
        }
      },
      changeRadioCheck: function (set, val) {
        this.settings[ set ] = val
      },
      changeTheme: function (theme) {
        this.settings.theme = theme
        const styleEl = this.getThemeStyle()
        styleEl.innerHTML = this.settings.themes[ theme ] || ''
      },
      getThemeStyle () {
        const themeId = 'muse-theme'
        let styleEl = document.getElementById(themeId)
        if (styleEl) return styleEl
        styleEl = document.createElement('style')
        styleEl.id = themeId
        document.body.appendChild(styleEl)
        return styleEl
      }
    },
    computed: {
      name: function () {
        return this.$store.state.user.name
      },
      avatar: function () {
        return 'https://static.shuhelper.cn/' + this.$store.state.user.avatar
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .sidebar
    display flex
    flex-direction column
    flex-wrap wrap
    align-items center
    justify-content flex-start

  .center
    padding-top 5vmin
    padding-bottom 2vmin
    display flex
    flex-direction column
    flex-wrap wrap
    align-items center
    justify-content flex-start
    text-align center
    h3
      padding-bottom 2vmin
</style>
