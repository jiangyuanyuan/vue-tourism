<template>
  <div>
    <detail-header></detail-header>
    <detail-banner></detail-banner>
    <div class="content">内容</div>
  </div>
</template>

<script>
  import DetailBanner from './components/Banner'
  import DetailHeader from './components/Header'
    export default {
      name: "Detail",
      components:{
        DetailBanner,
        DetailHeader
      }
    }
</script>

<style lang="stylus" scoped>
  .content
    height 50rem
</style>
