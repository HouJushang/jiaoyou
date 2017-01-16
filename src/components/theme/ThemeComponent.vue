<template>
  <div class="theme">
    <div class="top">
      <img class="avatar" :src="data.avatar" />
      <img :src="imgData.online" width="18"/>
      {{data.name}}
      <img :src="imgData.girl" width="18" v-if="data.sex === 'girl'"/>
      <img :src="imgData.boy" width="18" v-else/>
      <img :src="imgData.daren" width="18" v-if="data.vip"/>
    </div>
    <div class="showImage" style="background-image: url('https://rpic.douyucdn.cn/appCovers/2016/12/07/265688_20161207022140_small.jpg');">
    </div>
    <div class="voice">
      <div class="voliceLeft" @click="doVoice('http://www.maninblack.org/demos/WhereDoAllTheJunkiesComeFrom.mp3')">
        <img :src="imgData.voiceBtn" width="15" v-if=""/>
      </div>
      <div class="voliceRight">
        52''<span></span>
      </div>
    </div>
    <div class="meetChat">
      <div class="meetLeft">
        <img :src="imgData.meed" height="38"/>
        打赏
        <img :src="imgData.meedChat" height="30"/>
      </div>
      <div class="meetRight">
        和TA聊天
      </div>
    </div>
  </div>
</template>
<style lang='sass'>
  @import '../../assets/comm.sass'
  .theme
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
      padding: 10px 0
      display: flex
      border-bottom: 1px solid #ececec
      .voliceLeft
        width: 231px
        height: 42px
        background-image: url("img/voiceOutline.png")
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
    .meetChat
      padding: 11px 0
      @include flex()
      >div
        @include flex-grow(1)
        text-align: center
        height: 38px
        line-height: 39px
      .meetLeft
        color: #ffa921
        img
          vertical-align: middle
          margin-left: 5px
          margin-right: 5px
      .meetRight
        color: #bbbbbb
</style>
<script>
  import {audio} from '../../data.js'
  import imgData from './img.js'
  export default{
    name: 'theme',
    props: ['data'],
    data () {
      return {imgData: imgData}
    },
    methods: {
      doVoice (e) {
        if (e === audio.url && audio.play === true) {
          this.stopVoice()
        } else {
          this.playVoice(e)
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
      }
    }
  }

</script>
