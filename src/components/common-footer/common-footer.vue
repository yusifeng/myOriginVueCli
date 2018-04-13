<template>
  <div class="footer">
    <div class="footer-website">
      <div class="container">
        <div class="inner clearfix">
          <div class="footer-website-item">
            <h3>解决方案</h3>
            <ul>
              <li><a href="">金融行业</a></li>
              <li><a href="">医疗保健</a></li>
              <li><a href="">互联网+行业</a></li>
              <li><a href="">房地产行业</a></li>
              <li><a href="">政府机构</a></li>
              <li><a href="">短信平台</a></li>
              <li><a href="">餐饮行业</a></li>
            </ul>
          </div>
          <div class="footer-website-item">
            <h3>解决方案</h3>
            <ul>
              <li><a href="">金融行业</a></li>
              <li><a href="">医疗保健</a></li>
              <li><a href="">互联网+行业</a></li>
              <li><a href="">房地产行业</a></li>
              <li><a href="">政府机构</a></li>
              <li><a href="">短信平台</a></li>
              <li><a href="">餐饮行业</a></li>
            </ul>
          </div>
          <div class="footer-website-item">
            <h3>解决方案</h3>
            <ul>
              <li><a href="">金融行业</a></li>
              <li><a href="">医疗保健</a></li>
              <li><a href="">互联网+行业</a></li>
              <li><a href="">房地产行业</a></li>
              <li><a href="">政府机构</a></li>
              <li><a href="">短信平台</a></li>
              <li><a href="">餐饮行业</a></li>
            </ul>
          </div>
          <div class="footer-website-item special">
            <h3>解决方案</h3>
            <ul>
              <li><a href="">金融行业</a></li>
              <li><a href="">医疗保健</a></li>
              <li><a href="">互联网+行业</a></li>
              <li><a href="">房地产行业</a></li>
              <li><a href="">政府机构</a></li>
              <li><a href="">短信平台</a></li>
              <li><a href="">餐饮行业</a></li>
            </ul>
          </div>
          <div class="footer-website-item">
            <h3>关注沃淘</h3>
            <ul>
              <li>
                <img src="http://www.wo-tao.cn/img/QR_code.jpg" width="80" height="80">
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-copyright">
      <p>Copyright ©2013 - 2016  上海沃淘信息科技有限公司  沪ICP备16006747</p>
      <p>咨询热线：4006665168&nbsp;&nbsp;工作时间：08:30-18:00</p>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="stylus" scoped>
  @import '~common/stylus/variable'
  .footer
    width 100%
    background-color $color-footer-background
    color $color-footer-dt-color
    font-size $font-size-small
    .footer-website
      padding-top 30px
      padding-bottom 20px
      width 100%
      .container
        width 1130px
        margin 0 auto
        .inner
          width 100%
          font-size 0
          .footer-website-item
            float left
            width 20%
            box-sizing border-box
            h3
              font-size $font-size-medium
            ul
              margin-top 15px
              margin-bottom 15px
              li
                font-size $font-size-small
                line-height 1.8
                a
                  color $color-footer-dd-color
                  &:hover
                    // color $color-footer-theme-color
                    color $color-common-theme-color
    // .special
    //   border-right 1px solid $color-footer-line-color
    .footer-copyright
      width 1130px
      margin 0 auto
      padding-top 30px
      text-align left
      line-height 1.8
      font-size $font-size-medium
      border-top 1px solid $color-footer-line-color
      color $color-footer-dd-color

</style>

