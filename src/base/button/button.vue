<template>
  <!-- <input type="button" class="customer-btn" :width="width" :height="height" :value="value"> -->
  <input type="button" class="customer-btn" :style="style" :value="value" @click="clickBtn">
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: '默认按钮'
    },
    width: {
      type: Number,
      default: 100
    },
    height: {
      type: Number,
      default: 30
    }
  },
  data() {
    return {
      style: {
        width: `${this.width}px`,
        height: `${this.height}px`
      }
    }
  },
  methods: {
    clickBtn() {
      this.$emit('click')
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~common/stylus/variable'
  input
    display block
    background-color #fff
    font-size $font-size-small
    border 1px solid #000
    margin 0 auto
    transition all .3s ease-in-out
    &:hover
      border 1px solid $color-provide-advice-background
      color $color-provide-advice-background

</style>
