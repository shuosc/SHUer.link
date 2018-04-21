<template lang="pug">
  div.container
    km-card-link.links(v-for="item in linkData",
                      :header="item.name",
                      :key="item.name",
                      :buttons="item.buttons")
</template>

<script>
  import KmCardLink from "./CardLink";
  export default {
    name: "Discover",
    components: {
      KmCardLink
    },
    methods: {
    },
    computed: {
      linkData() {
        return this.$store.state.links.links;
      }
    }
  };
</script>

<style lang="stylus">
  .links {
    width: 60%;
    text-align: center;

    @media only screen and (max-width: 500px) {
      width: 90%;
    }
  }

  .container {
    padding-top: 30px;
  }
</style>
