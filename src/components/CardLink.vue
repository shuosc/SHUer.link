<template lang="pug">
  mu-paper.link-paper.paper-1(:zDepth="2")
    div.link-header {{ header }}
    mu-raised-button(v-for="item in buttons",
                      :key="item.name"
                      :backgroundColor="item.color",
                      @click="open(item)")
      p {{ item.name }}&nbsp;
      i(v-if="item.icon",:class="'iconfont icon-'+item.icon")
</template>

<script>
  export default {
    name: "CardLink",
    props: ["header", "buttons"],
    methods: {
      open(web) {
        window.open(web.desktop);
      }
    }
  };
</script>

<style lang="stylus" scoped>
  .mu-raised-button {
    margin-bottom: 2vmin;
    margin-left: 1vmin;
    margin-right: 1vmin;
    text-transform: none;
    min-width: 120px;
  }

  .link-paper {
    // display: inline-block;
    text-align: center;
    margin: 10px auto;
    padding: 10px;
  }

  .link-header {
    display: block;
    margin: 0;
    padding: 2vh;
    font-size: 20px;
  }
</style>
