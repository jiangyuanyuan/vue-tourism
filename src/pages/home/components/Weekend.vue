<template>
  <div>
    <div class="weekend-title">周末游玩</div>
    <ul>
      <li class="weekend-item" v-for="item of list" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src='item.imgUrl'/>
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>

        </div>
      </li>

    </ul>

  </div>

</template>

<script>
  export default {
    name: "HomeWeekend",
    props: {
      list: Array
    }
  }
</script>

<style lang="stylus" scoped>
  @import "~@/assets/styles/mixins.styl"
  .weekend-title
    line-height: .8rem
    background: #eee
    text-indent: .2rem
    margin-top .2rem
  .item-img-wrapper
    overflow hidden
    height 0
    padding-bottom 33.9%
    .item-img
      width 100%
      padding .1rem
  .item-info
    min-width 0
    .item-title
      line-height .54rem
      font-size .32rem
      padding-left .1rem
      ellipsis()
    .item-desc
      line-height .4rem
      color #ccc
      padding-left .1rem
      ellipsis()
</style>
