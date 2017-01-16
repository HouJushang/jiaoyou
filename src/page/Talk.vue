<template>
  <div class="talkPage">
    <dl class="talkNav">
      <dd class="talkNavAction">
        <div>
          我的关注
        </div>
      </dd>
      <dd>
        <div>
          我的粉丝
        </div>
      </dd>
      <dd>
        <div>
          及时聊天
        </div>
      </dd>
    </dl>
    <div>
      <router-view>
      </router-view>
    </div>
  </div>
</template>
<style lang="sass">
  @import '../assets/comm.sass'
  .talkPage
    .talkNav
      @include flex()
      border-bottom: 1px solid #ccc
      height: 43px
      .talkNavAction
        border-bottom: 3px solid #ff5757
        color: #ff5757
      dd
        @include flex-grow(1)
        @include flex(space-around)
        @include align-items(center)
        margin-bottom: -1px
        text-align: center
        font-size: 17px
        &:last-child
          div
            border-right: none
        div
          @include flex-grow(1)
          height: 16px
          line-height: 17px
          border-right: 1px solid #ccc


</style>
<script>
  import {indexStatus} from '../data.js'

  export default{
    beforeCreate () {
      indexStatus.navAction = 'talk'
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
