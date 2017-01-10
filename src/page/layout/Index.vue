<template>
  <div class="indexPage">
    <headerComponent></headerComponent>
    <div class="indexBody">
      <router-view>
      </router-view>
    </div>
    <navComponent :active="indexData.navAction"></navComponent>
  </div>
</template>
<style lang="sass">
  .indexPage
    height: 100%
  .indexBody
    position: absolute
    top: 45px
    bottom: 49px
    left: 0
    right: 0
    overflow-y: auto
    -webkit-overflow-scrolling: touch
</style>
<script>
  import headerComponent from '../../components/header/HeaderCompoent.vue'
  import navComponent from '../../components/nav/NavCompoent.vue'
  import {indexStatus} from '../../data.js'
  export default{
    name: 'index',
    data () {
      return {indexData: indexStatus}
    },
    methods: {
    },
    watch: {
    },
    components: {
      headerComponent,
      navComponent
    },
    mounted () {
    }
  }
</script>
