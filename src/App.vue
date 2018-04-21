<template lang="pug">
  #app
    km-navbar
    km-search
    transition(name="slide-fade")
      router-view
    km-settings(v-if="$store.state.user.loginState")
    km-login(v-else)
</template>

<script>
  import KmSettings from "./components/Settings";
  import KmNavbar from "./components/Navbar";
  import KmLogin from "./components/Login";
  import KmSearch from "./components/Search";
  export default {
    components: {
      KmNavbar,
      KmSettings,
      KmLogin,
      KmSearch
    },
    name: "App",
    mounted() {
      const wallpaperNumber = Math.ceil(38 * Math.random());
      document.body.style.backgroundImage = `url("https://static.shuhelper.cn/background/SHU/bg${wallpaperNumber}.jpg?imageslim")`;
    }
  };
</script>

<style lang="stylus">
  html {
    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    height: 100%;
    overflow: hidden;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  *, *:before, *:after {
    box-sizing: border-box;
    margin: 0;
  }

  .tab-news-content.water-container {
    display: none !important;
  }

  body {
    width: 100%;
    height: 100%;
    margin: 0;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;
  }

  #app {
    height: 100%;
    // background: rgba(0, 0, 0, 0.3);
  }

  iframe {
    height: calc(100vh - 67px);

    @media only screen and (max-width: 480px) {
      height: calc(100vh - 60px);
    }
  }

  .navbar {
    width: 100%;
    padding-top: 0;
    z-index: 2;
  }

  .slide-fade-enter-active {
    transition: all 0.5s ease;
  }

  .slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
  }

  .slide-fade-enter, .slide-fade-leave-to {
    transform: translateX(10px);
    opacity: 0;
  }

  em {
    color: #ff4081 !important;
  }

  .popup-top {
    width: 100%;
    opacity: 0.8;
    height: 48px;
    line-height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 375px;
    background-color: #000000;
  }

  .circle-progress {
    margin: 0 auto;
    width: 10%;
  }
</style>
