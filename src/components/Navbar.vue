<template lang="pug">
  nav
    div#logo
      img(src="../assets/logo.png",width="50px",height="50px")
    div#search-input
      vs-input(vs-placeholder="请输入关键词",v-model="keywords")
    vs-button(@click="search",vs-type="primary-gradient") 搜索
    div#nav-item
      a(
        :class="{'nav-active':$store.getters['navbar/activeItem']==='search'}",
        @click="changeNav('search')"
      ) 搜索
      a(
        :class="{'nav-active':$store.getters['navbar/activeItem']==='discover'}",
        @click="changeNav('discover')"
      ) 发现
      a(
        :class="{'nav-active':$store.getters['navbar/activeItem']==='login'}",
        @click="changeNav('login')"
        v-if="!$store.getters['user/loginState']"
      ) 登录
      a(
        v-else
        :class="{'nav-active':$store.getters['navbar/activeItem']==='center'}",
        @click="changeNav('center')"
      ) 设置
</template>

<script>
  export default {
    name: "Navbar",
    data() {
      return {
        keywords: ""
      };
    },
    methods: {
      changeNav(navItem) {
        this.$store.commit("navbar/changeNavItem", { nav: navItem });
        this.$router.push(navItem);
      },
      search() {
        console.log(this.keywords);
      }
    }
  };
</script>

<style lang="stylus">
  #logo {
    display: inline-block;
    float: left;
    margin: 10px 100px;

    img {
      transition: transform 2s;
    }

    img:hover {
      transform: rotate(360deg);
    }
  }

  #search-input {
    width: 40%;
    display: inline-block;

    .vs-input {
      padding: 8px;
      font-size: 16px;
    }
  }

  nav {
    height: 70px;
    padding: 0;
    margin: 0;
    box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 0.3);
    z-index: 100;
  }

  button {
    width: 200px;
    padding: 0;
    font-size: 14px;
  }

  #nav-item {
    float: right;
    text-align: center;

    ::after {
      content: '';
      display: block;
      width: 100%;
      height: 5px;
      position: absolute;
      bottom: -22px;
      background: linear-gradient(30deg, rgba(31, 116, 255, 1) 0%, rgb(96, 31, 255) 100%);
      transition: all 0.5s ease-in-out;
      transform: scale3d(0, 1, 1);
      transform-origin: 50% 0;
    }

    :hover::after {
      transform: scale3d(1, 1, 1);
    }

    a {
      display: inline-block;
      margin: 25px 40px;
      width: 50px;
      padding: 0;
      cursor: pointer;
      position: relative;
    }
  }

  .nav-active {
    color: rgba(31, 116, 255, 1);
  }
</style>
