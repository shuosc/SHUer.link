<template lang="pug">
  div
    my-navbar
    keep-alive
      router-view
</template>

<script>
  import MyNavbar from "./Navbar";
  export default {
    name: "Index",
    components: {
      MyNavbar
    }
  };
</script>

<style lang="stylus">
</style>
