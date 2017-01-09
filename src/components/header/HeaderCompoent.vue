<template>
  <header class="indexHeader">
    交友达人
  </header>
</template>
<style lang='sass'>
  .indexHeader
    height: 45px
    background-color: #ff5757
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
