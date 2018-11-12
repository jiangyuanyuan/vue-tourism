<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl"/>
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
  export default {
    // data(){
    //   return {
    //     imgPage:[]
    //   }
    // },
    name: "HomeIcons",
    props: {
      list: Array
    },
    // created(){
    //   this.pages();
    // },
    // methods:{
    //   pages() {
    //     var _this = this;
    //     //const pages = [];
    //     console.log(this.list)
    //
    //     _this.list.forEach((item, index) => {
    //       const page = Math.floor(index / 8)
    //       if (!_this.imgPage[page]) {
    //         _this.imgPage[page] = []
    //       }
    //       _this.imgPage[page].push(item)
    //     });
    //
    //     console.log(_this.imgPage)
    //     //return pages
    //   }
    // },
    computed: {
      pages() {
        const pages = []
        this.list.forEach((item, index) => {
          const page = Math.floor(index / 8)
          if (!pages[page]) {
            pages[page] = []
          }
          pages[page].push(item)
        })
        return pages
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import "~@/assets/styles/varibles.styl"
  @import "~@/assets/styles/mixins.styl"
  .icons > > >  .swiper-container
    width: 100%
    overflow: hidden
    height: 0
    padding-bottom 50%

  .icons
    width: 100%
    overflow: hidden
    height: 0
    padding-bottom 50%
    margin-top .1rem
    .icon
      position: relative
      overflow: hidden
      width: 25%
      height: 0
      padding-bottom 25%
      float: left
      .icon-img
        position: absolute
        top: 0
        left: 0
        right: 0
        box-sizing: border-box
        padding: .1rem
        bottom: .44rem
        .icon-img-content
          height: 100%
          display: block
          margin: 0 auto
      .icon-desc
        position: absolute
        left: 0
        right: 0
        bottom: 0
        line-height: .44rem
        text-align: center
        color: $darkTextColor
        ellipsis()
</style>
