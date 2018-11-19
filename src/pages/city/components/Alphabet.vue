<template>
   <ul class="list">
    <li class="item" v-for="(item,key) of cities" :key="key">{{key}}</li>

   </ul>
</template>

<script>
    export default {
        name: "alphabet",
      props:{
        cities: Object
      }
    }
</script>

<style lang="stylus" scoped>
  @import "~@/assets/styles/varibles.styl"
  .list
    display flex
    flex-direction column
    justify-content center
    position absolute
    right 0
    top 1.58rem
    bottom 0
    .item
      text-align center
      line-height .4rem
      padding-right .1rem
      color $bgColor

</style>
