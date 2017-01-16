<template>
  <div class="concern">
    <ThemeComponent v-for="item in data" :data="item"></ThemeComponent>
  </div>
</template>
<style lang='sass'>
  .concern
</style>
<script>
  import {concern} from '../../data.js'
  import ThemeComponent from '../../components/theme/ThemeComponent.vue'
  export default{
    data () {
      return {
        'data': concern
      }
    },
    methods: {
    },
    components: {
      ThemeComponent
    }
  }

</script>
