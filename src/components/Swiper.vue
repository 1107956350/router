<template>
  <swiper :options="swiperOption" v-if="dataList.length">
    <swiper-slide v-for="(item,index) in dataList" :key="index">
      <img :src="item.imageUrl" alt="">
    </swiper-slide>  
    <div class="swiper-pagination"></div>    
  </swiper>
</template>
<script>
import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  components:{
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption:{
        autoplay:true,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
        }       
      },
       
      dataList:[]
    }
  },
  created() {
    this.getData()
  },
  methods:{
    getData(){
      this.$axios.get("/getdata").then(res=>{
        this.dataList = res.data.list.pageModules[0].dataList
        console.log(res.data.list.pageModules[0].dataList)
      })
    }
  }
}
</script>
<style lang="scss">
.swiper-container{
  width: 100%;
  height: 200px;
  .swiper-wrapper{
    width: 100%;
    height: 100%;
    .swiper-slide{
      width: 100%;
      height: 100%;
      img{
        width: 100%;
        height: 100%;
      }
    }
  }

}
  
</style>