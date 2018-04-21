<template lang="pug">
  mu-card
    mu-card-media(:title="description")
      img(:src="url")
</template>

<script>
  export default {
    name: "CardImage",
    props: [
      "description",
      "height",
      "hostUrl",
      "score",
      "searchEngine",
      "title",
      "type",
      "url",
      "width"
    ]
  };
</script>

<style lang="stylus" scoped>
  .mu-card {
    display: inline;
  }

  img {
    // max-height: 200px;
  }
</style>
