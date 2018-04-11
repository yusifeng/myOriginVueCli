<template>
  <div id="app" name="app">
    <!-- 轮播图 -->
    <slide></slide>
    <!-- 图标 -->
    <echarts></echarts>
    <!-- 版权相关 -->
    <wt-footer></wt-footer>

    <!-- to-top -->
    <to-top></to-top>
  </div>
</template>

<script>
  import Slide from 'base/slide/slide'
  import ToTop from 'base/to-top/to-top'
  import WtFooter from 'components/wt-footer/wt-footer'
  import Echarts from 'components/echarts/echarts'
  export default {
    data() {
      return {
        isShow: true,
        msg: 'david'
      }
    },
    methods: {
      
    },
    computed: {

    },
    components: {
      Slide,
      WtFooter,
      ToTop,
      Echarts
    }
  }
</script>

<style lang="stylus" scoped>
  #app
    .to-top 
      position fixed
      right 10px
      bottom 10px
      background-color #000
</style>

