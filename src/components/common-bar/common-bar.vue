<template>
  <div class="bar">
    <div class="bar-top">
      <a href="" class="bar-top-left">
        <img  src="./logo-bar.gif" width="80">
      </a>
      <div class="bar-top-right">
        <a href="https://www.baidu.com" target="_blank">控制台</a>
        <a href="">文档</a>
        <a href="">备案</a>
        <a href="">邮箱</a>
        <a href="">登录</a>
      </div>
    </div>
    <div class="bar-nav">
      <ul class="bar-nav-left">
        <li><a href="">沃淘概况</a><span></span></li>
        <li><a href="">产品与服</a><span></span></li>
        <li><a href="">业绩成果</a><span></span></li>
        <li><a href="">公司资源</a><span></span></li>
        <li><a href="">产品优势</a><span></span></li>
        <li><a href="">样板客户</a><span></span></li>
        <li><a href="">联系我们</a><span></span></li>
      </ul>
      <div class="bar-nav-right"></div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="stylus" scoped>
  @import '~common/stylus/variable'

  .bar
    position fixed
    z-index 10
    width 100%
    height 100px
    background-color transparent
    &:hover
      transition background 300ms cubic-bezier(0, 0, 0.2, 1) 50ms
      background-color $color-bar-hover-background
    .bar-top
      height 40px
      color #fff
      border-bottom 1px solid $color-bar-line-color
      .bar-top-left
        float left
        margin-top 7px
        margin-left 20px
      .bar-top-right
        float right
        margin-top 12px
        margin-right 20px
        a 
          color #fff
          font-size $font-size-medium
          margin-left 10px
    .bar-nav
      height 60px
      border-bottom 1px solid $color-bar-line-color
      .bar-nav-left
        height 100%
        float left
        margin-left 10px
        li
          position relative
          float left
          padding 0 16px
          span
            position absolute
            left 0
            bottom 0
            width 0%
            height 2px
            background-color $color-common-theme-hover-color
            // transition width 150ms linear
          &:hover > span
            transition width 150ms linear 
            width 100%
          a
            font-size $font-size-medium
            display inline-block
            height 60px
            line-height 60px
            color #fff
            &:hover
              color $color-common-theme-hover-color
           
</style>

