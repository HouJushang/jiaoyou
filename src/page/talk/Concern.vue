<template>
  <div class="concern">
    <TalkNavComponent action="1"></TalkNavComponent>
    <ThemeComponent v-for="item in data" :data="item"></ThemeComponent>
  </div>
</template>
<style lang='sass'>
  .concern
    overflow: hidden
</style>
<script>
  import {concern} from '../../data.js'
  import ThemeComponent from '../../components/theme/ThemeComponent.vue'
  import TalkNavComponent from '../../components/talkNav/TalkNavComponent.vue'
  export default{
    data () {
      return {
        'data': concern
      }
    },
    methods: {
    },
    components: {
      ThemeComponent,
      TalkNavComponent
    }
  }

</script>
