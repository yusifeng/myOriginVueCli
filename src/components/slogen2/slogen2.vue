<template>
  <div class="slogen2">
    <div class="title">
      <span>沃淘人</span>
      <span style="margin:0 15px">为梦想</span>
      <span>一路荣光</span>
    </div>
    <div class="special">
      [<span class="text">专业</span>]
      <span class="dot">·</span>
      [<span class="text">敬业</span>]
      <span class="dot">·</span>
      [<span class="text">事业</span>]
    </div>
    <div class="logo"></div>
    <div class="slogen-en">
      FOR THE DREAM ALL THE GLORY
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="stylus" scoped>
  @import '~common/stylus/variable'
  .slogen2 > div
      text-align center
  .slogen2
      margin-top 66px
      .title
        font-size $font-size-large
        color $color-common-theme-color
        margin-bottom 16px
        span
          letter-spacing 3px
      .special
        color $color-common-theme-sub-color
        font-size 38px
        margin-bottom 38px
        span
          display inline-block
          color $color-common-theme-color
          transform translateY(3px)
        .text
          text-indent  12px
          letter-spacing 12px
        .dot
          display inline-block
          transform translateY(3px)
      .logo
        height 39px
        background url(logo.gif) no-repeat top center
        margin-bottom 22px
      .slogen-en
        color $color-common-theme-sub-color

</style>


