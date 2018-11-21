<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-left">&#xe60c;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题</div>
    <router-link to="/city">
      <div class="header-right">
        {{this.$store.state.city}}
        <span class="iconfont">&#xe6aa;</span>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'HomeHeader',
  props:{
    city:String
  }
}
</script>

<style lang="stylus" scoped>
  @import "~@/assets/styles/varibles.styl"
  .header
    display: flex
    line-height: .86rem
    background $bgColor
    color #fff
    .header-left
      width: .64rem
      float: left
      .back-left
        text-align center
        font-size .32rem
    .header-right
      min-width: 1.04rem
      float: right
      text-align center
      padding-left .1rem
      color: #fff
    .header-input
      flex: 1
      height .64rem
      border-radius .1rem
      margin-top .12rem
      margin-left .2rem
      padding-left .2rem
      line-height .64rem
      background #fff
      color #ccc
</style>
