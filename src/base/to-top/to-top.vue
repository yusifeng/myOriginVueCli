<template>
    <div class='page-component-up shadow' v-show='isShow' @click='goToTop'>
      返回顶部
    </div>
</template>
<script>
const MIN_LENGTH_ICON_SHOW = 500
export default {
  name: 'BackTop',
  data() {
    return {
      isShow: false,
      target: ''
    }
  },
  methods: {
    showIcon () {
      if (this.htmlElement.scrollTop > MIN_LENGTH_ICON_SHOW) {
        this.isShow = true
        return 
      } else if (this.htmlElement.scrollTop < MIN_LENGTH_ICON_SHOW) {
        this.isShow = false
        return
      }
    },
    goToTop() {
        this.htmlElement.scrollTop = 0
    }
  },
  mounted() {
    this.htmlElement = document.documentElement
    window.addEventListener('scroll',this.showIcon)
  },
  beforeDestroy() {
    this.target.removeEventListener('scroll', this.showIcon)
  }
}
</script>


<style lang="stylus" stylerel="stylesheet/scss">
  .page-component-up
    position fixed
    right 10px
    bottom 20px
    width 40px
    height 40px
    background-color #fff
    transition background-color .3s
    &:hover
      background-color red
</style>

