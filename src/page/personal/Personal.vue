<template>
  <div class="personalPage">
    <div class="personalTop" style="background-image: url('https://gss0.baidu.com/-4o3dSag_xI4khGko9WTAnF6hhy/zhidao/wh%3D600%2C800/sign=f71630cbf003918fd78435cc610d0aaf/c995d143ad4bd113e7c1d0195dafa40f4bfb0588.jpg')">
      <div class="bgCanvar"></div>
      <div class="topContent">
        <div class="avatar">
          <img src="https://apic.douyucdn.cn/upload/avanew/face/201612/11/12/562db4c862ebfa4cc52030e511bed656_middle.jpg?rltime" />
        </div>
        <div>
          啥袋子
        </div>
        <p class="idNumber">
          ID:562442
        </p>
        <p class="personalMes">
          21岁 安徽 合肥
        </p>
        <p class="money">
          <span>金币: 6220</span>
        </p>
      </div>
      <dl class="personalFans">
        <dd>
          <p>152</p>
          <p>关注</p>
        </dd>
        <dd>
          <p>168</p>
          <p>粉丝</p>
        </dd>
        <dd>
          <p><img :src="imgData.signIn" height="16" /></p>
          <p>签到</p>
        </dd>
      </dl>
      <div class="personalNav">
        <div class="personalNavItem">
          <div class="itemBox">
            <div class="itemContent">
              <img :src="imgData.gift"/>
              <p>
                <span>我的礼物</span>
                <span>收到/送出的礼物</span>
              </p>
            </div>
          </div>
          <div class="itemBox">
            <div class="itemContent">
              <img :src="imgData.finance"/>
              <p>
                <span>财务明细</span>
                <span>收入/吃出明细</span>
              </p>
            </div>
          </div>
        </div>
        <div class="personalNavItem">
          <div class="itemBox">
            <div class="itemContent">
              <img :src="imgData.pay"/>
              <p>
                <span>充值中心</span>
                <span>充值vip / 金币</span>
              </p>
            </div>
          </div>
          <div class="itemBox">
            <div class="itemContent">
              <img :src="imgData.withdraw" />
              <p>
                <span>
                  支付宝提现
                </span>
                  <span>
                  提现支付宝
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="photoAlbum">
        <h2>我的相册</h2>
        <dl>
          <dd>
            <img src="https://rpic.douyucdn.cn/appCovers/2017/01/09/265688_20170109205851_small.jpg" />
          </dd>
          <dd>
            <img src="https://rpic.douyucdn.cn/appCovers/2017/01/09/265688_20170109205851_small.jpg" />
          </dd>
          <dd>
            <img src="https://rpic.douyucdn.cn/appCovers/2017/01/09/265688_20170109205851_small.jpg" />
          </dd>
        </dl>
    </div>
  </div>
</div>
</template>
<style lang="sass">
  @import "../../assets/comm"
  .personalPage
    .personalTop
      width: 100%
      height: 0
      padding-top: 60%
      position: relative
      background-repeat: no-repeat
      background-size: cover
      .bgCanvar,.topContent
        position: absolute
        top: 0px
        left: 0px
        right: 0px
        bottom: 0px
      .bgCanvar
        background-color: rgba(255,255,255,0.5)
      .topContent
        z-index: 99
        margin: 13px 0
        color: #fdf9f9
        @include flex(space-between)
        @include flex-direction(column)
        text-align: center
        .avatar
          width: 85px
          height: 85px
          @include border-radius(100%)
          margin: 0 auto
          overflow: hidden
          border: 3px solid rgba(255,255,255,0.6)
          img
            width: 100%
      .idNumber,.personalMes
        font-size: 12px
      .money
        height: 20px
        line-height: 1
        font-size: 13px
        span
          display: inline-block
          height: 100%
          line-height: 20px
          padding: 0 6px
          background-color: #ff5757
          @include border-radius(4px)
    .personalNav
      .personalNavItem
        @include flex()
        .itemBox
          .itemContent
            width: 110px
            margin: 0 auto
          @include flex-grow(1)
          border-bottom: 1px solid #cbcbcb
          padding: 22px 0
          &:first-child
            border-right: 1px solid #cbcbcb
          p
            display: inline-block
            width: 30px
            white-space : nowrap
            span
              display: block
              &:first-child
                margin-top: 1px
                font-size: 17px
                color: #333333
              &:last-child
                color: #999999
                margin-top: 3px
                font-size: 10px
          img
            vertical-align: middle
            float: left
            width: 30px
            margin-right: 7px
    .personalFans
      @include flex(space-between)
      text-align: center
      border-bottom: 1px solid #cbcbcb
      padding: 10px 0
      dd
        @include flex-grow(1)
        p:first-child
          font-size: 16px
          height: 16px
          line-height: 17px
          margin-bottom: 5px
        p:last-child
          color: #999999
          font-size: 12px
    .photoAlbum
      h2
        height: 40px
        line-height: 41px
        border-bottom: 1px solid #cbcbcb
        padding-left: 15px
      dl
        @include flex()
        padding: 13px
        dd
          width: 75px
          height: 75px
          overflow: hidden
          text-align: center
          img
            height: 100%
</style>
<script>
  import {indexStatus} from '../../data.js'
  import imgData from './img.js'
  export default{
    beforeCreate () {
      indexStatus.navAction = 'personal'
    },
    data () {
      return {imgData: imgData}
    },
    methods: {
    },
    watch: {
    },
    components: {
    },
    mounted () {
    }
  }
</script>
