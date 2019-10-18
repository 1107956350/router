<template>
  <div class="list">
    <ul>
      <li v-for="(item,index) in cartData" :key="index">
        <p>{{item.name}}</p>
        <span @click="clickAdd(item)"> + </span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props:{
    cartData:Array
  },
  methods: {
    clickAdd(item){
      this.$store.commit("clickAdd",item)
     
    }
  },
}
</script>
<style lang="scss">
    .list{
      width: 100%;
      ul{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        li{
          width: 45%;
          margin:5px;
          height: 60px;
          text-align: center;
          span{
            display: inline-block;
            width: 30px;
            height: 30px;
            border-radius: 5px;
            background: red;
            color:#000;
          }
        }
      }
    }
</style>