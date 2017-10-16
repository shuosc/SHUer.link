<template>
  <div class="container">
    <mu-row gutter>
      <mu-col width="0" tablet="10" desktop="20"></mu-col>
      <mu-col width="100" tablet="80" desktop="60">
        <img class="logo" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA3NzguOTQgMTE0LjYiPjxkZWZzPjxzdHlsZT4uYXtmaWxsOiNGRkZGRkY7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5sb2dvPC90aXRsZT48cGF0aCBjbGFzcz0iYSIgZD0iTTE5OS44NiwzMDIuNnExMC4zMSw4LjI3LDEwLjMxLDIyLjc3LDAsMTQuODItMTAuODIsMjMuNzFhNDUuODIsNDUuODIsMCwwLDEtNy4zLDQuNTIsNTAuNjcsNTAuNjcsMCwwLDEtOSwzLjQzLDEwMC40NiwxMDAuNDYsMCwwLDEtMTcuMzUsMi44MSwzNC41MSwzNC41MSwwLDAsMS00LjQ3LjMxaC00cS01LDAtOC0uMjN0LTMuMzUtLjIzYTEuNjUsMS42NSwwLDAsMS0xLjU1LTEuNzJ2LTExLjdxMC0xLjU2LDEuODktMS41NkgxOTlxNy41Ni03LjY2LDcuNTYtMTkuMzdhMjguMDksMjguMDksMCwwLDAtMi40LTExLjcyLDMyLjIzLDMyLjIzLDAsMCwxLTMuNTIuMTZoLTQuNzJxLTIuOTIsMC02LjE4LS4xNnQtNi44Ny0uNDdxLTE5LjQxLTIuMzQtMjkuMzctMTAuNzhRMTQzLDI5My43OSwxNDMsMjc5LjFxMC0xNSwxMC44Mi0yMy40NGE0NC43Miw0NC43MiwwLDAsMSwxNi4zMi03LjVxMy45NS0uOTQsOC4yNC0xLjU2YTgxLjYsODEuNiwwLDAsMSw5LjEtLjc4LDEwNC43MiwxMDQuNzIsMCwwLDEsMTMuODMuMjRxNS41OC41NSw1LjkzLjU1LDEuNTUuMzEsMS41NSwxLjU3djEzLjA3cTAsMS43My0xLjg5LDEuNzNIMTUxLjZhMjYuNDQsMjYuNDQsMCwwLDAtNSwxNi4yMiwyOCwyOCwwLDAsMCwzLjA5LDEzLjQxcTMuNjEtLjMxLDkuMzYtLjU1YTgwLjA5LDgwLjA5LDAsMCwxLDEyLjQ1LjU1UTE5MC4yNCwyOTQuNDksMTk5Ljg2LDMwMi42Wm0tMzQuMzUsNTQuMTJxMy4yNi0uMTUsNy0uN2E2OC41MSw2OC41MSwwLDAsMCw3LjY0LTEuNTYsNTkuMzEsNTkuMzEsMCwwLDAsNy42NC0yLjU3LDQwLjEyLDQwLjEyLDAsMCwwLDctMy43NEgxNDh2OC40MnEyLjIzLjMxLDYuODcuNDdBOTYuNDQsOTYuNDQsMCwwLDAsMTY1LjUxLDM1Ni43MlptMTcuODYtNDYuNzlxNS44NC42MiwxMC44Mi43YTc2LDc2LDAsMCwwLDguMjQtLjIzLDIxLjEsMjEuMSwwLDAsMC01LTUuMywzNS4yNiwzNS4yNiwwLDAsMC0xMS4wOC02LDY0LjE1LDY0LjE1LDAsMCwwLTEyLjcxLTIuODksMTAyLjUxLDEwMi41MSwwLDAsMC0xMi4yOC0uNzhxLTUuODQsMC05LjYyLjMxYTIxLjI0LDIxLjI0LDAsMCwwLDQuMTIsNC4yMVExNjUuMzQsMzA3LjksMTgzLjM3LDMwOS45M1pNMTU2LjI0LDI1OC4zYTExLjY2LDExLjY2LDAsMCwxLTEuNTUsMS4yNWg1MC41di05LjY3cS0yLjIzLS4zMS03LS42MmE4OS40NCw4OS40NCwwLDAsMC0xMC41NiwwcS0zLjYxLjE2LTcuNzMuNjJhNjAuMzUsNjAuMzUsMCwwLDAtOC4zMywxLjU2LDYxLjc4LDYxLjc4LDAsMCwwLTguMTYsMi43M0EzMS45MywzMS45MywwLDAsMCwxNTYuMjQsMjU4LjNaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTQzLjAxIC0yNDUuNzEpIi8+PHBhdGggY2xhc3M9ImEiIGQ9Ik0yOTguNjQsMjQ1LjgycTEuODcsMCwxLjg3LDEuNzJWMzU4LjZxMCwxLjcyLTEuODcsMS43MUgyODUuMnEtMS44NywwLTEuODctMS43MVYzMTIuNzRIMjQ3LjI2VjM1OC42YTEuNTIsMS41MiwwLDAsMS0xLjcyLDEuNzFIMjMxLjgxYTEuNTIsMS41MiwwLDAsMS0xLjcyLTEuNzFWMjQ3LjU0YTEuNTIsMS41MiwwLDAsMSwxLjcyLTEuNzJoMTMuNzRhMS41MiwxLjUyLDAsMCwxLDEuNzIsMS43MXY0OC44M2gzNi4wN1YyNDcuNTNxMC0xLjcxLDEuODctMS43MVptLTY0Ljk0LDMuNDN2NDcuMTFoMTBWMjQ5LjI1Wm0wLDUwLjU0djkuNTFoMTB2LTkuNTFabTEwLDEyLjk1aC0xMHY0NC4xNGgxMFptMzkuNjgtMy40M3YtOS41MUgyNDcuMjZ2OS41MVptMy42MS02MC4wNXY2MC4wNWgxMFYyNDkuMjVabTEwLDEwNy42M1YzMTIuNzRoLTEwdjQ0LjE0WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE0My4wMSAtMjQ1LjcxKSIvPjxwYXRoIGNsYXNzPSJhIiBkPSJNMzk3LDMwMWEzOC4zNiwzOC4zNiwwLDAsMSwuMjYsNC45MSw4NC4wOCw4NC4wOCwwLDAsMS0uNiwxMC41M3EtMS43MiwxNy42My04LjkzLDI4LjctOS43OSwxNS0yOCwxNS0xOCwwLTI4LjM0LTE0LjgyYTU2LjE5LDU2LjE5LDAsMCwxLTYuMS0xMi42Myw4Mi43MSw4Mi43MSwwLDAsMS0zLjY5LTE2LjA3LDEwMS40OCwxMDEuNDgsMCwwLDEtLjk0LTEwLjg0cS0uMDktNC4yOS0uMDktNC43NnYtNTMuNXEwLTEuNzEsMS44Ny0xLjcyaDEzLjk1cTEuODcsMCwxLjg3LDEuNzJ2NTUuNTNhMTA4LjM3LDEwOC4zNywwLDAsMCwxLDEzLjg4LDYyLjUzLDYyLjUzLDAsMCwwLDMsMTEuNjIsMjQuODYsMjQuODYsMCwwLDAsNi4yOSw5LjkxLDE0Ljg5LDE0Ljg5LDAsMCwwLDEwLjg1LDQuMjFIMzg1YTQ2LjIxLDQ2LjIxLDAsMCwwLDUuNi0xMy4zNEE5My40OCw5My40OCwwLDAsMCwzOTMsMzE1LjkzYTkwLjQ4LDkwLjQ4LDAsMCwwLC41Mi0xMC4zN3EtLjA5LTQuMjEtLjA5LTQuMzdWMjQ1LjgySDM5N1ptLTcyLjgyLjE2cTAsLjE2LjA5LDQuMzdhOTAuMTksOTAuMTksMCwwLDAsLjk0LDEwLjM3LDEwNy44MywxMDcuODMsMCwwLDAsMi44MywxMy40MUE0Ni45MSw0Ni45MSwwLDAsMCwzMzQsMzQyLjY5aDE0LjQzYTMuNzMsMy43MywwLDAsMS0xLjItLjg2LDcuNDEsNy40MSwwLDAsMC0xLjItMXEtNy41Ni03LjMzLTEwLjEzLTIzLjRhNjUuMzksNjUuMzksMCwwLDEtMS4xMi0xMHEtLjA5LTQuMjEtLjA5LTQuNTJWMjQ5LjI1SDMyNC4yMVpNMzc0Ljg2LDM1M2EyOC40MSwyOC40MSwwLDAsMCw3LjkxLTYuOTJIMzM2LjQ5cTguNzgsMTAuNjEsMjMuMjMsMTAuNjFBMzAuMjksMzAuMjksMCwwLDAsMzc0Ljg2LDM1M1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNDMuMDEgLTI0NS43MSkiLz48cGF0aCBjbGFzcz0iYSIgZD0iTTQzNS41LDI0OS4yNXY0Ny4xMWgzNS43MnExLjg5LDAsMS44OSwxLjcyVjMxMXEwLDEuNzItMS44OSwxLjcySDQzNS41djQ0aDUzLjc2djMuNDNINDIwLjJxLTEuODcsMC0xLjg3LTEuNzFWMjQ3LjU0cTAtMS43MSwxLjg3LTEuNzJoNjkuMDZ2My40M1ptLTMuNjEsMGgtMTB2NDcuMTFoMTBabS0xMCw2MC4wNWgxMHYtOS41MWgtMTBabTEwLDMuNDNoLTEwdjQ0aDEwWm0zLjYxLTEyLjk1djkuNTFoMzR2LTkuNTFaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTQzLjAxIC0yNDUuNzEpIi8+PHBhdGggY2xhc3M9ImEiIGQ9Ik01ODkuMzksMzU3LjgxYTEuNSwxLjUsMCwwLDEtLjE3LDEuNTYsMi4yNSwyLjI1LDAsMCwxLTEuNTUuNjJINTczLjkzYTEuNTgsMS41OCwwLDAsMS0xLjcyLTEuMDlsLTIwLjQ0LTQ3LjU3YTcxLDcxLDAsMCwxLTE1LjExLDIuMzRxLTYsLjQ3LTEwLjY1LjM5YTY3LjM3LDY3LjM3LDAsMCwxLTctLjM5VjM2MGgtMy42MVYyNDguNDdhMS42NSwxLjY1LDAsMCwxLDEuNTUtMS43MnEuMzQsMCw1LjkzLS41NWExMDUuNDEsMTA1LjQxLDAsMCwxLDEzLjgzLS4yMyw4MC4zOSw4MC4zOSwwLDAsMSwxNy4zNSwyLjVBNDYuNTEsNDYuNTEsMCwwLDEsNTcwLjMzLDI1NnExMC44Miw4LjQyLDEwLjgyLDIzLjI0dC0xMSwyMy43MWExNi43OCwxNi43OCwwLDAsMS0yLjU4LDEuODdaTTUxOSwzMTAuNHExLjU1LjE2LDQuMzguMjN0Ni40NC4wOGwtMS4yLTU0LS4xNy0uMTZoLjE3bC0uMTctNy4zM3EtMy4yNy4xNi01LjY3LjMxdC0zLjc4LjMxWm00OC45MS01MS45NGE0NS42MSw0NS42MSwwLDAsMC0xMS01LjY5cS03LjQyLTIuODgtMjAuNTItMy4zNWExOC40NCwxOC40NCwwLDAsMC0yLjMzLS4xNmgtMi4xNWwuMTcsNi44NiwyMS45LDUxLjE2YTQ4LjYxLDQ4LjYxLDAsMCwwLDguMzYtMy4zNSw0MC45LDQwLjksMCwwLDAsNS42LTMuNTFxOS42NS03LjgsOS42Ni0yMS4yMVE1NzcuNTQsMjY1Ljk1LDU2Ny44OSwyNTguNDZaTTUzNi4zMiwzMTAuNHEzLjk1LS4zMSw3LjQ3LS44NnQ2LjYxLTEuMzNMNTMyLjIsMjY1Ljc5bDEsNDQuNzdhMTQuMTIsMTQuMTIsMCwwLDAsMS40Ni0uMDhDNTM1LjIsMzEwLjQyLDUzNS43NSwzMTAuNCw1MzYuMzIsMzEwLjRabTQ4Ljc4LDQ2LjMzLTIwLjYxLTUwLjA3YTY0LjczLDY0LjczLDAsMCwxLTkuMSwzLjc0bDE5Ljc1LDQ2LjMzWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE0My4wMSAtMjQ1LjcxKSIvPjxwYXRoIGNsYXNzPSJhIiBkPSJNNjEzLjQ0LDM0My45M2ExLjUyLDEuNTIsMCwwLDEsMS43MiwxLjcydjEyLjYzYTEuNTIsMS41MiwwLDAsMS0xLjcyLDEuNzJINTk5LjdxLTEuODksMC0xLjg5LTEuNzJWMzQ1LjY1cTAtMS43MSwxLjg5LTEuNzJabS0xLjg5LDMuMjhINjAxLjQxdjkuNTFoMTAuMTNaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTQzLjAxIC0yNDUuNzEpIi8+PHBhdGggY2xhc3M9ImEiIGQ9Ik02OTMsMzQzLjYycTEuNzIsMCwxLjcyLDEuNTd2MTMuMjNhMS41MywxLjUzLDAsMCwxLTEuNzIsMS43M0g2MjcuODZxLTEuODksMC0xLjg5LTEuNzFWMjQ3LjY5cTAtMS43MSwxLjg3LTEuNzJoMTMuNjFjMS4yNSwwLDEuODcuNTcsMS44NywxLjcxdjk1LjkzWm0tNTMuMjQtOTQuMzdINjI5LjU4djk0LjM3aDEwLjEzWm0wLDk3LjhINjI5LjU4djkuNjdoMTAuMTNabTUxLjM1LDBINjQzLjMydjkuNjdoNDcuNzVaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTQzLjAxIC0yNDUuNzEpIi8+PHBhdGggY2xhc3M9ImEiIGQ9Ik03MjksMjQ2cTEuODksMCwxLjg5LDEuNzJWMzU4LjQ0cTAsMS43Mi0xLjg5LDEuNzFINzE1LjQ2YTEuNTIsMS41MiwwLDAsMS0xLjcyLTEuNzFWMjQ3LjY5YTEuNTIsMS41MiwwLDAsMSwxLjcyLTEuNzJabS0xMS42OCwzLjI4djkuNTFoMTB2LTkuNTFabTEwLDEwNy40N1YyNjJoLTEwdjk0LjY4WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE0My4wMSAtMjQ1LjcxKSIvPjxwYXRoIGNsYXNzPSJhIiBkPSJNODI3LjExLDI0NS44MmMxLjI1LDAsMS44Ny41NywxLjg3LDEuNzJWMzU4LjI4cTAsMS43Mi0xLjg5LDEuNzJIODEzLjUzYTEuNTgsMS41OCwwLDAsMS0xLjcyLTEuMDlMNzcxLjQ1LDI1Ny4wNVYzNTguMjhjMCwxLjE1LS42MywxLjcyLTEuODcsMS43Mkg3NTYuMTRxLTEuODcsMC0xLjg3LTEuNzJWMjQ3LjU0cTAtMS43MSwxLjg5LTEuNzJoMTMuNTdhMS41OSwxLjU5LDAsMCwxLDEuNzIsMS4wOXYuMTZsNDAuMzYsMTAxLjdWMjQ3LjU0cTAtMS43MSwxLjg3LTEuNzJabS01OS4yNywzLjQzaC0xMFYzNTYuNTdoMTBabTU3LjU0LDBoLTEwVjM1Ni41N2gxMFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNDMuMDEgLTI0NS43MSkiLz48cGF0aCBjbGFzcz0iYSIgZD0iTTkyMS43MywzNTcuODFjLjM0LjQyLjI4Ljk0LS4xNywxLjU2YTEuNzMsMS43MywwLDAsMS0xLjU1Ljc4SDkwNi43OWExLjgsMS44LDAsMCwxLTEuNzItLjk0TDg3OSwzMDcuNDNsLTExLjM0LDIyLjN2MjguN2ExLjUyLDEuNTIsMCwwLDEtMS43MiwxLjcxSDg1Mi4zNGExLjUyLDEuNTIsMCwwLDEtMS43Mi0xLjcxVjI0Ny41NGExLjUyLDEuNTIsMCwwLDEsMS43Mi0xLjcyaDEzLjU3YTEuNTIsMS41MiwwLDAsMSwxLjcyLDEuNzJ2MjkuNjRMODc5LDI5OS40OGwyNS43Ni01MWExLjgsMS44LDAsMCwxLDEuNzItLjk0aDEzLjIyYTEuNzMsMS43MywwLDAsMSwxLjU1Ljc4LDEuNDksMS40OSwwLDAsMSwuMTcsMS41NmwtMjYuNDUsNTMuNVpNODY0LDM1Ni43MlYyNDguOTRoLTkuNzlWMzU2LjcyWm0xMi44OC01My4xOS05LjI3LTE4LjQxdjM2LjY1Wm00LjEyLDAsNSw5LjgzLDUtMTAtNS05LjgzWm03LTE0LDQuODEsMTAsMjQtNDguNjdoLTkuNDVabTI5LjIsNjcuMjMtMjQuMzktNDkuMjktNC44MSwxMEw5MDgsMzU2LjcyWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE0My4wMSAtMjQ1LjcxKSIvPjwvc3ZnPgo=">
        <div class="search">
          <mu-icon-menu :icon="icon" :autoWidth="true" id="searchIcon" :maxHeight="height" @change="changeSearchEngine" ref="menu" style="color: #ffffff" :anchorOrigin="{vertical: 'bottom',horizontal: 'left'}" :targetOrigin="{vertical: 'top',horizontal: 'left'}">
            <!--<div @mouseleave="onMouseOut" id="list">-->
            <mu-menu-item v-for="searchEngine in searchEngines" :title="searchEngine.title" :rightIcon="searchEngine.icon" :value="searchEngine.value" :key="searchEngine.value" />
            <!--</div>-->
          </mu-icon-menu>
          <mu-auto-complete id="input" label="搜索" v-model="searchString" labelFloat filter="noFilter" @keyup.enter="searchContent" :dataSource="autoComplete" @input="searchTextChange" @change="handleSearchChange" fullWidth :required="true" type="search" :inputClass="'input-text'" :maxHeight="height" :labelClass="'inputLabel'" :underlineClass="'searchUnderline'" name="search" />
          <mu-raised-button class="search-button" label="搜索" icon=":iconfont icon-search" primary @click="searchContent" />
        </div>
      </mu-col>
      <mu-col width="0" tablet="10" desktop="20"></mu-col>
    </mu-row>
  </div>
