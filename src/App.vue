<template>
  <div id="app" name="app">
    <common-bar></common-bar>

    <!-- 轮播图 -->
    <slide></slide>

    <!-- 图标 -->
    <echarts></echarts>
    
    <!-- 版权相关 -->
    <common-footer></common-footer>

    <!-- to-top -->
    <to-top></to-top>
  </div>
</template>

<script>
  import Slide from 'base/slide/slide'
  import ToTop from 'base/to-top/to-top'
  import CommonFooter from 'components/common-footer/common-footer'
  import Echarts from 'components/echarts/echarts'
  import CommonBar from 'components/common-bar/common-bar'
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
      CommonFooter,
      ToTop,
      Echarts,
      CommonBar
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

