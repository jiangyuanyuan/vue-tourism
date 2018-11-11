<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
    <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl"/>
      </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>

    </swiper>
  </div>
</template>

<script>
  export default {
      name: "HomeSwiper",
      data () {
          return {
            swiperOption:{
              pagination:'.swiper-pagination'
            },
            swiperList:[
              {
                id: '0001',
                imgUrl: 'http://img1.qunarzz.com/qs/1809/64/62160a38d119c202.jpg'
              },
              {
                id: '0002',
                imgUrl: 'http://img1.qunarzz.com/qs/1811/c7/0cf33c74b936c802.jpg'
              }

            ]
          }
      }
    }
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background : #fff
  .wrapper
    width: 100%
    height: 0
    padding-bottom: 31.25%
    background: #eee
    .swiper-img
      width: 100%

</style>
