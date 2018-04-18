<template lang="pug">
  div.discover Discover
</template>

<script>
  export default {
    name: "Discover",
    mounted() {
      this.$store.commit("navbar/changeNavItem", { nav: "discover" });
    }
  };
</script>

<style lang="stylus">
</style>
