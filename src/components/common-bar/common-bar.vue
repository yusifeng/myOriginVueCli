<template>
  <div class="bar">
    <div class="bar-top">
      <div class="bar-top-left">沃淘信科</div>
      <div class="bar-top-right">
        <a href="">控制台</a>
        <a href="">文档</a>
        <a href="">备案</a>
        <a href="">邮箱</a>
        <a href="">登录</a>
      </div>
    </div>
    <div class="bar-nav">
      <ul class="bar-nav-left">
        <li><a href="">沃淘概况</a></li>
        <li><a href="">产品与服</a></li>
        <li><a href="">业绩成果</a></li>
        <li><a href="">公司资源</a></li>
        <li><a href="">产品优势</a></li>
        <li><a href="">样板客户</a></li>
        <li><a href="">联系我们</a></li>
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
      border-bottom 1px solid rgba(255, 255, 255, .15)
      .bar-top-left
        float left
        margin-top 12px
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
      border-bottom 1px solid rgba(255, 255, 255, .15)
      .bar-nav-left
        height 100%
        float left
        margin-left 10px
        li
          float left
          padding 0 16px
          &:after
            position absolute
            content '.'
            left 0
            bottom 0
            width 100%
            height 2px
            background-color #000
          a
            font-size $font-size-medium
            display inline-block
            height 60px
            line-height 60px
            color #fff
            &:hover
              color $color-footer-hover-color
           
</style>

