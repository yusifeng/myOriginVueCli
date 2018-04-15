<template>
  <div id="app" name="app">
    <common-bar></common-bar>

    <!-- 轮播图 -->
    <slide></slide>

    <!-- 图标 -->
    <!-- <echarts></echarts> -->

    <!-- 主题词 -->
    <slogen2></slogen2>
    
    <!-- 版权相关 -->
    <common-footer></common-footer>

    <!-- 跳至顶部 -->
    <to-top class="to-top"></to-top>

    <!-- 提供建议 -->
    <provide-advice class="provide-advice"></provide-advice>
  </div>
</template>

<script>

  import Slide from 'base/slide/slide'
  import ToTop from 'base/to-top/to-top'
  import CommonFooter from 'components/common-footer/common-footer'
  import Echarts from 'components/echarts/echarts'
  import CommonBar from 'components/common-bar/common-bar'
  import ProvideAdvice from 'components/provide-advice/provide-advice'
  import Slogen from 'components/slogen/slogen'
  import Slogen2 from 'components/slogen2/slogen2'
  export default {
    data() {
      return {
        
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
      CommonBar,
      ProvideAdvice,
      Slogen,
      Slogen2
    }
  }
</script>

<style lang="stylus" scoped>
  #app
    .to-top 
      position fixed
      right 10px
      bottom 10px
    .provide-advice
      position fixed
      right 10px
      bottom 300px
      z-index 100
</style>

