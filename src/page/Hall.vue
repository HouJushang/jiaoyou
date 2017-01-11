<template>
  <div class="hallPage">
    <dl class="filter">
      <dd>
        公告
      </dd>
      <dd>
        相册
      </dd>
      <dd>
        筛选
      </dd>
    </dl>
    <div class="item" v-for="(item, index) in [1,2,3,4,5,6]">
      <div class="top">
        <img class="avatar" src="https://apic.douyucdn.cn/upload/avanew/face/201612/11/12/562db4c862ebfa4cc52030e511bed656_middle.jpg?rltime" />
        <img src="../assets/img/online.png" width="18"/>
        韩小雅
        <img src="../assets/img/girl.png" width="18"/>
        <img src="../assets/img/daren.png" width="18"/>
      </div>
      <div class="showImage" style="background-image: url('https://rpic.douyucdn.cn/appCovers/2016/12/07/265688_20161207022140_small.jpg');">
      </div>
      <div class="voice">
        <div class="voliceLeft" @click="doVoice('http://www.maninblack.org/demos/WhereDoAllTheJunkiesComeFrom.mp3')">
          <img src="../assets/img/voiceBtn.png" width="15" v-if=""/>
        </div>
        <div class="voliceRight">
          52''<span></span>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="sass">
  @import '../assets/comm.sass'
  .hallPage
    background-color: #ececec
    min-height: 100%
    overflow: hidden
    .filter
      height: 44px
      background-color: #fff
      @include flex(space-around)
      border-bottom: 1px solid #ccc
      line-height: 45px
      dd
        @include flex-grow(1)
        @include align-self(center)
        height: 18px
        line-height: 19px
        text-align: center
        border-right: 1px solid #ccc
        &:last-child
          border-right: none
    .item
      margin-bottom: 5px
      padding: 0 12px
      background-color: #fff
      overflow: hidden
      .top
        height: 42px
        margin: 14px 0 10px 0
        line-height: 43px
        font-size: 16px
        img
          vertical-align: middle
        .avatar
          width: 42px
          @include border-radius(100%)
          float: left
          margin-right: 15px
      .showImage
        padding-top: 56%
        height: 0px
        width: 100%
        background-size: cover
      .voice
        margin: 10px 0
        display: flex
        .voliceLeft
          width: 231px
          height: 42px
          background-image: url("../assets/img/voiceOutline.png")
          background-size: contain
          position: relative
          img
            position: absolute
            left: 25px
            top: 9px
        .voliceRight
          height: 42px
          line-height: 42px
          padding-left: 22px
          span
            display: inline-block
            width: 8px
            height: 8px
            background-color: #ff5021
            @include border-radius(100%)
            margin-left: 8px


</style>
<script>
  import {indexStatus, audio} from '../data.js'
  const hallPage = {
    data () {
      return {title: '这里是首页'}
    },
    beforeCreate () {
      indexStatus.navAction = 'hall'
    },
    methods: {
      doVoice (e) {
        if (e === audio.url && audio.play === true) {
          hallPage.stopVoice()
        } else {
          hallPage.playVoice(e)
        }
      }
    },
    playVoice (e) {
      audio.url = e
      audio.play = true
      audio.obj = new window.Audio(e)
      audio.obj.play()
    },
    stopVoice () {
      audio.url = null
      audio.play = false
      audio.obj.pause()
      audio.obj = null
    },
    watch: {
    },
    components: {
    },
    beforeDestroy () {
      if (audio.play === true) {
        hallPage.stopVoice()
      }
    }
  }
  export default hallPage
</script>
