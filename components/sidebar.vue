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
          <mu-list-item title="自动切换壁纸" slot="nested"
                        @click="autoChangeWallpaper=!autoChangeWallpaper">
            <mu-switch v-model="autoChangeWallpaper" slot="right" />
          </mu-list-item>
          <mu-list-item title="切换壁纸间隔" slot="nested" toggleNested :open="false">
            <mu-list-item title="每天" slot="nested" @click="changeWallpaperTime='everyDay'">
              <mu-radio nativeValue="everyDay" name="changeWallpaperTime" slot="right"
                        :disabled="!autoChangeWallpaper"
                        v-model="changeWallpaperTime" />
            </mu-list-item>
            <mu-list-item title="每小时" slot="nested" @click="changeWallpaperTime='everyHour'">
              <mu-radio nativeValue="everyHour" name="changeWallpaperTime" slot="right"
                        :disabled="!autoChangeWallpaper"
                        v-model="changeWallpaperTime" />
            </mu-list-item>
            <mu-list-item title="每分钟" slot="nested" @click="changeWallpaperTime='everyMinute'">
              <mu-radio nativeValue="everyMinute" name="changeWallpaperTime" slot="right"
                        :disabled="!autoChangeWallpaper" v-model="changeWallpaperTime" />
            </mu-list-item>
          </mu-list-item>
          <mu-list-item title="壁纸来源" slot="nested" toggleNested :open="false">
            <mu-list-item title="上大" slot="nested" @click="wallpaperCategorySHU=!wallpaperCategorySHU">
              <mu-checkbox v-model="wallpaperCategorySHU" slot="left" />
            </mu-list-item>
            <mu-list-item title="其他" slot="nested" @click="wallpaperCategoryOthers=!wallpaperCategoryOthers">
              <mu-checkbox v-model="wallpaperCategoryOthers" slot="left" />
            </mu-list-item>
          </mu-list-item>
          <mu-list-item title="主题切换" slot="nested" toggleNested :open="false">
            <mu-list-item title="学长黑" slot="nested" @click="changeTheme='black'">
              <mu-radio nativeValue="black" name="theme" v-model="changeTheme" slot="right" />
            </mu-list-item>
            <mu-list-item title="学弟紫" slot="nested" @click="changeTheme='purple'">
              <mu-radio nativeValue="purple" name="theme" v-model="changeTheme" slot="right" />
            </mu-list-item>
            <mu-list-item title="上大蓝" slot="nested" @click="changeTheme='blue'">
              <mu-radio nativeValue="blue" name="theme" v-model="changeTheme" slot="right" />
            </mu-list-item>
            <mu-list-item title="开源绿" slot="nested" @click="changeTheme='green'">
              <mu-radio nativeValue="green" name="theme" v-model="changeTheme" slot="right" />
            </mu-list-item>
          </mu-list-item>
        </mu-list-item>
        <mu-list-item title="搜索设置" toggleNested :open="false">
          <mu-list-item title="自动补全搜索" slot="nested"
                        @click="autoComplete=!autoComplete">
            <mu-switch v-model="autoComplete" slot="right" />
          </mu-list-item>
          <mu-list-item title="默认搜索引擎" slot="nested" toggleNested :open="false">
            <mu-list-item v-for="searchEngine in this.$store.state.searchEngines" :title="searchEngine.title"
                          slot="nested" @click="defaultSearchEngine=searchEngine.value"
                          :key="searchEngine.value">
              <mu-radio :nativeValue="searchEngine.value" name="defaultSearchEngine" slot="right"
                        v-model="defaultSearchEngine" />
            </mu-list-item>
          </mu-list-item>
          <mu-list-item title="默认维基百科语言" slot="nested" toggleNested :open="false">
            <mu-list-item v-for="language in this.$store.state.wikiLanguages" :title="language.title" slot="nested"
                          @click="defaultWikiLanguage=language.value" :key="language.value">
              <mu-radio :nativeValue="language.value" name="defaultWikiLanguage" slot="right"
                        v-model="defaultWikiLanguage" />
            </mu-list-item>
          </mu-list-item>
        </mu-list-item>
      </mu-list>
      <div class="center">
        <mu-raised-button label="退出登录" icon=":iconfont icon-logout" primary @click="logout" />
      </div>
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
    methods: {
      toggleSidebar: function () {
        this.$store.commit('changeSidebar')
      },
      logout: function () {
        this.$store.commit('logout')
      }
    },
    computed: {
      name: function () {
        return this.$store.state.user.name
      },
      avatar: function () {
        return `https://static.shuhelper.cn/${this.$store.state.user.avatar}?imageslim`
      },
      autoChangeWallpaper: {
        get () {
          return this.$store.state.user.settings.autoChangeWallpaper
        },
        set (val) {
          this.$store.commit({
            type: 'toggleSelect',
            set: 'autoChangeWallpaper',
            val: val
          })
          this.$store.commit('saveChanges')
        }
      },
      autoComplete: {
        get () {
          return this.$store.state.user.settings.autoComplete
        },
        set (val) {
          this.$store.commit({
            type: 'toggleSelect',
            set: 'autoComplete',
            val: val
          })
          this.$store.commit('saveChanges')
        }
      },
      changeWallpaperTime: {
        get () {
          return this.$store.state.user.settings.changeWallpaperTime
        },
        set (val) {
          if (this.autoChangeWallpaper === false) return
          this.$store.commit({
            type: 'changeRadioCheck',
            set: 'changeWallpaperTime',
            val: val
          })
          this.$store.commit('saveChanges')
        }
      },
      wallpaperCategorySHU: {
        get () {
          return this.$store.state.user.settings.wallpaperCategory.SHU
        },
        set (val) {
          this.$store.commit({
            type: 'toggleSecondSelect',
            set1: 'wallpaperCategory',
            set2: 'SHU',
            val: val
          })
          this.$store.commit('saveChanges')
        }
      },
      wallpaperCategoryOthers: {
        get () {
          return this.$store.state.user.settings.wallpaperCategory.others
        },
        set (val) {
          this.$store.commit({
            type: 'toggleSecondSelect',
            set1: 'wallpaperCategory',
            set2: 'others',
            val: val
          })
          this.$store.commit('saveChanges')
        }
      },
      changeTheme: {
        get () {
          return this.$store.state.user.settings.theme
        },
        set (val) {
          this.$store.commit('changeTheme', val)
          this.$store.commit('saveChanges')
        }
      },
      defaultSearchEngine: {
        get () {
          return this.$store.state.user.settings.defaultSearchEngine
        },
        set (val) {
          this.$store.commit({
            type: 'changeRadioCheck',
            set: 'defaultSearchEngine',
            val: val
          })
          this.$store.commit('changeSearchEngine', val)
          this.$store.commit('saveChanges')
        }
      },
      defaultWikiLanguage: {
        get () {
          return this.$store.state.user.settings.defaultWikiLanguage
        },
        set (val) {
          this.$store.commit({
            type: 'changeRadioCheck',
            set: 'defaultWikiLanguage',
            val: val
          })
          this.$store.commit('changeWikiLanguage', val)
          this.$store.commit('saveChanges')
        }
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
