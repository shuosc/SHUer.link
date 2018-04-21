<template lang="pug">
  mu-card
    mu-card-header.title
      div(v-html="title",style="")
      span 视频来源：{{ searchEngine }} 
      span 搜索指数：{{ score }}
    mu-card-media
      img(:src="imageUrl")
</template>

<script>
  export default {
    name: "CardVideo",
    props: [
      "imageUrl",
      "publishTime",
      "publisher",
      "score",
      "searchEngine",
      "title",
      "url"
    ]
  };
</script>

<style lang="stylus" scoped>
  .title {
    cursor: pointer;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;

    :hover {
      text-decoration: underline;
    }
  }

  img {
    height: 150px;
  }
</style>
