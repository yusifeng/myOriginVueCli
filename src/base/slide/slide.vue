<template>
  <div class="swiper-container" ref="swiperContainer">
    <div class="swiper-wrapper"  >
      <div class="swiper-slide slide1">
        <div class="container">
          <slogen class="slogen animated slideInUp"></slogen>
        </div>
      </div>
      <div class="swiper-slide slide2">
        <div class="container">
          <slogen class="slogen animated slideInUp"></slogen>
        </div>
      </div>
      <div class="swiper-slide slide3">
        <div class="container">
          <slogen class="slogen animated slideInUp"></slogen>
        </div>
      </div>
      <div class="swiper-slide slide4">
        <div class="container">
          <slogen class="slogen animated slideInUp"></slogen>
        </div>
      </div>
      <div class="swiper-slide slide5">
        <div class="container">
          <slogen class="slogen animated slideInUp"></slogen>
        </div>
      </div>
      <div class="swiper-slide slide6">
        <div class="container">
          <slogen class="slogen animated slideInUp"></slogen>
        </div>
      </div>
      <div class="swiper-slide slide7">
        <div class="container">
          <slogen class="slogen animated slideInUp"></slogen>
        </div>
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
  // import Swiper from 'swiper'
  import Slogen from 'components/slogen/slogen'
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
      prevent(e) {
        console.log(1)
        e.stopPropagation()
      }
    },

    components: {
      Slogen
    }
  }
</script>

<style lang="stylus" scoped>
  .swiper-container
    width 100%
    height 500px
    .swiper-wrapper
      width 100%
      font-size 0
      .swiper-slide
        position relative
        .slogen
          display none
          position absolute
          top 145px
          left 0px
        .animated 
          -webkit-animation-duration: .1s;
          animation-duration .7s
          -webkit-animation-fill-mode both
          animation-fill-mode both
        .slideInUp
          -webkit-animation-name re-banner-slide-20
          animation-name re-banner-slide-20

      .slide1
        background-image linear-gradient(-180deg, #2b68c3 0%, #4fc08d8a 100%)
        // background-image linear-gradient(-180deg, #2b68c3 0%, #4fc08d 100%)
      .slide2
        background-image linear-gradient(-180deg, #2b68c3 0%, #c08d8a 100%)
        background-image linear-gradient(-180deg, #2b68c3 0%, #c08d8a 100%)
      .slide3
        background-image linear-gradient(-180deg, #1a1454 0%, #0e81a5 100%)
        // style="background-image: linear-gradient(-180deg, #1a1454 0%, #0e81a5 100%) ;"
      .slide4
        background-color lightgreen
      .slide5
        // background-color #4fc08d
        background-image linear-gradient(-180deg, #91C31D 0%, #BBE250 100%)
      .slide6
        background-color #409eff
      .slide7
        background-color #24184f
      .swiper-slide-active > .container > .slogen
        display inline-block

@keyframes slideInUppp {
  from {
    -webkit-transform: translate3d(0, -10%, 0);
    transform: translate3d(0, -10%, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes re-banner-slide-20 {
	0% {
		opacity: 0;
		-webkit-transform: translate3d(0,20px,0);
		transform: translate3d(0,20px,0)
	}

	to {
		opacity: 1;
		-webkit-transform: translateZ(0);
		transform: translateZ(0)
	}
}
</style>

