<template>
  <div class="chat">
    <TalkNavComponent action="3"></TalkNavComponent>
    <dl class="chatList">
      <dd v-for="item in data">
        <div class="avatar">
          <img :src="item.avatar" width="43" height="43"/>
        </div>
        <div class="chatContent">
          <p>{{item.name}}</p>
          <p>{{item.content}}</p>
        </div>
        <div class="chatNumber">
          <p>
            {{item.time}}
          </p>
          <p>
            {{item.number}}
          </p>
        </div>
      </dd>
    </dl>
  </div>
</template>
<style lang='sass'>
  @import "../../assets/comm"
  .chat
    .chatList
      background-color: #fff
      padding: 0 12px
      dd
        border-bottom: 1px solid #ececec
        padding: 10px 0
        overflow: hidden
        @include flex()
        .avatar
          width: 43px
          height: 43px
          @include border-radius(100%)
          overflow: hidden
          margin-right: 13px
          float: left
        .chatNumber
          width: 35px
          p
            &:first-child
              font-size: 11px
              color: #999
            &:last-child
              font-size: 14px
        .chatContent
          @include flex-grow(1)
          @include flex()
          @include align-items(center)
          @include flex-direction(column)
          p
            &:first-child
              font-size: 16px
            &:last-child
              font-size: 14px
              color: #999999




</style>
<script>
  import {chat} from '../../data.js'
  import TalkNavComponent from '../../components/talkNav/TalkNavComponent.vue'
  console.log(chat)
  export default{
    data () {
      return {
        'data': chat.data
      }
    },
    methods: {
    },
    components: {
      TalkNavComponent
    }
  }

</script>
