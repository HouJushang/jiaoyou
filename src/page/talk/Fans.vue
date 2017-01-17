<template>
  <div class="fans">
    <TalkNavComponent action="2"></TalkNavComponent>
    <ThemeComponent v-for="item in data" :data="item"></ThemeComponent>
  </div>
</template>
<style lang='sass'>
  .fans
</style>
<script>
  import {fans} from '../../data.js'
  import ThemeComponent from '../../components/theme/ThemeComponent.vue'
  import TalkNavComponent from '../../components/talkNav/TalkNavComponent.vue'
  export default{
    data () {
      return {
        'data': fans
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
