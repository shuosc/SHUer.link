<template lang="pug">
  mu-drawer(right,
            :docked="false",
            :open="$store.state.settings.sidebarState",
            @close="$store.commit('settings/toggleSidebar')")
    mu-appbar(title="设置",style="text-align:center")
    div.center
      h3 {{ name }}
      mu-avatar(:size="80",:src="avatar")
    mu-list
      mu-list-item(title="外观设置",
                  :toggleNested="true",
                  :open="false")
        mu-list-item(title="自动切换壁纸",
                    slot="nested",
                    @click="autoChangeWallpaper=!autoChangeWallpaper")
          mu-switch(v-model="autoChangeWallpaper", slot="right")
        mu-list-item(title='切换壁纸间隔', slot='nested', :toggleNested='true', :open='false')
          mu-list-item(title='每天', slot='nested', @click="changeWallpaperTime='everyDay'")
            mu-radio(native-value='everyDay', name='changeWallpaperTime', slot='right', :disabled='!autoChangeWallpaper', v-model='changeWallpaperTime')
          mu-list-item(title='每小时', slot='nested', @click="changeWallpaperTime='everyHour'")
            mu-radio(native-value='everyHour', name='changeWallpaperTime', slot='right', :disabled='!autoChangeWallpaper', v-model='changeWallpaperTime')
          mu-list-item(title='每分钟', slot='nested', @click="changeWallpaperTime='everyMinute'")
            mu-radio(native-value='everyMinute', name='changeWallpaperTime', slot='right', :disabled='!autoChangeWallpaper', v-model='changeWallpaperTime')
        mu-list-item(title='壁纸来源', slot='nested', :toggleNested='true', :open='false')
          mu-list-item(title='上大', slot='nested', @click='wallpaperCategorySHU=!wallpaperCategorySHU')
            mu-checkbox(v-model='wallpaperCategorySHU', slot='left')
          mu-list-item(title='其他', slot='nested', @click='wallpaperCategoryOthers=!wallpaperCategoryOthers')
            mu-checkbox(v-model='wallpaperCategoryOthers', slot='left')
        mu-list-item(title='主题切换', slot='nested', :toggleNested='true', :open='false')
          mu-list-item(title='下雨透', slot='nested', @click="changeTheme='transparent'")
            mu-radio(native-value='transparent', name='theme', v-model='changeTheme', slot='right')
          mu-list-item(title='学长黑', slot='nested', @click="changeTheme='black'")
            mu-radio(native-value='black', name='theme', v-model='changeTheme', slot='right')
          mu-list-item(title='学弟紫', slot='nested', @click="changeTheme='purple'")
            mu-radio(native-value='purple', name='theme', v-model='changeTheme', slot='right')
          mu-list-item(title='上大蓝', slot='nested', @click="changeTheme='blue'")
            mu-radio(native-value='blue', name='theme', v-model='changeTheme', slot='right')
          mu-list-item(title='开源绿', slot='nested', @click="changeTheme='green'")
            mu-radio(native-value='green', name='theme', v-model='changeTheme', slot='right')
      mu-list-item(title="搜索设置",:toggleNested="true", :open="false")
        mu-list-item(title='自动补全搜索', slot='nested', @click='autoComplete=!autoComplete')
          mu-switch(v-model='autoComplete', slot='right')
        mu-list-item(title='默认搜索引擎', slot='nested', :toggleNested='true', :open='false')
          mu-list-item(v-for='searchEngine in $store.state.search.searchEngines', :title='searchEngine.title', slot='nested', @click='defaultSearchEngine=searchEngine.value', :key='searchEngine.value')
            mu-radio(:native-value='searchEngine.value', name='defaultSearchEngine', slot='right', v-model='defaultSearchEngine')
        mu-list-item(title='默认维基百科语言', slot='nested', :toggleNested='true', :open='false')
          mu-list-item(v-for='language in $store.state.search.wikiLanguages', :title='language.title', slot='nested', @click='defaultWikiLanguage=language.value', :key='language.value')
            mu-radio(:native-value='language.value', name='defaultWikiLanguage', slot='right', v-model='defaultWikiLanguage')
    div.center
      mu-raised-button(label="退出登录",icon=":iconfont icon-logout",primary,@click="logout")
</template>

<script>
  export default {
    name: "Settings",
    methods: {
      logout() {
        this.$store.commit("user/logout");
      }
    },
    data() {
      return {
        name: "",
        autoChangeWallpaper: false,
        autoComplete: false,
        changeWallpaperTime: "",
        wallpaperCategorySHU: true,
        wallpaperCategoryOthers: false,
        defaultSearchEngine: "Google",
        defaultWikiLanguage: "en"
      };
    },
    computed: {
      changeTheme: {
        get() {
          return this.$store.state.user.settings.theme;
        },
        set(val) {
          this.$store.commit("user/changeTheme", val);
          this.$store.commit("user/saveChanges");
        }
      },
      avatar() {
        return `https://static.shuhelper.cn/${
          this.$store.state.user.info.avatar
        }?imageslim`;
      }
    }
  };
</script>

<style lang="stylus" scoped>
  h3 {
    margin-top: 30px;
  }
</style>
