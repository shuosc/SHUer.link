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
      .circle-progress(v-if="loading",style="text-align:center")
        mu-circular-progress(:size="60",:strokeWidth="6")
      mu-popup(position="top",
              :overlay="false",
              :open="error",
              popupClass="popup-top") 网络错误
</template>

<script>
  import KmSearchInput from "./SearchInput";
  export default {
    name: "Index",
    components: {
      KmSearchInput
    },
    methods: {
      search() {
        const str = this.$store.state.search.searchString;
        this.$store.commit("search/clearResults");
        this.loading = true;
        this.$http
          .get("search/webpage", {
            params: {
              keyword: str
            }
          })
          .then(res => {
            this.loading = false;
            this.$router.push("/result");
            this.$store.commit("search/setWebpages", res.data);
          })
          .catch(err => {
            console.log(err);
            this.loading = false;
            this.error = true;
            setTimeout(() => {
              this.error = false;
            }, 2000);
          });
      }
    },
    data() {
      return {
        loading: false,
        error: false
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
