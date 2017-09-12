<template>
  <div class="container">
    <div class="pure-g">
      <div class="pure-u-1-24 pure-u-md-1-5"></div>
      <div class="pure-u-22-24 pure-u-md-3-5">
        <mu-paper :zDepth="2" class="about-paper">
          <h1>作者</h1>
          <mu-avatar src="adrian.png" :size="60" />
          <a href="https://github.com/AdrianDuan"><p>Adrian</p></a>
          <mu-avatar src="cosformula.png" :size="60" />
          <a href="https://github.com/cosformula"><p>cosformula</p></a>
          <h1>GitHub</h1>
          <a href="https://github.com/shuopensourcecommunity/SHUer.link"><i class="iconfont icon-GitHub"></i></a>
          <h1>反馈</h1>
          <a href="mailto:adrianduan@shuhelper.cn">adrianduan@shuhelper.cn</a>
        </mu-paper>
        <img
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNTIuMTI1IiBoZWlnaHQ9IjM1IiB2aWV3Qm94PSIwIDAgMTUyLjEyNSAzNSI+PHRpdGxlPmJ1aWx0LXdpdGgtbG92ZTwvdGl0bGU+PHBhdGggZmlsbD0iI2QxNWQyNyIgZD0iTTIxLjgxMyAwaDEzMC4zMTN2MzVIMjEuODEzeiIvPjxwYXRoIGZpbGw9IiNlMzZkMjUiIGQ9Ik0wIDBoMTEyLjV2MzVIMHoiLz48ZyBmaWxsPSIjZmZmIj48cGF0aCBkPSJNMTMuODY3IDIydi04LjUzMWgyLjkyNGEzLjU3IDMuNTcgMCAwIDEgMi4yLjU4IDIuMDQzIDIuMDQzIDAgMCAxIC43NTYgMS43MjkgMS44NDIgMS44NDIgMCAwIDEtLjMxNiAxLjA1NSAyLjAzNyAyLjAzNyAwIDAgMS0uOTI2LjcyNyAxLjg4MyAxLjg4MyAwIDAgMSAxLjA2OS43MDYgMi4wNTYgMi4wNTYgMCAwIDEgLjM3OCAxLjI0NSAyLjI3MSAyLjI3MSAwIDAgMS0uNzcxIDEuODQ2IDMuMzUgMy4zNSAwIDAgMS0yLjIwMi42NDN6bTEuNDgyLTQuOTM5SDE2LjhhMS42OCAxLjY4IDAgMCAwIDEuMDgxLS4zMTMgMS4wNzQgMS4wNzQgMCAwIDAgLjM5LS44ODggMS4wODkgMS4wODkgMCAwIDAtLjM2LS45MTQgMS44MiAxLjgyIDAgMCAwLTEuMTIyLS4yODFIMTUuMzV6bTAgMS4wOVYyMC44SDE3YTEuNiAxLjYgMCAwIDAgMS4wOS0uMzQ0IDEuMjA2IDEuMjA2IDAgMCAwIC4zOTMtLjk1NyAxLjIxNSAxLjIxNSAwIDAgMC0xLjM1OS0xLjM1NHpNMzAuMzE4IDEzLjQ2OXY1LjdhMi43NzEgMi43NzEgMCAwIDEtLjg3IDIuMTUzIDMuMzA1IDMuMzA1IDAgMCAxLTIuMzE3Ljc5NCAzLjMyOSAzLjMyOSAwIDAgMS0yLjMyNi0uNzgyIDIuNzg0IDIuNzg0IDAgMCAxLS44NjEtMi4xNzF2LTUuN2gxLjQ3N3Y1LjdhMS44MDkgMS44MDkgMCAwIDAgLjQzNCAxLjMgMS43IDEuNyAwIDAgMCAxLjI3Ny40NXExLjcxMSAwIDEuNzExLTEuOHYtNS42NDR6TTM2LjEgMjJoLTEuNDczdi04LjUzMUgzNi4xek00Mi4wNDkgMjAuOGgzLjg3M1YyMmgtNS4zNTZ2LTguNTMxaDEuNDgyek01NC42NjIgMTQuNjY0SDUyVjIyaC0xLjQ2OXYtNy4zMzZoLTIuNjM3di0xLjJoNi43Njh6TTcwLjM4OSAxOS44OTFsMS4zMTEtNi40MjJoMS40NzFMNzEuMiAyMmgtMS40MTVsLTEuNjIzLTYuMjI5TDY2LjUgMjJoLTEuNDJsLTEuOTY5LTguNTMxaDEuNDcxbDEuMzI0IDYuNDEgMS42MjktNi40MWgxLjI0MnpNNzguNDYgMjJoLTEuNDc2di04LjUzMWgxLjQ3NnpNODguOTE3IDE0LjY2NGgtMi42NlYyMmgtMS40NzF2LTcuMzM2aC0yLjYzN3YtMS4yaDYuNzY4ek05OS40NDkgMjJoLTEuNDc2di0zLjc4NWgtMy44MTVWMjJoLTEuNDgydi04LjUzMWgxLjQ4MnYzLjU1MWgzLjgxNHYtMy41NTFoMS40Nzd6Ii8+PC9nPjxwYXRoIGQ9Ik0xMzcuOTgxIDEyLjg3NWEzLjYgMy42IDAgMCAwLTQuNzg1IDBsLS45LjgyMy0uOS0uODIzYTMuNiAzLjYgMCAwIDAtNC43ODMgMCAzLjI5MiAzLjI5MiAwIDAgMCAwIDQuOTQxbDUuNjgyIDUuMjE4IDUuNjg0LTUuMjI1YTMuMyAzLjMgMCAwIDAgMC00Ljk0NXoiIGZpbGw9IiNmZmYiLz48L3N2Zz4="
          alt="badge">
        <footer><a href="https://osc.shu.edu.cn">&copy;2017 SHU Open Source Community</a></footer>
      </div>
      <div class="pure-u-1-24 pure-u-md-1-5"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'about'
  }
</script>

<style lang="stylus" scoped>
  .container
    text-align center

  .about-paper
    margin-top 5vmin
    margin-bottom 5vmin
    padding 5vmin
    display flex
    min-width 100%
    flex-direction column
    align-items center
    justify-content center
    flex-wrap nowrap
    background-color rgba(255, 255, 255, 0.5)

  .mu-avatar
    margin-top 2vmin

  a
    font-size 1.2rem
    color #4f4f4f

  .iconfont
    font-size 3rem

  footer
    a
      font-size 0.8rem

  p
    font-size 1.2rem
</style>
