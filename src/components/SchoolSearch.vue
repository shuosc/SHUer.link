<template lang="pug">
  div
    km-search-input
      .circle-progress(v-if="loading")
        mu-circular-progress(:size="60",:strokeWidth="6")
    mu-popup(position="top",
              :overlay="false",
              :open="error",
              popupClass="popup-top") 网络错误
    .school
      km-card-school(v-for="item in schoolWebs", 
                    :key="item.url",
                    :title="item.title",
                    :content="item.content",
                    @click.native="open(item)")
</template>

<script>
  import KmSearchInput from "./SearchInput";
  import KmCardSchool from "./CardSchool";
  export default {
    name: "SchoolSearch",
    components: { KmSearchInput, KmCardSchool },
    methods: {
      open(web) {
        window.open(web.url);
      },
      search() {
        this.loading = true;
        const str = this.$store.state.search.searchString;
        this.$http
          .get("school/", {
            params: {
              q: str
            }
          })
          .then(res => {
            this.loading = false;
            this.schoolWebs = res.data;
          })
          .catch(err => {
            this.loading = false;
            this.error = true;
            setTimeout(() => {
              this.error = false;
            }, 2000);
          });
      }
    },
    mounted() {
      this.search();
    },
    data() {
      return {
        loading: false,
        error: false,
        schoolWebs: []
      };
    }
  };
</script>

<style lang="stylus" scoped>
  .school {
    width: 60%;
    margin: 10px auto;

    @media only screen and (max-width: 500px) {
      width: 90%;
    }
  }

  .mu-card {
    margin: 15px 0;
  }
</style>
