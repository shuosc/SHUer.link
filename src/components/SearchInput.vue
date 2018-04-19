<template lang="pug">
  div.container
    div.search
      mu-auto-complete.search-input(id="input",
                                    label="请输入搜索内容",
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
    name: "SearchInput",
    data() {
      return {
        searchString: "",
        autoComplete: []
      };
    },
    methods: {
      searchContent() {
        this.$router.push("/result");
        // this.$router.push("/?src=//www.baidu.com");
      },
      searchTextChange() {},
      changeSearchEngine() {}
    }
  };
</script>

<style lang="stylus" scoped>
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
