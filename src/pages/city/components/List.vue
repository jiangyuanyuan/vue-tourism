<template>
  <div class="list" ref="wrapper">
    <div class="content">
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.$store.state.city}}</div>
          </div>

        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list" >
          <div class="button-wrapper" v-for="item of hot" :key="item.id"
          @click="handleCityClick(item.name)">
            <div class="button">{{item.name}}</div>
          </div>

        </div>
      </div>
      <div class="area" v-for="(item , key) of cities" :key="key" :id="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div class="item border-bottom" v-for="innerItem of item" :key="innerItem.id">
            {{innerItem.name}}
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import BScroll from "better-scroll"

  export default {
    name: "CityList",
    props:{
      hot:Array,
      cities:Object,
      letter:String,
    },

    watch:{
      letter(){
        if(this.letter){
          console.log("打印了"+this.letter)
          // const element = this.$refs[this.letter]
          const element = document.getElementById(this.letter)
          this.scroll.scrollToElement(element)
        }
      }
    },

    methods:{
      handleCityClick(city){
        // alert(name)
        this.$store.commit('changeCity',city)
      }

    },
    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper)
    }
  }
</script>

<style lang="stylus" scoped>
  @import "~@/assets/styles/varibles.styl"
  .border-topbottom
    &:befroe
      border-color: #ccc
    &:after
      border-color: #ccc

  .border-bottom
    &:befroe
      border-color: #ccc

  .list
    overflow: hidden
    position: absolute
    top: 1.68rem
    left: 0
    right: 0
    bottom: 0
    .title
      line-height .54rem
      background #eee
      color #666
      padding-left .2rem
      font-size .26rem
    .button-list
      padding .1rem .6rem .1rem .1rem
      overflow hidden
      .button-wrapper
        float left
        width 33.33%
        .button
          text-align center
          margin .1rem
          border .02rem solid #ccc
          padding .1rem 0
          border-radius .06rem
    .item-list
      .item
        line-height .54rem
        padding-left .2rem
        color #666
</style>
