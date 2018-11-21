<template>
  <div>
    <div class="search">
      <input v-model="keyword" class="search-input" type="text" placeholder="输入你的城市"/>
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li  class="search-item border-bottom" v-for="item of list" :key="item.id" @click="handleCityClick(item.name)">{{item.name}}</li>
        <li  class="search-item border-bottom" v-show="hasNoData">没有匹配到数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import BScroll from "better-scroll"
  export default {
    name: "search",
    props:{
      cities:Object
    },
    data(){
      return {
        keyword:'',
        list:[],
        timer:null
      }
    },

    mounted(){
      this.scroll = new BScroll(this.$refs.search)

    },
    computed:{
      hasNoData(){
        return !this.list.length
      }

    },
    methods:{
      handleCityClick(city){
        // alert(name)
        this.$store.commit('changeCity',city)
        this.keyword = ''
      }
    },
    watch:{
      keyword(){
        if (this.timer){
          clearTimeout(this.timer)
        }
        if (!this.keyword){
          this.list = []
          return
        }
        this.timer = setTimeout(()=>{
          const result =[]
          for (let i in this.cities){
            this.cities[i].forEach((value)=>{
              if (value.spell.indexOf(this.keyword)>-1||
              value.name.indexOf(this.keyword)>-1){
                result.push(value)
              }
            })
          }
          this.list = result
        },100)
      }
    }
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
  .search-content
    overflow hidden
    position absolute
    top 1.68rem
    left 0
    right 0
    bottom 0
    background #eee
    z-index 1
    .search-item
      line-height .62rem
      padding-left .2rem
      color #666
      background #fff
</style>
