<template>
  <div class="sidebar">
    <mu-drawer right :docked="false" :open="this.$store.state.sidebarState"
               @close="toggleSidebar">
      <mu-appbar title="设置" />
        <mu-list>
          <mu-list-item title="壁纸设置" toggleNested>
            <mu-list-item title="自动切换壁纸" slot="nested">
              <mu-switch v-model="autoChangeWallpaper" slot="right" />
            </mu-list-item>
            <mu-list-item slot="nested" title="切换壁纸间隔" toggleNested>
              <mu-list-item title="每天" slot="nested">
                  <mu-radio name="group" slot="right" :disabled="!autoChangeWallpaper" />
              </mu-list-item>
              <mu-list-item title="每小时" slot="nested">
                  <mu-radio name="group" slot="right" :disabled="!autoChangeWallpaper" />
              </mu-list-item>
              <mu-list-item title="每分钟" slot="nested">
                  <mu-radio name="group" slot="right" :disabled="!autoChangeWallpaper" />
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
        autoChangeWallpaper: true,
        changeTime: ''
      }
    },
    methods: {
      toggleSidebar: function () {
        this.$store.commit('changeSidebar')
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
</style>
