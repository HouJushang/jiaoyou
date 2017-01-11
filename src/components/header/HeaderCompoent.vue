<template>
  <header class="indexHeader">
    <img src="./friendIcon.png" width="28">交友达人
    <span class="title">
      寻找身边有缘的 TA
    </span>
  </header>
</template>
<style lang='sass'>
  .indexHeader
    height: 45px
    background-color: #ff5757
    line-height: 46px
    color: #fff
    img
      vertical-align: middle
      margin-left: 12px
      margin-right: 9px
    span
      float: right
      margin-right: 20px
</style>
<script>
  export default{
    name: 'header',
    props: ['title'],
    data () {
      return {
        'msg': 'sssss'
      }
    },
    methods: {
    }
  }

</script>
