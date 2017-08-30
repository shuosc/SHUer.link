<template>
  <div class="links">
    <div class="container">
      <mu-paper class="link-paper" :zDepth="2">
        <div class="link-header">上大相关</div>
        <mu-raised-button backgroundColor="#1F437C" @click="goWebsite(websites.SHU)">
          <p>上大主页&nbsp;</p>
          <i class="iconfont icon-SHU"></i>
        </mu-raised-button>
        <mu-raised-button backgroundColor="#48BEA1" @click="goWebsite(websites.SHUOSC)">
          <p>开源社区&nbsp;</p>
          <i class="iconfont icon-SHUOSC"></i>
        </mu-raised-button>
        <mu-raised-button backgroundColor="#35495E" @click="goWebsite(websites.SHUhelper)">
          <p>SHUhelper</p>
        </mu-raised-button>
        <mu-raised-button @click="goWebsite(websites.SHUmail)">
          <p>上大邮箱&nbsp;</p>
          <i class="iconfont icon-mail"></i>
        </mu-raised-button>
        <mu-raised-button @click="goWebsite(websites.SHUlib)">
          <p>图书馆&nbsp;</p>
          <i class="iconfont icon-library"></i>
        </mu-raised-button>
        <mu-raised-button @click="goWebsite(websites.SHUlehu)">
          <p>乐乎论坛&nbsp;</p>
        </mu-raised-button>
      </mu-paper>
      <mu-paper class="link-paper" :zDepth="2">
        <div class="link-header">社交通讯</div>
        <mu-raised-button backgroundColor="" @click="goWebsite(websites.Wechat)">
          <p>微信Web</p>
        </mu-raised-button>
        <mu-raised-button backgroundColor="" @click="goWebsite(websites.Weibo)">
          <p>微&nbsp;博&nbsp;</p>
        </mu-raised-button>
        <mu-raised-button backgroundColor="" @click="goWebsite(websites.Tieba)">
          <p>百度贴吧</p>
        </mu-raised-button>
        <mu-raised-button backgroundColor="" @click="goWebsite(websites.Zhihu)">
          <p>知&nbsp;乎&nbsp;</p>
        </mu-raised-button>
        <mu-raised-button backgroundColor="" @click="goWebsite(websites.Douban)">
          <p>豆&nbsp;瓣&nbsp;</p>
        </mu-raised-button>
        <mu-raised-button backgroundColor="" @click="goWebsite(websites.Facebook)">
          <p>Facebook&nbsp;</p>
        </mu-raised-button>
        <mu-raised-button backgroundColor="" @click="goWebsite(websites.Instagram)">
          <p>Instagram&nbsp;</p>
        </mu-raised-button>
        <mu-raised-button backgroundColor="" @click="goWebsite(websites.Quora)">
          <p>Quora&nbsp;</p>
        </mu-raised-button>
        <mu-raised-button backgroundColor="" @click="goWebsite(websites.Googleplus)">
          <p>Google+&nbsp;</p>
        </mu-raised-button>
        <mu-raised-button backgroundColor="" @click="goWebsite(websites.Twitter)">
          <p>Twitter&nbsp;</p>
        </mu-raised-button>
      </mu-paper>
      <mu-paper class="link-paper" :zDepth="2">
        <div class="link-header">购&nbsp;物</div>
        <mu-raised-button href="https://wx.qq.com/" backgroundColor="">
          <p>淘&nbsp;宝&nbsp;</p>
        </mu-raised-button>
        <mu-raised-button href="https://weibo.com/" backgroundColor="">
          <p>京&nbsp;东&nbsp;</p>
        </mu-raised-button>
        <mu-raised-button href="https://www.shuhelper.cn/" backgroundColor="">
          <p>亚马逊&nbsp;</p>
        </mu-raised-button>
        <mu-raised-button href="http://newmail.shu.edu.cn/">
          <p>当&nbsp;当&nbsp;</p>
        </mu-raised-button>
        <mu-raised-button href="http://www.lib.shu.edu.cn/">
          <p>唯品会&nbsp;</p>
        </mu-raised-button>
      </mu-paper>
      <mu-paper class="link-paper" :zDepth="2">
        <div class="link-header">学&nbsp;习</div>
        <mu-raised-button href="https://wx.qq.com/" backgroundColor="">
          <p>中国大学MOOC</p>
        </mu-raised-button>
        <mu-raised-button href="https://weibo.com/" backgroundColor="">
          <p>网易公开课&nbsp;</p>
        </mu-raised-button>
        <mu-raised-button href="https://www.shuhelper.cn/" backgroundColor="">
          <p>Coursera&nbsp;</p>
        </mu-raised-button>
        <mu-raised-button href="http://newmail.shu.edu.cn/">
          <p>edX&nbsp;</p>
        </mu-raised-button>
        <mu-raised-button href="http://www.imooc.com/">
          <p>慕课网&nbsp;</p>
        </mu-raised-button>
        <mu-raised-button href="https://study.163.com/">
          <p>网易云课堂</p>
        </mu-raised-button>
      </mu-paper>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'links',
    data () {
      return {
        websites: {
          SHU: {
            desktop: 'http://www.shu.edu.cn/',
            mobile: 'http://www.shu.edu.cn/Default.aspx?tabid=10470'
          },
          SHUOSC: {
            desktop: 'https://osc.shu.edu.cn/',
            mobile: 'https://osc.shu.edu.cn/'
          },
          SHUhelper: {
            desktop: 'https://www.shuhelper.cn',
            mobile: 'https://www.shuhelper.cn'
          },
          SHUmail: {
            desktop: 'http://newmail.shu.edu.cn/',
            mobile: 'http://newmail.shu.edu.cn/coremail/xphone/index.jsp'
          },
          SHUlib: {
            desktop: 'http://www.lib.shu.edu.cn/',
            mobile: 'http://www.lib.shu.edu.cn/'
          },
          SHUlehu: {
            desktop: 'http://www.lehu.shu.edu.cn/',
            mobile: 'http://www.lehu.shu.edu.cn/'
          },
          Wechat: {
            desktop: 'https://wx.qq.com/',
            mobile: 'https://wx.qq.com/'
          },
          Weibo: {
            desktop: 'http://weibo.com/',
            mobile: 'http://weibo.com/'
          },
          Tieba: {
            desktop: 'https://tieba.baidu.com',
            mobile: 'https://tieba.baidu.com/'
          },
          Zhihu: {
            desktop: 'https://www.zhihu.com/',
            mobile: 'https://www.zhihu.com/'
          },
          Douban: {
            desktop: 'https://www.douban.com/',
            mobile: 'https://m.douban.com/'
          },
          Facebook: {
            desktop: 'https://www.facebook.com/',
            mobile: 'https://m.facebook.com/'
          },
          Instagram: {
            desktop: 'https://www.instagram.com/',
            mobile: 'https://www.instagram.com/'
          },
          Quora: {
            desktop: 'https://www.quora.com/',
            mobile: 'https://www.quora.com/'
          },
          Googleplus: {
            desktop: 'https://plus.google.com/',
            mobile: 'https://plus.google.com/'
          },
          Twitter: {
            desktop: 'https://twitter.com/',
            mobile: 'https://mobile.twitter.com/'
          }
        }
      }
    },
    methods: {
      goWebsite: function (site) {
        window.location.href = (this.$store.state.device) ? site.mobile : site.desktop
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .container
    display flex
    flex-direction row
    justify-content center
    align-items center
    flex-wrap wrap
    height 100%
  
  .link-paper
    padding-top 2vmin
    padding-bottom 1vmin
    margin 3vmin 2vmin 2vmin 2vmin
    display inline-block
    width 60vh
    min-height 34vh
    text-align center
    background-color rgba(238, 238, 238, 0.5)
  
  .link-header
    margin 0
    padding 2vh
    font-size 1.5rem
  
  .mu-raised-button
    margin-bottom 2vmin
    margin-left 1vmin
    margin-right 1vmin
    text-transform none
    opacity 0.8
    min-width 15vh

</style>
