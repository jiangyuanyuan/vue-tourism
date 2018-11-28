<template>
  <div>
    <router-link tag="div" to="/" class="header-abs" v-show="showAbs" :style="absOpacityStyle">
      <div class="iconfont header-abs-back">&#xe60c;</div>
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">景区详情
      <router-link to="/">
        <div class="iconfont header-fixed-left">&#xe60c;</div>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "header",
    data() {
      return {
        showAbs: true,
        opacityStyle: {
          opacity: 0
        },
        absOpacityStyle:{
          opacity: 1
        }
      }
    },
    methods: {
      handleScroll() {
        const top = document.documentElement.scrollTop
        if (top > 60) {
          let opacity = top/140
          opacity = opacity>1?1:opacity
          this.opacityStyle = {opacity}
          this.showAbs = false
        } else {
          let opacity = top/30
          opacity = opacity>1?1:opacity
          let abs = 1-opacity
          this.absOpacityStyle = {abs}
          this.showAbs = true
        }
      }
    },
    activated() {
      window.addEventListener('scroll', this.handleScroll)
    }
  }
</script>

<style lang="stylus" scoped>
  @import "~@/assets/styles/varibles.styl"
  .header-abs
    position fixed
    left .2rem
    top .2rem
    width .8rem
    height .8rem
    z-index 1
    line-height .8rem
    border-radius .4rem
    text-align center
    background rgba(0, 0, 0, 0.8)
    .header-abs-back
      color #fff
      font-size .4rem

  .header-fixed
    position: fixed
    top 0
    left 0
    right 0
    width: 100%
    height .86rem
    z-index 1
    line-height: .86rem
    text-align: center
    background: $bgColor
    font-size .32rem
    color: #fff
    .header-fixed-left
      position: absolute
      top: 0
      left: 0
      width: .64rem
      font-size: .32rem
      color: #fff
</style>
