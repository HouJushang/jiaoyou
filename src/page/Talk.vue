<template>
  <div class="talkPage">
    1111
  </div>
</template>
<style lang="sass">
  .indexPage
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
