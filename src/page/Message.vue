<template>
  <div>
    这里是系统消息列表
  </div>
</template>
<style lang="sass">
  .indexPage
</style>
<script>
  import {indexStatus} from '../data.js'
  export default{
    data () {
      return {title: '这里是首页'}
    },
    beforeCreate () {
      indexStatus.navAction = 'message'
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
