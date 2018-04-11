<template>
  <div class="swiper-container" ref="swiperContainer">
    <div class="swiper-wrapper">
      <div class="swiper-slide slide1"><span class="animated pulse">Slide1</span></div>
      <div class="swiper-slide slide2"><span class="animated pulse">Slide2</span></div>
      <div class="swiper-slide slide3"><span class="animated pulse">Slide3</span></div>
      <div class="swiper-slide slide4"><span class="animated pulse">Slide4</span></div>
      <div class="swiper-slide slide5"><span class="animated pulse">Slide5</span></div>
      <div class="swiper-slide slide6"><span class="animated pulse">Slide6</span></div>
      <div class="swiper-slide slide7"><span class="animated pulse">Slide7</span></div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  export default {
    data() {
      return {
        isShow: 'none'
      }
    },
    mounted() {
      this.swiper = new Swiper(this.$refs.swiperContainer, {
        effect: 'fade',
        loop: true,
        slideShadows: true,
        shadow: true,
        zoom: true,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          dynamicBullets: true,
          dynamicMainBullets: 2,
          clickable :true,
          currentClass : 'aaa',
        },
        navigation: {
          // nextEl: '.swiper-button-next',
          // prevEl: '.swiper-button-prev',
        }
      })
    },
    methods: {
    }
  }
</script>

<style lang="stylus" scoped>
  .swiper-container
    width 100%
    height 500px
    .swiper-wrapper
      .swiper-slide
        font-size 40px
        text-align center
        line-height 500px
        span 
          display none
      .swiper-slide-active
        span 
          font-weight bold
          display block
      .slide1
        background-color grey
      .slide2
        background-color pink
      .slide3
        background-color lightblue
      .slide4
        background-color lightgreen
      .slide5
        background-color #4fc08d
      .slide6
        background-color #409eff
      .slide7
        background-color #24184f
      span
        display inline-block
        color green
        font-size 50px
  
</style>

