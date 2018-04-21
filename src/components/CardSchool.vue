<template lang="pug">
  mu-card
    mu-card-header.title(:title="title")
    mu-card-text
      p(v-html="content")
</template>

<script>
  export default {
    name: "CardSchool",
    props: ["title", "content"]
  };
</script>

<style lang="stylus" scoped>
  .mu-card {
    padding: 10px 40px;

    @media only screen and (max-width: 500px) {
      padding: 5px;
    }
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
