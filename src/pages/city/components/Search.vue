<template>
  <div class="search">
    <input class="search-input" type="text" placeholder="输入你的城市"/>
  </div>
</template>

<script>
    export default {
        name: "search"
    }
</script>

<style lang="stylus" scoped>
  @import "~@/assets/styles/varibles.styl"
  .search
    height .72rem
    padding .1rem
    background $bgColor
    .search-input
      width 97%
      height .62rem
      line-height .62rem
      text-align center
      border-radius .06rem
      padding 0 .1rem
      color #666
</style>
