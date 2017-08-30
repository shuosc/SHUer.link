<template>
  <div class="container">
    <div class="pure-g">
      <div class="pure-u-1-24 pure-u-md-1-5"></div>
      <div class="pure-u-22-24 pure-u-md-3-5">
        <img class="logo"
             src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA3NzguOTQgMTE0LjYiPjxkZWZzPjxzdHlsZT4uYXtmaWxsOiMwMjAyMDI7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5sb2dvPC90aXRsZT48cGF0aCBjbGFzcz0iYSIgZD0iTTE5OS44NiwzMDIuNnExMC4zMSw4LjI3LDEwLjMxLDIyLjc3LDAsMTQuODItMTAuODIsMjMuNzFhNDUuODIsNDUuODIsMCwwLDEtNy4zLDQuNTIsNTAuNjcsNTAuNjcsMCwwLDEtOSwzLjQzLDEwMC40NiwxMDAuNDYsMCwwLDEtMTcuMzUsMi44MSwzNC41MSwzNC41MSwwLDAsMS00LjQ3LjMxaC00cS01LDAtOC0uMjN0LTMuMzUtLjIzYTEuNjUsMS42NSwwLDAsMS0xLjU1LTEuNzJ2LTExLjdxMC0xLjU2LDEuODktMS41NkgxOTlxNy41Ni03LjY2LDcuNTYtMTkuMzdhMjguMDksMjguMDksMCwwLDAtMi40LTExLjcyLDMyLjIzLDMyLjIzLDAsMCwxLTMuNTIuMTZoLTQuNzJxLTIuOTIsMC02LjE4LS4xNnQtNi44Ny0uNDdxLTE5LjQxLTIuMzQtMjkuMzctMTAuNzhRMTQzLDI5My43OSwxNDMsMjc5LjFxMC0xNSwxMC44Mi0yMy40NGE0NC43Miw0NC43MiwwLDAsMSwxNi4zMi03LjVxMy45NS0uOTQsOC4yNC0xLjU2YTgxLjYsODEuNiwwLDAsMSw5LjEtLjc4LDEwNC43MiwxMDQuNzIsMCwwLDEsMTMuODMuMjRxNS41OC41NSw1LjkzLjU1LDEuNTUuMzEsMS41NSwxLjU3djEzLjA3cTAsMS43My0xLjg5LDEuNzNIMTUxLjZhMjYuNDQsMjYuNDQsMCwwLDAtNSwxNi4yMiwyOCwyOCwwLDAsMCwzLjA5LDEzLjQxcTMuNjEtLjMxLDkuMzYtLjU1YTgwLjA5LDgwLjA5LDAsMCwxLDEyLjQ1LjU1UTE5MC4yNCwyOTQuNDksMTk5Ljg2LDMwMi42Wm0tMzQuMzUsNTQuMTJxMy4yNi0uMTUsNy0uN2E2OC41MSw2OC41MSwwLDAsMCw3LjY0LTEuNTYsNTkuMzEsNTkuMzEsMCwwLDAsNy42NC0yLjU3LDQwLjEyLDQwLjEyLDAsMCwwLDctMy43NEgxNDh2OC40MnEyLjIzLjMxLDYuODcuNDdBOTYuNDQsOTYuNDQsMCwwLDAsMTY1LjUxLDM1Ni43MlptMTcuODYtNDYuNzlxNS44NC42MiwxMC44Mi43YTc2LDc2LDAsMCwwLDguMjQtLjIzLDIxLjEsMjEuMSwwLDAsMC01LTUuMywzNS4yNiwzNS4yNiwwLDAsMC0xMS4wOC02LDY0LjE1LDY0LjE1LDAsMCwwLTEyLjcxLTIuODksMTAyLjUxLDEwMi41MSwwLDAsMC0xMi4yOC0uNzhxLTUuODQsMC05LjYyLjMxYTIxLjI0LDIxLjI0LDAsMCwwLDQuMTIsNC4yMVExNjUuMzQsMzA3LjksMTgzLjM3LDMwOS45M1pNMTU2LjI0LDI1OC4zYTExLjY2LDExLjY2LDAsMCwxLTEuNTUsMS4yNWg1MC41di05LjY3cS0yLjIzLS4zMS03LS42MmE4OS40NCw4OS40NCwwLDAsMC0xMC41NiwwcS0zLjYxLjE2LTcuNzMuNjJhNjAuMzUsNjAuMzUsMCwwLDAtOC4zMywxLjU2LDYxLjc4LDYxLjc4LDAsMCwwLTguMTYsMi43M0EzMS45MywzMS45MywwLDAsMCwxNTYuMjQsMjU4LjNaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTQzLjAxIC0yNDUuNzEpIi8+PHBhdGggY2xhc3M9ImEiIGQ9Ik0yOTguNjQsMjQ1LjgycTEuODcsMCwxLjg3LDEuNzJWMzU4LjZxMCwxLjcyLTEuODcsMS43MUgyODUuMnEtMS44NywwLTEuODctMS43MVYzMTIuNzRIMjQ3LjI2VjM1OC42YTEuNTIsMS41MiwwLDAsMS0xLjcyLDEuNzFIMjMxLjgxYTEuNTIsMS41MiwwLDAsMS0xLjcyLTEuNzFWMjQ3LjU0YTEuNTIsMS41MiwwLDAsMSwxLjcyLTEuNzJoMTMuNzRhMS41MiwxLjUyLDAsMCwxLDEuNzIsMS43MXY0OC44M2gzNi4wN1YyNDcuNTNxMC0xLjcxLDEuODctMS43MVptLTY0Ljk0LDMuNDN2NDcuMTFoMTBWMjQ5LjI1Wm0wLDUwLjU0djkuNTFoMTB2LTkuNTFabTEwLDEyLjk1aC0xMHY0NC4xNGgxMFptMzkuNjgtMy40M3YtOS41MUgyNDcuMjZ2OS41MVptMy42MS02MC4wNXY2MC4wNWgxMFYyNDkuMjVabTEwLDEwNy42M1YzMTIuNzRoLTEwdjQ0LjE0WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE0My4wMSAtMjQ1LjcxKSIvPjxwYXRoIGNsYXNzPSJhIiBkPSJNMzk3LDMwMWEzOC4zNiwzOC4zNiwwLDAsMSwuMjYsNC45MSw4NC4wOCw4NC4wOCwwLDAsMS0uNiwxMC41M3EtMS43MiwxNy42My04LjkzLDI4LjctOS43OSwxNS0yOCwxNS0xOCwwLTI4LjM0LTE0LjgyYTU2LjE5LDU2LjE5LDAsMCwxLTYuMS0xMi42Myw4Mi43MSw4Mi43MSwwLDAsMS0zLjY5LTE2LjA3LDEwMS40OCwxMDEuNDgsMCwwLDEtLjk0LTEwLjg0cS0uMDktNC4yOS0uMDktNC43NnYtNTMuNXEwLTEuNzEsMS44Ny0xLjcyaDEzLjk1cTEuODcsMCwxLjg3LDEuNzJ2NTUuNTNhMTA4LjM3LDEwOC4zNywwLDAsMCwxLDEzLjg4LDYyLjUzLDYyLjUzLDAsMCwwLDMsMTEuNjIsMjQuODYsMjQuODYsMCwwLDAsNi4yOSw5LjkxLDE0Ljg5LDE0Ljg5LDAsMCwwLDEwLjg1LDQuMjFIMzg1YTQ2LjIxLDQ2LjIxLDAsMCwwLDUuNi0xMy4zNEE5My40OCw5My40OCwwLDAsMCwzOTMsMzE1LjkzYTkwLjQ4LDkwLjQ4LDAsMCwwLC41Mi0xMC4zN3EtLjA5LTQuMjEtLjA5LTQuMzdWMjQ1LjgySDM5N1ptLTcyLjgyLjE2cTAsLjE2LjA5LDQuMzdhOTAuMTksOTAuMTksMCwwLDAsLjk0LDEwLjM3LDEwNy44MywxMDcuODMsMCwwLDAsMi44MywxMy40MUE0Ni45MSw0Ni45MSwwLDAsMCwzMzQsMzQyLjY5aDE0LjQzYTMuNzMsMy43MywwLDAsMS0xLjItLjg2LDcuNDEsNy40MSwwLDAsMC0xLjItMXEtNy41Ni03LjMzLTEwLjEzLTIzLjRhNjUuMzksNjUuMzksMCwwLDEtMS4xMi0xMHEtLjA5LTQuMjEtLjA5LTQuNTJWMjQ5LjI1SDMyNC4yMVpNMzc0Ljg2LDM1M2EyOC40MSwyOC40MSwwLDAsMCw3LjkxLTYuOTJIMzM2LjQ5cTguNzgsMTAuNjEsMjMuMjMsMTAuNjFBMzAuMjksMzAuMjksMCwwLDAsMzc0Ljg2LDM1M1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNDMuMDEgLTI0NS43MSkiLz48cGF0aCBjbGFzcz0iYSIgZD0iTTQzNS41LDI0OS4yNXY0Ny4xMWgzNS43MnExLjg5LDAsMS44OSwxLjcyVjMxMXEwLDEuNzItMS44OSwxLjcySDQzNS41djQ0aDUzLjc2djMuNDNINDIwLjJxLTEuODcsMC0xLjg3LTEuNzFWMjQ3LjU0cTAtMS43MSwxLjg3LTEuNzJoNjkuMDZ2My40M1ptLTMuNjEsMGgtMTB2NDcuMTFoMTBabS0xMCw2MC4wNWgxMHYtOS41MWgtMTBabTEwLDMuNDNoLTEwdjQ0aDEwWm0zLjYxLTEyLjk1djkuNTFoMzR2LTkuNTFaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTQzLjAxIC0yNDUuNzEpIi8+PHBhdGggY2xhc3M9ImEiIGQ9Ik01ODkuMzksMzU3LjgxYTEuNSwxLjUsMCwwLDEtLjE3LDEuNTYsMi4yNSwyLjI1LDAsMCwxLTEuNTUuNjJINTczLjkzYTEuNTgsMS41OCwwLDAsMS0xLjcyLTEuMDlsLTIwLjQ0LTQ3LjU3YTcxLDcxLDAsMCwxLTE1LjExLDIuMzRxLTYsLjQ3LTEwLjY1LjM5YTY3LjM3LDY3LjM3LDAsMCwxLTctLjM5VjM2MGgtMy42MVYyNDguNDdhMS42NSwxLjY1LDAsMCwxLDEuNTUtMS43MnEuMzQsMCw1LjkzLS41NWExMDUuNDEsMTA1LjQxLDAsMCwxLDEzLjgzLS4yMyw4MC4zOSw4MC4zOSwwLDAsMSwxNy4zNSwyLjVBNDYuNTEsNDYuNTEsMCwwLDEsNTcwLjMzLDI1NnExMC44Miw4LjQyLDEwLjgyLDIzLjI0dC0xMSwyMy43MWExNi43OCwxNi43OCwwLDAsMS0yLjU4LDEuODdaTTUxOSwzMTAuNHExLjU1LjE2LDQuMzguMjN0Ni40NC4wOGwtMS4yLTU0LS4xNy0uMTZoLjE3bC0uMTctNy4zM3EtMy4yNy4xNi01LjY3LjMxdC0zLjc4LjMxWm00OC45MS01MS45NGE0NS42MSw0NS42MSwwLDAsMC0xMS01LjY5cS03LjQyLTIuODgtMjAuNTItMy4zNWExOC40NCwxOC40NCwwLDAsMC0yLjMzLS4xNmgtMi4xNWwuMTcsNi44NiwyMS45LDUxLjE2YTQ4LjYxLDQ4LjYxLDAsMCwwLDguMzYtMy4zNSw0MC45LDQwLjksMCwwLDAsNS42LTMuNTFxOS42NS03LjgsOS42Ni0yMS4yMVE1NzcuNTQsMjY1Ljk1LDU2Ny44OSwyNTguNDZaTTUzNi4zMiwzMTAuNHEzLjk1LS4zMSw3LjQ3LS44NnQ2LjYxLTEuMzNMNTMyLjIsMjY1Ljc5bDEsNDQuNzdhMTQuMTIsMTQuMTIsMCwwLDAsMS40Ni0uMDhDNTM1LjIsMzEwLjQyLDUzNS43NSwzMTAuNCw1MzYuMzIsMzEwLjRabTQ4Ljc4LDQ2LjMzLTIwLjYxLTUwLjA3YTY0LjczLDY0LjczLDAsMCwxLTkuMSwzLjc0bDE5Ljc1LDQ2LjMzWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE0My4wMSAtMjQ1LjcxKSIvPjxwYXRoIGNsYXNzPSJhIiBkPSJNNjEzLjQ0LDM0My45M2ExLjUyLDEuNTIsMCwwLDEsMS43MiwxLjcydjEyLjYzYTEuNTIsMS41MiwwLDAsMS0xLjcyLDEuNzJINTk5LjdxLTEuODksMC0xLjg5LTEuNzJWMzQ1LjY1cTAtMS43MSwxLjg5LTEuNzJabS0xLjg5LDMuMjhINjAxLjQxdjkuNTFoMTAuMTNaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTQzLjAxIC0yNDUuNzEpIi8+PHBhdGggY2xhc3M9ImEiIGQ9Ik02OTMsMzQzLjYycTEuNzIsMCwxLjcyLDEuNTd2MTMuMjNhMS41MywxLjUzLDAsMCwxLTEuNzIsMS43M0g2MjcuODZxLTEuODksMC0xLjg5LTEuNzFWMjQ3LjY5cTAtMS43MSwxLjg3LTEuNzJoMTMuNjFjMS4yNSwwLDEuODcuNTcsMS44NywxLjcxdjk1LjkzWm0tNTMuMjQtOTQuMzdINjI5LjU4djk0LjM3aDEwLjEzWm0wLDk3LjhINjI5LjU4djkuNjdoMTAuMTNabTUxLjM1LDBINjQzLjMydjkuNjdoNDcuNzVaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTQzLjAxIC0yNDUuNzEpIi8+PHBhdGggY2xhc3M9ImEiIGQ9Ik03MjksMjQ2cTEuODksMCwxLjg5LDEuNzJWMzU4LjQ0cTAsMS43Mi0xLjg5LDEuNzFINzE1LjQ2YTEuNTIsMS41MiwwLDAsMS0xLjcyLTEuNzFWMjQ3LjY5YTEuNTIsMS41MiwwLDAsMSwxLjcyLTEuNzJabS0xMS42OCwzLjI4djkuNTFoMTB2LTkuNTFabTEwLDEwNy40N1YyNjJoLTEwdjk0LjY4WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE0My4wMSAtMjQ1LjcxKSIvPjxwYXRoIGNsYXNzPSJhIiBkPSJNODI3LjExLDI0NS44MmMxLjI1LDAsMS44Ny41NywxLjg3LDEuNzJWMzU4LjI4cTAsMS43Mi0xLjg5LDEuNzJIODEzLjUzYTEuNTgsMS41OCwwLDAsMS0xLjcyLTEuMDlMNzcxLjQ1LDI1Ny4wNVYzNTguMjhjMCwxLjE1LS42MywxLjcyLTEuODcsMS43Mkg3NTYuMTRxLTEuODcsMC0xLjg3LTEuNzJWMjQ3LjU0cTAtMS43MSwxLjg5LTEuNzJoMTMuNTdhMS41OSwxLjU5LDAsMCwxLDEuNzIsMS4wOXYuMTZsNDAuMzYsMTAxLjdWMjQ3LjU0cTAtMS43MSwxLjg3LTEuNzJabS01OS4yNywzLjQzaC0xMFYzNTYuNTdoMTBabTU3LjU0LDBoLTEwVjM1Ni41N2gxMFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNDMuMDEgLTI0NS43MSkiLz48cGF0aCBjbGFzcz0iYSIgZD0iTTkyMS43MywzNTcuODFjLjM0LjQyLjI4Ljk0LS4xNywxLjU2YTEuNzMsMS43MywwLDAsMS0xLjU1Ljc4SDkwNi43OWExLjgsMS44LDAsMCwxLTEuNzItLjk0TDg3OSwzMDcuNDNsLTExLjM0LDIyLjN2MjguN2ExLjUyLDEuNTIsMCwwLDEtMS43MiwxLjcxSDg1Mi4zNGExLjUyLDEuNTIsMCwwLDEtMS43Mi0xLjcxVjI0Ny41NGExLjUyLDEuNTIsMCwwLDEsMS43Mi0xLjcyaDEzLjU3YTEuNTIsMS41MiwwLDAsMSwxLjcyLDEuNzJ2MjkuNjRMODc5LDI5OS40OGwyNS43Ni01MWExLjgsMS44LDAsMCwxLDEuNzItLjk0aDEzLjIyYTEuNzMsMS43MywwLDAsMSwxLjU1Ljc4LDEuNDksMS40OSwwLDAsMSwuMTcsMS41NmwtMjYuNDUsNTMuNVpNODY0LDM1Ni43MlYyNDguOTRoLTkuNzlWMzU2LjcyWm0xMi44OC01My4xOS05LjI3LTE4LjQxdjM2LjY1Wm00LjEyLDAsNSw5LjgzLDUtMTAtNS05LjgzWm03LTE0LDQuODEsMTAsMjQtNDguNjdoLTkuNDVabTI5LjIsNjcuMjMtMjQuMzktNDkuMjktNC44MSwxMEw5MDgsMzU2LjcyWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE0My4wMSAtMjQ1LjcxKSIvPjwvc3ZnPg==">
        <div class="search">
          <mu-icon :value="icon" />
          <mu-icon-menu icon=":iconfont icon-more" :autoWidth="true" :maxHeight="300" @change="changeSearchEngine">
            <mu-menu-item title="谷歌" rightIcon=":iconfont icon-Google" value="Google" />
            <mu-menu-item title="必应" rightIcon=":iconfont icon-Bing" value="Bing" />
            <mu-menu-item title="百度" rightIcon=":iconfont icon-Baidu" value="Baidu" />
            <mu-menu-item title="知网" rightIcon=":iconfont icon-CNKI" value="CNKI" />
            <mu-menu-item title="维基百科" rightIcon=":iconfont icon-Wikipedia" value="Wikipedia" />
            <mu-menu-item title="谷歌学术" rightIcon=":iconfont icon-GoogleScholar" value="GoogleScholar" />
            <mu-menu-item title="知乎" rightIcon=":iconfont icon-Zhihu" value="Zhihu" />
            <mu-menu-item title="豆瓣" rightIcon=":iconfont icon-Douban" value="Douban" />
            <mu-menu-item title="高德地图" rightIcon=":iconfont icon-Map" value="Map" />
            <mu-menu-item title="虾米音乐" rightIcon=":iconfont icon-Music" value="Music" />
            <mu-menu-item title="哔哩哔哩" rightIcon=":iconfont icon-Bilibili" value="Bilibili" />
            <mu-menu-item title="微信" rightIcon=":iconfont icon-Wechat" value="Wechat" />
            <mu-menu-item title="网盘" rightIcon=":iconfont icon-Cloud" value="Cloud" />
            <mu-menu-item title="淘宝" rightIcon=":iconfont icon-Taobao" value="Taobao" />
            <mu-menu-item title="京东" rightIcon=":iconfont icon-JD" value="JD" />
            <mu-menu-item title="微博" rightIcon=":iconfont icon-Weibo" value="Weibo" />
            <mu-menu-item title="GitHub" rightIcon=":iconfont icon-GitHub" value="GitHub" />
            <mu-menu-item title="Stack Overflow" rightIcon=":iconfont icon-StackOverflow" value="StackOverflow" />
          </mu-icon-menu>
          
          <mu-text-field hintText="请输入搜索内容" label="搜索" v-model="searchString" @keyup.native.enter="searchContent"
                         labelFloat fullWidth />
        </div>
        <mu-raised-button class="search-button" label="搜索" icon=":iconfont icon-search" primary @click="searchContent" />
      </div>
      <div class="pure-u-1-24 pure-u-md-1-5"></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data: function () {
      return {
        device: '',
        searchEngines: {
          Google: {
            desktop: 'https://g.shuosc.org/search?newwindow=1&hl=zh-CN&q=',
            mobile: 'https://g.shuosc.org/search?newwindow=1&hl=zh-CN&q='
          },
          Bing: {
            desktop: 'https://www.bing.com/search?q=',
            mobile: 'https://www.bing.com/search?q='
          },
          Baidu: {
            desktop: 'https://www.baidu.com/s?wd=',
            mobile: 'https://www.baidu.com/s?wd='
          },
          Wikipedia: {
            desktop: 'https://zh.m.wikipedia.org/w/index.php?search=',
            mobile: 'https://zh.m.wikipedia.org/w/index.php?search='
          },
          CNKI: {
            desktop: 'http://epub.cnki.net/kns/brief/default_result.aspx?txt_1_sel=FT%24%25%3D%7C&txt_1_special1=%25&txt_extension=&expertvalue=&cjfdcode=%C2%A4tid=txt_1_value1&dbJson=coreJson&dbPrefix=SCDB&db_opt=CJFQ%2CCJFN%2CCDFD%2CCMFD%2CCPFD%2CIPFD%2CCCND%2CCCJD%2CHBRD&db_value=&hidTabChange=&hidDivIDS=&singleDB=SCDB&db_codes=&singleDBName=&againConfigJson=false&action=scdbsearch&ua=1.11&txt_1_value1=',
            mobile: 'http://wap.cnki.net/touch/web/Article/Search/?kw='
          },
          GoogleScholar: {
            desktop: 'https://scholar.google.com/scholar?hl=zh-CN&q=',
            mobile: 'https://scholar.google.com/scholar?hl=zh-CN&q='
          },
          Zhihu: {
            desktop: 'https://www.zhihu.com/search?type=content&q=',
            mobile: 'https://www.zhihu.com/search?type=content&q='
          },
          Map: {
            desktop: 'https://uri.amap.com/search?keyword=',
            mobile: 'https://m.amap.com/search/mapview/keywords='
          },
          Music: {
            desktop: 'http://www.xiami.com/search?key=',
            mobile: 'https://h.xiami.com/index.html?f=&from=#!/search/result/?key='
          },
          Douban: {
            desktop: 'https://www.douban.com/search?q=',
            mobile: 'https://m.douban.com/search/?query='
          },
          Wechat: {
            desktop: 'http://weixin.sogou.com/weixin?type=2&query=',
            mobile: 'http://weixin.sogou.com/weixinwap?type=2&query='
          },
          Cloud: {
            desktop: 'http://pansou.com/?q=',
            mobile: 'http://m.pansou.com/?q='
          },
          Taobao: {
            desktop: 'https://s.taobao.com/search?q=',
            mobile: 'https://s.m.taobao.com/h5?q='
          },
          Weibo: {
            desktop: 'https://s.weibo.com/weibo/',
            mobile: 'https://s.weibo.com/weibo/'
          },
          JD: {
            desktop: 'https://search.jd.com/Search?keyword=',
            mobile: 'https://so.m.jd.com/ware/search.action?keyword='
          },
          Bilibili: {
            desktop: 'https://search.bilibili.com/all?keyword=',
            mobile: 'https://m.bilibili.com/search.html?keyword='
          },
          GitHub: {
            desktop: 'https://github.com/search?q=',
            mobile: 'https://github.com/search?q='
          },
          StackOverflow: {
            desktop: 'https://stackoverflow.com/search?q=',
            mobile: 'https://stackoverflow.com/search?q='
          }
        },
        searchEngine: 'Google',
        icon: ':iconfont icon-Google',
        searchString: ''
      }
    },
    mounted: function () {
      /* eslint-disable */
      this.device = device.mobile()
    },
    methods: {
      changeSearchEngine: function (val) {
        this.searchEngine = val
        this.icon = ':iconfont icon-' + val
      },
      searchContent: function () {
        window.location.href = this.url
        this.searchString = ''
      }
    },
    computed: {
      url: function () {
        let queryString = this.searchEngines
        let queryURL = (this.device) ? (queryString[this.searchEngine].mobile) : (queryString[this.searchEngine].desktop)
        return queryURL + this.searchString
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .container
    text-align center
  
  .search
    display flex
    flex-direction row
    flex-wrap nowrap
    align-items center
    justify-content center
  
  .mu-text-field
    max-width 60vmin
  
  .logo
    max-width 65vmin
    min-height 40vmin
  
  .search-button
    margin 10vmin

</style>
