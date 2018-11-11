<template>
    <div class="icons">
      <swiper >
        <swiper-slide v-for="(page,index) of pages" :key="index">
          <div class="icon"v-for="item of page" :key ="item.id">
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
        name: "HomeIcons",
        data () {
          return{
            iconsList:[
              {
                id:"0001",
                imgUrl: "http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png",
                desc:"热门景点"
              },
              {
                id:"0002",
                imgUrl: "http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png",
                desc:"滑雪季"
              },
              {
                id:"0003",
                imgUrl: "http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png",
                desc:"泡温泉"
              },
              {
                id:"0004",
                imgUrl: "http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png",
                desc:"热门景点"
              },
              {
                id:"0005",
                imgUrl: "http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png",
                desc:"热门景点"
              },
              {
                id:"0006",
                imgUrl: "http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png",
                desc:"热门景点"
              },
              {
                id:"0007",
                imgUrl: "http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png",
                desc:"热门景点"
              },
              {
                id:"0008",
                imgUrl: "http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png",
                desc:"热门景点"
              },{
                id:"0009",
                imgUrl: "http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png",
                desc:"哈哈哈大发送到发送到"
              }
            ]
          }
        },
      computed: {
          pages () {
            const pages = []
            this.iconsList.forEach((item,index)=>{
              const page = Math.floor(index/8)
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
  .icons >>> .swiper-container
    width: 100%
    overflow: hidden
    height: 0
    padding-bottom 50%
  .icons
    width: 100%
    overflow: hidden
    height: 0
    padding-bottom 50%
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
