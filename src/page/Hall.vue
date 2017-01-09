<template>
  <div class="hallPage">
    <div>
      公告相册帅选
    </div>
    <div class="publicNotice">
      <div class="top">
        <img class="avatar" src="https://apic.douyucdn.cn/upload/avanew/face/201612/11/12/562db4c862ebfa4cc52030e511bed656_middle.jpg?rltime" />
        韩小雅 女 皇冠
      </div>
      <div class="showImage" style="background-image: url('https://rpic.douyucdn.cn/appCovers/2016/12/07/265688_20161207022140_small.jpg');">
      </div>
    </div>
  </div>
</template>
<style lang="sass">
  @import '../assets/comm.sass'
  .publicNotice
    .avatar
      width: 42px
      @include border-radius(100%)
    .showImage
      height: 198px
      width: 100%
      background-size: contain

</style>
<script>
  import {indexStatus} from '../data.js'
  export default{
    data () {
      return {title: '这里是首页'}
    },
    beforeCreate () {
      indexStatus.navAction = 'hall'
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
