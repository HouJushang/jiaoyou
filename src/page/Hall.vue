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
    <ThemeComponent v-for = "item in list" :data="item"></ThemeComponent>
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
      @include align-items(center)
      dd
        @include flex-grow(1)
        height: 18px
        line-height: 19px
        text-align: center
        border-right: 1px solid #ccc
        &:last-child
          border-right: none
</style>
<script>
  import {indexStatus, audio, list} from '../data.js'
  import ThemeComponent from '../components/theme/ThemeComponent.vue'
  const hallPage = {
    data () {
      return {list: list}
    },
    beforeCreate () {
      indexStatus.navAction = 'hall'
    },
    methods: {
    },
    watch: {
    },
    components: {
      ThemeComponent
    },
    beforeDestroy () {
      if (audio.play === true) {
        hallPage.stopVoice()
      }
    }
  }
  export default hallPage
</script>
