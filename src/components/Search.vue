<template lang="pug">
  div Search
</template>

<script>
  export default {
    name: "Search",
    mounted() {
      this.$store.commit("navbar/changeNavItem", { nav: "search" });
    }
  };
</script>

<style lang="stylus">
</style>
