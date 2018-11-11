<template>
  <div>
    <div class="weekend-title">周末游玩</div>
    <ul>
      <li class="weekend-item" v-for="item of weekendList" :key="item.id">
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
    data() {
      return {
        weekendList: [
          {
            id: "0001",
            imgUrl: "https://img1.qunarzz.com/p/tts5/1811/8a/aa40b8ca73bf8102.jpg_r_240x160x90_12370edb.jpg",
            title: "深圳华侨城",
            desc: "浪漫的华侨城，情侣约会必去,浪漫的游乐场"
          }, {
            id: "0002",
            imgUrl: "https://img1.qunarzz.com/p/tts7/1805/88/73e98baf3ba5fe02.jpg_r_240x160x90_a17a75f9.jpg",
            title: "深圳华侨城",
            desc: "浪漫的华侨城，情侣约会必去,浪漫的游乐场"
          }, {
            id: "0003",
            imgUrl: "https://img1.qunarzz.com/p/tts5/1811/8a/aa40b8ca73bf8102.jpg_r_240x160x90_12370edb.jpg",
            title: "深圳华侨城",
            desc: "浪漫的华侨城，情侣约会必去,浪漫的游乐场"
          }, {
            id: "0004",
            imgUrl: "https://img1.qunarzz.com/p/tts7/1805/88/73e98baf3ba5fe02.jpg_r_240x160x90_a17a75f9.jpg",
            title: "深圳华侨城",
            desc: "浪漫的华侨城，情侣约会必去,浪漫的游乐场"
          }
        ]
      }
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
