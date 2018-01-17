<template lang="pug">
  div.right-panel
    q-list(no-border, link, inset-delimiter)
      q-list-header 功能菜单
      q-side-link(v-for="link in navItems", sparse, item, :key="link.icon", :to="link.to")
        q-item-side(:icon="link.icon")
        q-item-main(:label="link.label")
</template>

<script>
  export default {
    name: 'right-panel',
    methods: {},
    data() {
      return {
        navItems: [
          {to: '/', icon: 'home', label: '主页'}
        ]
      }
    }
  }
</script>

<style lang="stylus" scoped>

</style>
