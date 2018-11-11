<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul>
      <li class="recommend-item" v-for="item of recommendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src='item.imgUrl'/>
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>

    </ul>

  </div>

</template>

<script>
    export default {
      name: "HomeRecommend",
      data () {
        return{
          recommendList: [
            {
              id:"0001",
              imgUrl:"https://img1.qunarzz.com/p/tts7/1805/88/73e98baf3ba5fe02.jpg_r_240x160x90_a17a75f9.jpg",
              title: "深圳华侨城",
              desc:"浪漫的华侨城，情侣约会必去,浪漫的游乐场"
            },{
              id:"0002",
              imgUrl:"https://img1.qunarzz.com/p/tts7/1805/88/73e98baf3ba5fe02.jpg_r_240x160x90_a17a75f9.jpg",
              title: "深圳华侨城",
              desc:"浪漫的华侨城，情侣约会必去,浪漫的游乐场"
            },{
              id:"0003",
              imgUrl:"https://img1.qunarzz.com/p/tts7/1805/88/73e98baf3ba5fe02.jpg_r_240x160x90_a17a75f9.jpg",
              title: "深圳华侨城",
              desc:"浪漫的华侨城，情侣约会必去,浪漫的游乐场"
            },{
              id:"0004",
              imgUrl:"https://img1.qunarzz.com/p/tts7/1805/88/73e98baf3ba5fe02.jpg_r_240x160x90_a17a75f9.jpg",
              title: "深圳华侨城",
              desc:"浪漫的华侨城，情侣约会必去,浪漫的游乐场"
            }
          ]
        }
      }
    }
</script>

<style lang="stylus" scoped>
  @import "~@/assets/styles/mixins.styl"
  .recommend-title
    line-height: .8rem
    background: #eee
    text-indent: .2rem
    margin-top .2rem
  .recommend-item
    overflow hidden
    display flex
    height 1.9rem
    .item-img
      width 1.7rem
      height 1.7rem
      padding .1rem
    .item-info
      flex 1
      min-width 0
      .item-title
        line-height .54rem
        font-size .32rem
        ellipsis()
      .item-desc
        line-height .4rem
        color #ccc
        ellipsis()
      .item-button
        line-height .44rem
        margin-top .16rem
        background #ff9300
        padding .02rem
        border-radius .06rem
        color #fff
        ellipsis()
</style>
