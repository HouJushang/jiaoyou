<template>
  <div class="talkNav">
    <router-link :to="{name: 'concern'}" v-bind:class="{talkNavAction: action == 1 }">
      <div>
        我的关注
      </div>
    </router-link>
    <router-link :to="{name: 'fans'}" v-bind:class="{talkNavAction: action == 2 }">
      <div>
        我的粉丝
      </div>
    </router-link>
    <router-link :to="{name: 'chat'}" v-bind:class="{talkNavAction: action == 3 }">
      <div>
        及时聊天
      </div>
    </router-link>
  </div>
</template>
<style lang='sass'>
  @import '../../assets/comm.sass'
  .talkNav
    background-color: #fff
    @include flex()
    border-bottom: 1px solid #ccc
    height: 43px
    .talkNavAction
      border-bottom: 3px solid #ff5757
      color: #ff5757
    a
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
  export default{
    props: ['action'],
    data () {
      return {
        'msg': 'sssss'
      }
    },
    methods: {
    }
  }

</script>
