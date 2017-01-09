<template>
  <dl class="nav">
    <dd>
      <router-link :to="{name: 'hall'}" v-bind:class="[active =='hall' ? 'active' : '']">大厅</router-link>
    </dd>
    <dd>
      <router-link :to="{name: 'talk'}" v-bind:class="[active =='talk' ? 'active' : '']">聊友</router-link>
    </dd>
    <dd>
      <router-link :to="{name: 'message'}" v-bind:class="[active =='message' ? 'active' : '']">消息</router-link>
    </dd>
    <dd>
      <router-link :to="{name: 'personal'}" v-bind:class="[active =='personal' ? 'active' : '']">个人</router-link>
    </dd>
  </dl>
</template>
<style lang='sass'>
  @import '../../assets/comm.sass'
  .nav
    position: absolute
    height: 49px
    bottom: 0
    left: 0
    right: 0
    background-color: #ff5757
    @include flex(space-around)
    .active
      color: #fff

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
