<template>
  <div class="advice shadow" @mousemove="showDetail" @mouseleave="closeDetail" >
    
    <div class="advice-item">
      <img src="https://img.alicdn.com/tfs/TB1ebBInxrI8KJjy0FpXXb5hVXa-56-38.png" class="advice-item-img" width="20" height="20">
    </div>
    <div class="advice-item">
      <img src="https://img.alicdn.com/tfs/TB1ebBInxrI8KJjy0FpXXb5hVXa-56-38.png" class="advice-item-img" width="20" height="20">
    </div>
    <div class="advice-item">
      <img src="https://img.alicdn.com/tfs/TB1ebBInxrI8KJjy0FpXXb5hVXa-56-38.png" class="advice-item-img" width="20" height="20">
    </div>
    <!-- item-special-phone -->
    <div class="detail-phone shadow active" ref="detailPhone">
      <input type="text" class="detail-phone-tel" v-model="phoneNum" @keyup="phoneNum=phoneNum.replace(/[^\d]/g,'')" maxlength="11">
      <!-- <input type="button" value="免费咨询" @click="counseling" class="detail-phone-btn"> -->
      <wt-button value="免费咨询" @click="counseling(2)"></wt-button>
      <p class="detail-phone-desc">输入号码后点击免费通话, 稍后您将接到我们的电话, 该通话对您完全免费, 请放心接听！</p>
    </div>
    <div class="detail-advice shadow" ref="detailAdvice"></div>
    <!-- item-special-1 -->

  </div>
</template>

<script>
import {addClass, removeClass} from 'common/js/dom'
import {isPhoneNum, isNum} from 'common/js/util'
import WtButton from 'base/button/button'
export default {
  data() {
    return {
      phoneNum: ''
    }
  },
  mounted() {
    this.timer = null
  },
  methods: {
    showDetail() {
      addClass(this.$refs.detailPhone, 'active')
    },

    closeDetail() {
    //   clearTimeout(this.timer)
    //   this.timer = setTimeout(() => {
    //     removeClass(this.$refs.detailPhone, 'active')
    //     console.log(this.timer)
    //   }, 30);
    },

    counseling(val) {  //咨询
      //发送ajax验证
      //...
      alert(val)
    }
    
  },
  components: {
    WtButton
  }
}
</script>

<style lang="stylus" scoped>
  @import '~common/stylus/variable'
  
  .advice
    position relative
    width 44px
    height 129px
    background-color $color-provide-advice-background
    
    // background-color #000
    .advice-item
      position relative
      width 100%
      height 43px
      border-radius 5px
      box-sizing border-box
      color red
      .advice-item-img
        position absolute
        left 0
        right 0
        top 0
        bottom 0
        margin auto
    .detail-phone
      position absolute
      right 50px
      bottom 0
      width 300px
      height 200px
      padding 20px
      // background-color $color-provide-advice-background
      background-color #fff
      visibility hidden
      box-sizing border-box
      .detail-phone-tel
        width 100%
        // background-color red
        height 30px
        border 1px solid #000
        margin-bottom 20px
        transition all .3s ease-in-out
        &:hover
          border 1px solid $color-provide-advice-background
      .detail-phone-desc
        margin-top 20px
        color $color-theme-sub
        font-size $font-size-small
        line-height 1.8
    .active
      visibility visible

</style>

