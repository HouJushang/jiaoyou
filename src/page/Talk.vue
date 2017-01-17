<template>
  <div class="talkPage">
    <router-view></router-view>
  </div>
</template>
<style lang="sass">
.talkPage
  background-color: #ececec
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
