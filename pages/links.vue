<template>
  <div class="links">
    <div class="container">
      <mu-paper class="link-paper paper-1" :zDepth="2">
        <div class="link-header">上&nbsp;大</div>
        <mu-raised-button backgroundColor="#1F437C" @click="goWebsite(websites.SHU)">
          <p>上大主页&nbsp;</p>
          <i class="iconfont icon-SHU"></i>
        </mu-raised-button>
        <mu-raised-button backgroundColor="#03A9F4" @click="goWebsite(websites.SHUhelper)">
          <p>SHUhelper</p>
        </mu-raised-button>
        <mu-raised-button backgroundColor="#48BEA1" @click="goWebsite(websites.SHUOSC)">
          <p>开源社区&nbsp;</p>
          <i class="iconfont icon-SHUOSC"></i>
        </mu-raised-button>
        <mu-raised-button backgroundColor="#3388FF" @click="goWebsite(websites.SHUmail)">
          <p>上大邮箱&nbsp;</p>
          <i class="iconfont icon-mail"></i>
        </mu-raised-button>
        <mu-raised-button backgroundColor="#3663A1" @click="goWebsite(websites.SHUlib)">
          <p>图书馆&nbsp;</p>
          <i class="iconfont icon-library"></i>
        </mu-raised-button>
        <mu-raised-button backgroundColor="#FF9619" @click="goWebsite(websites.SHUlehu)">
          <p>乐乎论坛</p>
        </mu-raised-button>
      </mu-paper>
      <mu-paper class="link-paper" :zDepth="2">
        <div class="link-header">学&nbsp;习</div>
        <mu-raised-button backgroundColor="#115FAD" @click="goWebsite(websites.CNKI)">
          <p>知&nbsp;网&nbsp;</p>
          <i class="iconfont icon-CNKI"></i>
        </mu-raised-button>
        <mu-raised-button backgroundColor="#FBBC05" @click="goWebsite(websites.googleScholar)">
          <p>谷歌学术</p>
          <i class="iconfont icon-GoogleScholar"></i>
        </mu-raised-button>
        <mu-raised-button backgroundColor="#51A128" @click="goWebsite(websites.ChinaMOOC)">
          <p>中国大学MOOC&nbsp;</p>
        </mu-raised-button>
        <mu-raised-button backgroundColor="#286A46" @click="goWebsite(websites.NeteaseOpenCourse)">
          <p>网易公开课&nbsp;</p>
          <i class="iconfont icon-gongkaike"></i>
        </mu-raised-button>
        <mu-raised-button backgroundColor="#4A89DC" @click="goWebsite(websites.Coursera)">
          <p>Coursera&nbsp;</p>
          <i class="iconfont icon-coursera"></i>
        </mu-raised-button>
        <mu-raised-button backgroundColor="#B72667" @click="goWebsite(websites.edX)">
          <p>edX&nbsp;</p>
        </mu-raised-button>
        <mu-raised-button backgroundColor="#F01414" @click="goWebsite(websites.immoc)">
          <p>慕课网&nbsp;</p>
          <i class="iconfont icon-mukewang"></i>
        </mu-raised-button>
        <mu-raised-button backgroundColor="#309225" @click="goWebsite(websites.NeteaseStudy)">
          <p>网易云课堂</p>
        </mu-raised-button>
        <mu-raised-button backgroundColor="#E62B1E" @click="goWebsite(websites.TED)">
          <p>TED&nbsp;</p>
        </mu-raised-button>
        <mu-raised-button backgroundColor="#B30838" @click="goWebsite(websites.MITOCW)">
          <p>MIT OCW</p>
        </mu-raised-button>
        <mu-raised-button backgroundColor="#24292E" @click="goWebsite(websites.GitHub)">
          <p>GitHub&nbsp;</p>
          <i class="iconfont icon-GitHub"></i>
        </mu-raised-button>
        <mu-raised-button backgroundColor="#F48024" @click="goWebsite(websites.StackOverflow)">
          <p>Stack Overflow&nbsp;</p>
          <i class="iconfont icon-StackOverflow"></i>
        </mu-raised-button>
      </mu-paper>
      <mu-paper class="link-paper" :zDepth="2">
        <div class="link-header">社&nbsp;交</div>
        <mu-raised-button backgroundColor="#41990C" @click="goWebsite(websites.Wechat)">
          <p>Web 微信&nbsp;</p>
          <i class="iconfont icon-weixin"></i>
        </mu-raised-button>
        <mu-raised-button backgroundColor="#65B4E0" @click="goWebsite(websites.QQ)">
          <p>Web QQ&nbsp;</p>
          <i class="iconfont icon-qq"></i>
        </mu-raised-button>
        <mu-raised-button backgroundColor="#FF8140" @click="goWebsite(websites.Weibo)">
          <p>微&nbsp;博&nbsp;</p>
          <i class="iconfont icon-Weibo"></i>
        </mu-raised-button>
        <mu-raised-button backgroundColor="#1D11D8" @click="goWebsite(websites.Tieba)">
          <p>百度贴吧&nbsp;</p>
          <i class="iconfont icon-tieba"></i>
        </mu-raised-button>
        <mu-raised-button backgroundColor="#0F88EB" @click="goWebsite(websites.Zhihu)">
          <p>知&nbsp;乎&nbsp;</p>
          <i class="iconfont icon-zh"></i>
        </mu-raised-button>
        <mu-raised-button backgroundColor="#2E963D" @click="goWebsite(websites.Douban)">
          <p>豆&nbsp;瓣&nbsp;</p>
          <i class="iconfont icon-db"></i>
        </mu-raised-button>
        <mu-raised-button backgroundColor="#3B5998" @click="goWebsite(websites.Facebook)">
          <p>Facebook&nbsp;</p>
          <i class="iconfont icon-facebook"></i>
        </mu-raised-button>
        <mu-raised-button backgroundColor="#ED4856" @click="goWebsite(websites.Instagram)">
          <p>Instagram&nbsp;</p>
          <i class="iconfont icon-ins"></i>
        </mu-raised-button>
        <mu-raised-button backgroundColor="#B92B27" @click="goWebsite(websites.Quora)">
          <p>Quora&nbsp;</p>
          <i class="iconfont icon-quora"></i>
        </mu-raised-button>
        <mu-raised-button backgroundColor="#DE5E53" @click="goWebsite(websites.Googleplus)">
          <p>Google+&nbsp;</p>
          <i class="iconfont icon-googleplus"></i>
        </mu-raised-button>
        <mu-raised-button backgroundColor="#1DA1F2" @click="goWebsite(websites.Twitter)">
          <p>Twitter&nbsp;</p>
          <i class="iconfont icon-twitter"></i>
        </mu-raised-button>
        <mu-raised-button backgroundColor="#43D854" @click="goWebsite(websites.Whatsapp)">
          <p>WhatsApp&nbsp;</p>
          <i class="iconfont icon-whatsapp"></i>
        </mu-raised-button>
      </mu-paper>
      <mu-paper class="link-paper" :zDepth="2">
        <div class="link-header">工&nbsp;具</div>
        <mu-raised-button backgroundColor="#BA2636" @click="goWebsite(websites.railway)">
          <p>12306&nbsp;</p>
          <i class="iconfont icon-12306"></i>
        </mu-raised-button>
        <mu-raised-button backgroundColor="#498BF4" @click="goWebsite(websites.GoogleTranslate)">
          <p>谷歌翻译&nbsp;</p>
          <i class="iconfont icon-gTranslate"></i>
        </mu-raised-button>
        <mu-raised-button backgroundColor="#6B6B6B" @click="goWebsite(websites.Wikipedia)">
          <p>维基百科&nbsp;</p>
          <i class="iconfont icon-Wikipedia"></i>
        </mu-raised-button>
        <mu-raised-button backgroundColor="#017CC0" @click="goWebsite(websites.TencentMail)">
          <p>腾讯企业邮&nbsp;</p>
          <i class="iconfont icon-tencentMail"></i>
        </mu-raised-button>
        <mu-raised-button backgroundColor="#B61820" @click="goWebsite(websites.NeteaseMail)">
          <p>网易企业邮&nbsp;</p>
          <i class="iconfont icon-wangyi"></i>
        </mu-raised-button>
        <mu-raised-button backgroundColor="#D90000" @click="goWebsite(websites.mail163)">
          <p>163邮箱&nbsp;</p>
          <i class="iconfont icon-wangyi"></i>
        </mu-raised-button>
        <mu-raised-button backgroundColor="#158144" @click="goWebsite(websites.mail126)">
          <p>126邮箱&nbsp;</p>
          <i class="iconfont icon-wangyi"></i>
        </mu-raised-button>
        <mu-raised-button backgroundColor="#0078D7" @click="goWebsite(websites.outlookMail)">
          <p>Outlook邮箱&nbsp;</p>
          <i class="iconfont icon-outlook"></i>
        </mu-raised-button>
        <mu-raised-button backgroundColor="#000000" @click="goWebsite(websites.iCloud)">
          <p>iCloud邮箱&nbsp;</p>
          <i class="iconfont icon-apple"></i>
        </mu-raised-button>
        <mu-raised-button backgroundColor="#DD5044" @click="goWebsite(websites.gmail)">
          <p>Gmail&nbsp;</p>
          <i class="iconfont icon-gmail"></i>
        </mu-raised-button>
        <mu-raised-button backgroundColor="#2D9FE2" @click="goWebsite(websites.QQmail)">
          <p>QQ邮箱&nbsp;</p>
          <i class="iconfont icon-QQmail"></i>
        </mu-raised-button>
      </mu-paper>
      <mu-paper class="link-paper paper-6" :zDepth="2">
        <div class="link-header">娱&nbsp;乐</div>
        <mu-raised-button backgroundColor="#D43C33" @click="goWebsite(websites.NeteaseMusic)">
          <p>网易云音乐&nbsp;</p>
          <i class="iconfont icon-NeteaseMusic"></i>
        </mu-raised-button>
        <mu-raised-button backgroundColor="#DD5482" @click="goWebsite(websites.Bilibili)">
          <p>Bilibili&nbsp;</p>
          <i class="iconfont icon-Bilibili"></i>
        </mu-raised-button>
        <mu-raised-button backgroundColor="#5BA800" @click="goWebsite(websites.iqiyi)">
          <p>爱奇艺&nbsp;</p>
          <i class="iconfont icon-aiqiyi"></i>
        </mu-raised-button>
        <mu-raised-button backgroundColor="#2692FF" @click="goWebsite(websites.youku)">
          <p>优酷&nbsp;</p>
          <i class="iconfont icon-youku"></i>
        </mu-raised-button>
        <mu-raised-button backgroundColor="#FF0000" @click="goWebsite(websites.YouTube)">
          <p>YouTube&nbsp;</p>
          <i class="iconfont icon-youtube"></i>
        </mu-raised-button>
        <mu-raised-button backgroundColor="#FF5E00" @click="goWebsite(websites.XiamiMusic)">
          <p>虾米音乐&nbsp;</p>
          <i class="iconfont icon-Music"></i>
        </mu-raised-button>
        <mu-raised-button backgroundColor="#FD4C5B" @click="goWebsite(websites.Acfun)">
          <p>AcFun&nbsp;</p>
          <i class="iconfont icon-acfun"></i>
        </mu-raised-button>
        <mu-raised-button backgroundColor="#75CB10" @click="goWebsite(websites.TencentVideo)">
          <p>腾讯视频&nbsp;</p>
          <i class="iconfont icon-TencentVideo"></i>
        </mu-raised-button>
        <mu-raised-button backgroundColor="#F06000" @click="goWebsite(websites.mgTV)">
          <p>芒果TV&nbsp;</p>
          <i class="iconfont icon-mgtv"></i>
        </mu-raised-button>
      </mu-paper>
      <mu-paper class="link-paper paper-4" :zDepth="2">
        <div class="link-header">购&nbsp;物</div>
        <mu-raised-button backgroundColor="#FF4018" @click="goWebsite(websites.Taobao)">
          <p>淘&nbsp;宝&nbsp;</p>
          <i class="iconfont icon-Taobao"></i>
        </mu-raised-button>
        <mu-raised-button backgroundColor="#E61C1A" @click="goWebsite(websites.JD)">
          <p>京&nbsp;东&nbsp;</p>
          <i class="iconfont icon-JD"></i>
        </mu-raised-button>
        <mu-raised-button backgroundColor="#FF9B00" @click="goWebsite(websites.amazon)">
          <p>亚马逊&nbsp;</p>
          <i class="iconfont icon-amazon"></i>
        </mu-raised-button>
        <mu-raised-button backgroundColor="#F94F54" @click="goWebsite(websites.dangdang)">
          <p>当&nbsp;当&nbsp;</p>
          <i class="iconfont icon-dangdang"></i>
        </mu-raised-button>
        <mu-raised-button backgroundColor="#E3007E" @click="goWebsite(websites.weipinhui)">
          <p>唯品会&nbsp;</p>
          <i class="iconfont icon-weipinhui"></i>
        </mu-raised-button>
        <mu-raised-button backgroundColor="#A08D67" @click="goWebsite(websites.wangyiyanxuan)">
          <p>网易严选&nbsp;</p>
          <i class="iconfont icon-wangyiyanxuan"></i>
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
            mobile: 'http://www.shu.edu.cn/'
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
          QQ: {
            desktop: 'https://w.qq.com/',
            mobile: 'https://w.qq.com/'
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
          },
          Taobao: {
            desktop: 'https://www.taobao.com/',
            mobile: 'https://m.taobao.com/#index'
          },
          JD: {
            desktop: 'https://www.jd.com/',
            mobile: 'https://m.jd.com/'
          },
          amazon: {
            desktop: 'https://www.amazon.cn/',
            mobile: 'https://www.amazon.cn/'
          },
          dangdang: {
            desktop: 'http://www.dangdang.com/',
            mobile: 'http://m.dangdang.com/'
          },
          weipinhui: {
            desktop: 'https://www.vip.com/',
            mobile: 'https://m.vip.com/'
          },
          wangyiyanxuan: {
            desktop: 'http://you.163.com/',
            mobile: 'http://m.you.163.com/?_stat_click_count=backwapbtn'
          },
          CNKI: {
            desktop: 'http://cnki.net/',
            mobile: 'http://wap.cnki.net/'
          },
          googleScholar: {
            desktop: 'https://scholar.google.com/',
            mobile: 'https://scholar.google.com/'
          },
          ChinaMOOC: {
            desktop: 'http://www.icourse163.org/',
            mobile: 'http://www.icourse163.org'
          },
          NeteaseOpenCourse: {
            desktop: 'https://open.163.com/',
            mobile: 'https://m.open.163.com/'
          },
          Coursera: {
            desktop: 'https://zh.coursera.org/',
            mobile: 'https://zh.coursera.org/'
          },
          edX: {
            desktop: 'https://www.edx.org/',
            mobile: 'https://www.edx.org/'
          },
          immoc: {
            desktop: 'http://www.imooc.com/',
            mobile: 'http://m.imooc.com/'
          },
          NeteaseStudy: {
            desktop: 'https://study.163.com/',
            mobile: 'https://m.study.163.com/'
          },
          TED: {
            desktop: 'https://www.ted.com/',
            mobile: 'https://www.ted.com/'
          },
          MITOCW: {
            desktop: 'https://ocw.mit.edu/',
            mobile: 'https://ocw.mit.edu/'
          },
          GitHub: {
            desktop: 'https://www.github.com',
            mobile: 'https://www.github.com'
          },
          StackOverflow: {
            desktop: 'https://stackoverflow.com/',
            mobile: 'https://stackoverflow.com/'
          },
          railway: {
            desktop: 'http://www.12306.cn/',
            mobile: 'http://www.12306.cn/'
          },
          GoogleTranslate: {
            desktop: 'https://translate.google.cn/',
            mobile: 'https://translate.google.cn/m/translate'
          },
          Wikipedia: {
            desktop: 'https://zh.wikipedia.org/',
            mobile: 'https://zh.m.wikipedia.org/'
          },
          TencentMail: {
            desktop: 'https://exmail.qq.com/cgi-bin/loginpage',
            mobile: 'https://m.exmail.qq.com/cgi-bin/loginpage'
          },
          Whatsapp: {
            desktop: 'https://web.whatsapp.com/',
            mobile: 'https://web.whatsapp.com/'
          },
          NeteaseMail: {
            desktop: 'https://qiye.163.com/login/',
            mobile: 'https://qiye.163.com/m/login.htm'
          },
          mail163: {
            desktop: 'http://mail.163.com/',
            mobile: 'http://smart.mail.163.com/?dv=smart'
          },
          mail126: {
            desktop: 'http://mail.126.com/',
            mobile: 'http://smart.mail.126.com/?dv=smart'
          },
          outlookMail: {
            desktop: 'https://outlook.live.com/owa/',
            mobile: 'https://outlook.live.com/owa/'
          },
          iCloud: {
            desktop: 'https://www.icloud.com/',
            mobile: 'https://www.icloud.com/'
          },
          gmail: {
            desktop: 'https://mail.google.com/',
            mobile: 'https://mail.google.com/'
          },
          QQmail: {
            desktop: 'https://mail.qq.com/',
            mobile: 'https://w.mail.qq.com/'
          },
          NeteaseMusic: {
            desktop: 'https://music.163.com/',
            mobile: 'https://music.163.com/m/'
          },
          Bilibili: {
            desktop: 'https://www.bilibili.com/',
            mobile: 'https://m.bilibili.com/'
          },
          iqiyi: {
            desktop: 'http://www.iqiyi.com/',
            mobile: 'http://m.iqiyi.com/'
          },
          youku: {
            desktop: 'http://youku.com/',
            mobile: 'http://youku.com/'
          },
          YouTube: {
            desktop: 'https://www.youtube.com/',
            mobile: 'https://m.youtube.com/'
          },
          XiamiMusic: {
            desktop: 'http://www.xiami.com/',
            mobile: 'http://h.xiami.com/'
          },
          Acfun: {
            desktop: 'http://www.acfun.cn/',
            mobile: 'http://m.acfun.cn/'
          },
          TencentVideo: {
            desktop: 'https://v.qq.com/',
            mobile: 'http://m.v.qq.com/'
          },
          mgTV: {
            desktop: 'http://www.mgtv.com/',
            mobile: 'http://m.mgtv.com/#/channel/home'
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
    padding-top 15vmin
    padding-bottom 5vmin

  .link-paper
    padding-top 2vmin
    padding-bottom 1vmin
    margin 3vmin 3vmin 3vmin 3vmin
    display inline-block
    width 60vh
    min-height 34vh
    text-align center
    background-color rgba(238, 238, 238, 0.5)

  .link-header
    margin 0
    padding 2vh
    font-size 1.5rem
    display block

  .mu-raised-button
    margin-bottom 2vmin
    margin-left 1vmin
    margin-right 1vmin
    text-transform none
    min-width 16vh

  .paper-4
  .paper-1
    .mu-raised-button
      margin-top 3vh

  .paper-6
    .mu-raised-button
      margin-top 1vh
</style>