</template>

<script type="text/ecmascript-6">
import axios from 'axios'

export default {
  data: function () {
    return {
      searchString: '',
      autoComplete: []
    }
  },
  methods: {
    changeSearchEngine: function (val) {
      this.$store.commit('changeSearchEngine', val)
      if (this.searchString !== '') {
        this.searchContent()
      }
    },
    searchTextChange: function () {
      if (this.searchString === '' || !this.$store.state.user.settings.autoComplete) return
      axios.get(`/qsonhs.aspx?type=json&q=${this.searchString}`)
        .then((response) => {
          this.autoComplete = []
          response.data.AS.Results[0].Suggests.forEach((element) => {
            this.autoComplete.push(element.Txt)
          })
        }).catch((error) => {
          console.log(error)
        })
    },
    handleSearchChange: function (val) {
      let queryURL = (this.$store.state.device) ? (this.searchEngines[this.searchEngine].mobile) : (this.searchEngines[this.searchEngine].desktop)
      let queryString = encodeURIComponent(val)
      window.open(queryURL + queryString)
    },
    searchContent: function () {
      if (this.searchString === '') return
      window.open(this.url)
    },
    onMouseOut: function () {
      this.$refs.menu.handleClose()
    },
    onMouseEnter: function () {
      this.$refs.menu.handleOpen()
    }
  },
  computed: {
    url: function () {
      let queryURL = (this.$store.state.device) ? (this.searchEngines[this.searchEngine].mobile) : (this.searchEngines[this.searchEngine].desktop)
      let queryString = encodeURIComponent(this.searchString)
      return queryURL + queryString
    },
    searchEngine: function () {
      return this.$store.state.searchEngine
    },
    icon: function () {
      return this.$store.state.icon
    },
    searchEngines: function () {
      return this.$store.state.searchEngines
    },
    height: function () {
      return (this.$store.state.device) ? 150 : 250
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container
    width 100%
    height 100%
    text-align center
    padding-top 50px
  
  .search
    width 100%
    text-align center
  
  #input
    max-width 60vmin
    position relative
    bottom 4px
  
  .logo
    max-width 65vmin
    min-height 40vmin
  
  .search-button
    height 38.4px
</style>
