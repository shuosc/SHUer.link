<template lang="pug">
  div
    mu-tabs(:value="activeTab",@change="handleTabChange")
      mu-tab(value="webpages",icon=":iconfont icon-web",title="网页")
      //- mu-tab(value="images",icon=":iconfont icon-image",title="图片")
      mu-tab(value="videos",icon=":iconfont icon-video",title="视频")
    km-search-input
    .circle-progress(v-if="loading")
      mu-circular-progress(:size="60",
                          :strokeWidth="6")
    mu-popup(position="top",
            :overlay="false",
            :open="error",
            popupClass="popup-top") 网络错误
    .webpages(v-if="activeTab==='webpages'", v-for="item in webpages")
      km-card-webpage(:title="item.title",
                  :searchEngine="item.searchEngine",
                  :score="item.score",
                  :description="item.description",
                  @click.native="show(item.url)")
    div.container
      .videos(v-if="activeTab==='videos'", v-for="item in videos")
        km-card-video(:title="item.title",
                      :searchEngine="item.searchEngine",
                      :imageUrl="item.imageUrl",
                      :score="item.score",
                      @click.native="show(item.url)")
</template>

<script>
  import KmSearchInput from "./SearchInput";
  import KmCardWebpage from "./CardWebpage";
  // import KmCardImage from "./CardImage";
  import KmCardVideo from "./CardVideo";
  export default {
    name: "Result",
    components: {
      KmSearchInput,
      KmCardWebpage,
      KmCardVideo
      // KmCardImage
    },
    mounted() {},
    methods: {
      show(url) {
        window.open(url);
      },
      handleTabChange(tab) {
        this.activeTab = tab;
      },
      searchVideo() {
        this.loading = true;
        const str = this.$store.state.search.searchString;
        this.$store.commit("search/clearResults");
        this.$http
          .get("search/video", {
            params: {
              keyword: str
            }
          })
          .then(res => {
            this.$store.commit("search/setVideos", res.data);
            this.loading = false;
          })
          .catch(err => {
            this.loading = false;
            this.error = true;
          });
      },
      searchWebpage() {
        this.loading = true;
        const str = this.$store.state.search.searchString;
        this.$store.commit("search/clearResults");
        this.$http
          .get("search/webpage", {
            params: {
              keyword: str
            }
          })
          .then(res => {
            this.$store.commit("search/setWebpages", res.data);
            this.loading = false;
          })
          .catch(err => {
            this.loading = false;
            this.error = true;
            setTimeout(() => {
              this.error = false;
            }, 2000);
          });
      },
      search() {
        switch (this.activeTab) {
          case "webpages":
            this.searchWebpage();
            break;
          case "videos":
            this.searchVideo();
            break;
          default:
            break;
        }
      }
    },
    data() {
      return {
        activeTab: "webpages",
        loading: false,
        error: false
      };
    },
    computed: {
      webpages() {
        return this.$store.state.search.webpages;
      },
      images() {
        return this.$store.state.search.images;
      },
      videos() {
        return this.$store.state.search.videos;
      }
    }
  };
</script>

<style lang="stylus">
  .webpages {
    width: 60%;
    margin: 10px auto;

    @media only screen and (max-width: 500px) {
      width: 90%;
    }
  }

  .videos {
    width: 20%;
    margin: 10px;
    display: inline-block;

    @media only screen and (max-width: 500px) {
      width: 90%;
      margin: 5px;
    }
  }

  .mu-tabs {
    margin: 0 auto;
    height: 65px;

    @media only screen and (max-width: 500px) {
      height: 60px;
    }
  }

  .container {
    width: 80%;
    margin: 0 auto;
    text-align: center;

    @media only screen and (max-width: 500px) {
      width: 95%;
    }
  }
</style>

