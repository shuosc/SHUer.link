<template lang="pug">
  div
    iframe(v-if="$route.query.src",
          :src="$route.query.src",
          frameborder="0",
          width="100%",
          height="100%")
    div(v-else)
      .logo
        img(src="../assets/shuerlink.png",@click="$store.commit('settings/toggleSearch')")
      km-search-input
</template>

<script>
  import KmSearchInput from "./SearchInput";
  export default {
    name: "Index",
    components: {
      KmSearchInput
    },
    methods: {
    },
    data() {
      return {
      };
    }
  };
</script>

<style lang="stylus" scoped>
  .logo {
    text-align: center;

    img {
      transition: transform 2s;
      width: 150px;
      height: 150px;
      margin-top: 180px; // for pc

      @media only screen and (max-width: 900px) {
        width: 100px;
        height: 100px;
        margin-top: 30px;
      }

      @media only screen and (max-width: 500px) {
        width: 50px;
        height: 50px;
        margin-top: 20px;
      }
    }

    img:hover {
      transform: rotate(360deg);
      box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.3);
      border-radius: 50%;
      border: 1px solid rgba(31, 116, 255, 0.7);
    }
  }
</style>
