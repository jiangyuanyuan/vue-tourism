<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="iconfont header-left">&#xe60c;</div>
    </router-link>
  </div>
</template>

<script>
    export default {
        name: "CityHeader"
    }
</script>

<style lang="stylus" scoped>
  @import "~@/assets/styles/varibles.styl"
  .header
    position: relative
    width: 100%
    height .86rem
    line-height: .86rem
    text-align: center
    background:$bgColor
    color: #fff
    .header-left
      position: absolute
      top: 0
      left: 0
      width: .64rem
      font-size: .32rem
      color: #fff
</style>
