<template lang="pug">
  mu-card
    mu-card-header.title(:title="title",
                        :subTitle="'搜索来源：' + searchEngine + '\t' + '搜索指数：' + score")
    mu-card-text
      p {{description}}
</template>


<script>
  export default {
    name: "CardWebpage",
    props: ["searchEngine", "title", "score", "description"]
  };
</script>


<style lang="stylus" scoped>
  .mu-card {
    padding: 10px 40px;
    // cursor: pointer;
  }

  .mu-card-text {
    padding-top: 0;
  }

  .mu-card-header-title {
    cursor: pointer;
    // text-decoration: underline;
    // padding: 10px;
  }

  .title {
    cursor: pointer;

    :hover {
      text-decoration: underline;
    }
  }
</style>
