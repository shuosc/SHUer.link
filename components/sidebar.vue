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
          <mu-list-item title="壁纸设置" toggleNested :open="false">
            <mu-list-item title="自动切换壁纸" slot="nested">
              <mu-switch v-model="settings.autoChangeWallpaper" slot="right" />
            </mu-list-item>
            <mu-list-item slot="nested" title="切换壁纸间隔" toggleNested :open="false">
              <mu-list-item title="每天" slot="nested">
                  <mu-radio nativeValue="everyDay" name="group" slot="right" :disabled="!settings.autoChangeWallpaper"
                            v-model="settings.changeTime" />
              </mu-list-item>
              <mu-list-item title="每小时" slot="nested">
                  <mu-radio nativeValue="everyHour" name="group" slot="right" :disabled="!settings.autoChangeWallpaper"
                            v-model="settings.changeTime" />
              </mu-list-item>
              <mu-list-item title="每分钟" slot="nested">
                  <mu-radio nativeValue="everyMinute" name="group" slot="right"
                            :disabled="!settings.autoChangeWallpaper" v-model="settings.changeTime" />
              </mu-list-item>
            </mu-list-item>
          </mu-list-item>
        </mu-list>
    </mu-drawer>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'sidebar',
    data: function () {
      return {
        settings: {
          autoChangeWallpaper: false,
          changeTime: 'everyDay'
        }
      }
    },
    methods: {
      toggleSidebar: function () {
        this.$store.commit('changeSidebar')
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
