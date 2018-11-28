<template>
  <div class="container" @click="handleGallaryClick">
    <div class="wrapper">
      <!--<swiper >-->
        <!--&lt;!&ndash; slides &ndash;&gt;-->
        <!--<swiper-slide >-->
          <!--<img class="swiper-img"-->
               <!--src="http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_800x800_70debc93.jpg"/>-->
        <!--</swiper-slide>-->
        <!--&lt;!&ndash;<div class="swiper-pagination"  slot="pagination"></div>&ndash;&gt;-->
      <!--</swiper>-->
      <swiper :options="swiperOptions">
        <!-- slides -->
        <swiper-slide v-for="(item,index) in imgs" >
          <img class="gallary-img" :src="item" :key="index"/>
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
    export default {
      name: "gallary",
      props:{
        imgs:Array
      },
      data(){
        return{
          swiperOptions:{
            pagination: '.swiper-pagination',
            paginationType: 'fraction'
          }
        }
      },
      methods:{
        handleGallaryClick(){
          this.$emit('gallaryclose')
        }
      }
    }
</script>

<style lang="stylus" scoped>
  .container >>> .swiper-container
     overflow inherit
  .container
    display flex
    flex-direction column
    justify-content center
    z-index 99
    position fixed
    left 0
    right 0
    top 0
    bottom 0
    background #000
    .wrapper
      height 0
      width 100%
      padding-bottom 100%
      background #fff
      .gallary-img
        width 100%
      .swiper-pagination
        color #fff
        bottom -2rem


</style>
