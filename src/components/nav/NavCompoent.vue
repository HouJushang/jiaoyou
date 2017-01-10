<template>
  <dl class="nav">
    <dd>
      <router-link :to="{name: 'hall'}">
        <img src="../../assets/img/hallAction.png" v-if="active =='hall'">
        <img src="../../assets/img/hall.png" v-else>
      </router-link>
    </dd>
    <dd>
      <router-link :to="{name: 'talk'}">
        <img src="../../assets/img/talkAction.png" v-if="active =='talk'">
        <img src="../../assets/img/talk.png" v-else>
      </router-link>
    </dd>
    <dd>
      <router-link :to="{name: 'message'}">
        <img src="../../assets/img/messageAction.png" v-if="active =='message'">
        <img src="../../assets/img/message.png" v-else>
      </router-link>
    </dd>
    <dd>
      <router-link :to="{name: 'personal'}">
        <img src="../../assets/img/personalAction.png" v-if="active =='personal'">
        <img src="../../assets/img/personal.png" v-else>
      </router-link>
    </dd>
  </dl>
</template>
<style lang='sass'>
  @import '../../assets/comm.sass'
  .nav
    position: absolute
    padding-top: 7px
    height: 42px
    bottom: 0
    left: 0
    right: 0
    background-color: #fff
    @include flex(space-around)
    .active
      color: #fff
    dd
      color: #999999
      img
        height: 35px

</style>
<script>
  export default{
    props: ['active'],
    data () {
      return {
        'msg': 'sssss'
      }
    },
    methods: {
    }
  }

</script>
