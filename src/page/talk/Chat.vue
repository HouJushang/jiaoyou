<template>
  <div class="chat">
    <TalkNavComponent action="3"></TalkNavComponent>
    <dl>
      <dd v-for="item in data">
        <div>
          <img :src="item.avatar"/>
        </div>
        <div>
          <p>{{item.name}}</p>
          <p>{{item.content}}</p>
        </div>
        <div>
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
  .chat
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
