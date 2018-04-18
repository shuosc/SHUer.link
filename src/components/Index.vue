<template lang="pug">
  div
    iframe(v-if="$route.query.src",
          :src="$route.query.src",
          frameborder="0",
          width="100%",
          height="100%")
    div(v-else)
      .logo
        img(src="../assets/shuerlink.png",@click="$store.commit('settings/toggleSearch')")
      div.container
        div.search
          mu-auto-complete.search-input(id="input",
                                        label="搜索",
                                        v-model="searchString",
                                        :labelFloat="true",
                                        filter="noFilter",
                                        @keyup.enter="searchContent",
                                        :dataSource="autoComplete",
                                        @input="searchTextChange",
                                        :required="true",
                                        type="search",
                                        :inputClass="'input-text'",
                                        :maxHeight="250",
                                        :labelClass="'inputLabel'",
                                        :underlineClass="'searchUnderline'",
                                        name="search",
                                        :fullWidth="true"
                                        style="width:60vw")
          mu-raised-button.search-button(class="search-button",
                                        label="搜索",
                                        icon=":iconfont icon-search",
                                        primary,
                                        @click="searchContent")
</template>

<script>
  export default {
    name: "Index",
    methods: {
      searchContent() {
        this.$router.push("/?src=//www.baidu.com");
      },
      searchTextChange() {},
      changeSearchEngine() {}
    },
    data() {
      return {
        icon: ":iconfont icon-Google",
        searchString: "",
        autoComplete: []
      };
    },
    updated() {
      const navbarHeight = document.getElementsByTagName("nav")[0].clientHeight;
      const frame = document.getElementsByTagName("iframe")[0];
      const browserHeight = document.body.clientWidth;
      frame.style.width = browserHeight - navbarHeight;
    }
  };
</script>

<style lang="stylus" scoped>
  .logo {
    text-align: center;

    img {
      transition: transform 2s;
      width: 150px;
      height: 150px;
      margin-top: 180px; // for pc

      @media only screen and (max-width: 900px) {
        width: 100px;
        height: 100px;
        margin-top: 30px;
      }

      @media only screen and (max-width: 500px) {
        width: 50px;
        height: 50px;
        margin-top: 20px;
      }
    }

    img:hover {
      transform: rotate(360deg);
      box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.3);
      border-radius: 50%;
      border: 1px solid rgba(31, 116, 255, 0.7);
    }
  }

  .container {
    width: 60%;
    margin: 10px auto;

    @media only screen and (max-width: 900px) {
      width: 80%;
      margin: 5px auto;
    }

    @media only screen and (max-width: 500px) {
      width: 95%;
      margin: 0 auto;
    }
  }

  .search {
    align-items: baseline;
    justify-content: center;
    display: flex;

    .search-input {
      flex: 1;
    }

    .search-button {
      flex: 0 0 15%;

      @media only screen and (max-width: 900px) {
        flex: 0 0 20%;
      }

      @media only screen and (max-width: 500px) {
        flex: 0 0 30%;
      }
    }
  }
</style>
