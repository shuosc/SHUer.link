<template lang="pug">
  div
    img.avatar(:src="src",:width="size+'px'",height="size+'px'")
</template>

<script>
  export default {
    name: "Avatar",
    props: ["size", "src"]
  };
</script>

<style lang="stylus">
  .avatar {
    border-radius: 50%;
    box-shadow: 0px 5px 40px 0px rgba(0, 0, 0, 0.2);
    margin: 10px;
    padding: 2px;
  }
</style>
