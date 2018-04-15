<template>
  <div class="slogen-wrapper">
    <h2 class="title">沃淘信科</h2>
    <h2 class="sub-title">专注短信专业为您</h2>
    <p><span>150<sup>+</sup></span>个伙伴全情付出</p>
    <p><span>100<sup>+</sup></span>亿年发送量</p>
    <p><span>10000<sup>+</sup></span>家客户的信任</p>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="stylus" scoped>
  @import '~common/stylus/variable'
  .slogen-wrapper
    display inline-block
    .title, .sub-title
      font-size 40px
      color #fff
      line-height 60px
      letter-spacing 5px
      font-family '微软雅黑'
    .sub-title
      margin-bottom 40px
    p
      font-size 18px
      line-height 42px
      color #3C505A
      span
        display inline-block
        position relative
        font-size 20px
        color $color-common-theme-color
        margin-right 14px
        sup
          position absolute
          top -6px
          right -10px
        
</style>

