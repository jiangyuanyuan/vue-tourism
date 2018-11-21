<template>
   <ul class="list">
    <li class="item"
        v-for="(item) of letters"
        :key="item"
        @click="handletterClick"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        :id="item"
    >{{item}}</li>

   </ul>
</template>

<script>
    export default {
      name: "alphabet",
      props:{
        cities: Object
      },
      data(){
        return{
          touchStatus: false,
          timer:null
        }
      },
      computed:{
        letters(){
          const letters = []
          for (let i in this.cities){
            letters.push(i)
          }
          return letters
        }
      },
      methods:{
        handletterClick(e){
          this.$emit('change',e.target.innerText)
        },
        handleTouchStart(){
          this.touchStatus = true
        },
        handleTouchMove(e){
          if(this.touchStatus){
            if(this.timer){
              clearTimeout(this.timer)
            }
            this.timer = setTimeout( () =>{
              const startY = document.getElementById("A").offsetTop
              const touchY = e.targetTouches[0].clientY
              const index = Math.floor((touchY - startY)/20)
              if (index>=0 && index< this.letters.length){
                this.$emit('change',this.letters[index])
              }
            },16)

          }
        },
        handleTouchEnd(){
          this.touchStatus = false
        }
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
