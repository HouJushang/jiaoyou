<template>
  <div>
    personal
  </div>
</template>
<style lang="sass">
  .indexPage
</style>
<script>
  import {indexStatus} from '../data.js'

  export default{
    beforeCreate () {
      indexStatus.navAction = 'personal'
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
