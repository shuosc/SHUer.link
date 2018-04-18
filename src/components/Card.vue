<template lang="pug">
  div
    div.my-card
      div.my-card-content
        h2
          slot(name="title")
        h3
          slot(name="content")
</template>

<script>
  export default {
    props: ["title"],
    name: "Card"
  };
</script>

<style lang="stylus">
  .my-card {
    width: 100%;
    align-items: center;
    justify-content: center;
  }

  .my-card-content {
    position: relative;
    margin: 0 auto;
    background: rgb(255, 255, 255);
    padding: 0;
    border-radius: 0px 0px 15px 15px;
    color: rgba(0, 0, 0, 0.6);
    box-shadow: 0px 5px 40px 0px rgba(0, 0, 0, 0.1);
    max-width: 1000px;
    top: 0px;
  }

  .my-card-content h2 {
    padding: 0 10px;
    text-align: center;
    font-size: 30px;
    font-weight: lighter;
    color: rgba(31, 116, 255, 1);
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    background-color: rgba(244, 243, 244, 0.5);
  }

  .my-card-content h3 {
    font-size: 17px;
    // font-weight: lighter;
    padding: 10px;
  }
</style>
