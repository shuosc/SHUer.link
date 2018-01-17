<template lang='pug'>
  div#q-app
    q-layout(ref="layout", view="lHr Lpr fff", :right-class="{'bg-grey-2': true}")
      q-toolbar(slot="header")
        q-toolbar-title {{title}}
        q-btn(flat, @click="$refs.layout.toggleRight()")
          q-icon(name="settings")
      router-view
      div(slot="right")
        right-panel
</template>

<script>
  import RightPanel from '@/RightPanel'

  export default {
    name: 'app',
    data() {
      return {
        title: 'SHUer.link'
      }
    },
    components: {
      RightPanel
    }
  }
</script>

<style lang="stylus">
  body
    height 100%

  .center
    text-align center
</style>
