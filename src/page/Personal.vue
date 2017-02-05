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
        <p>
          ID:562442
        </p>
        <p>
          21岁 安徽 合肥
        </p>
        <p>
          金币: 60
        </p>
      </div>
      <div>

      </div>
    </div>
  </div>
</template>
<style lang="sass">
  @import "../assets/comm"
  .personalPage
    .personalTop
      width: 100%
      height: 0
      padding-top: 57%
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
        @include flex()
        .avatar
          width: 85px
          height: 85px
          @include border-radius(100%)
          overflow: hidden
          border: 3px solid rgba(255,255,255,0.6)
</style>
<script>
  import {indexStatus} from '../data.js'
  export default{
    beforeCreate () {
      indexStatus.navAction = 'personal'
    },
    data () {
      return {title: '这里是首页'}
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
