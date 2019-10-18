<template>
  <div class="about">
    
    <ul>
      <li v-for="(item,index) in getStateData" :key="index">
        <p>名称：{{item.name}}</p>
        <p>价格：{{item.price}}</p>
        <p>
          <span @click="removeClick(item,index)">-</span>
          <span>{{item.count}}</span>
          <span @click="addClick(item,index)">+</span>
        </p>
       
      </li>
    </ul>
    <h1>总价：{{gettotal}}</h1>
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    addClick(item,index){
      this.$store.commit("addClick",index)
    },
    removeClick(item,index){
      this.$store.commit("removeClick",index)
    }
  },
  computed:{
    //获取vuex传过来的数据
    getStateData(){
      return this.$store.state.cartData
    },
    gettotal(){
      return this.$store.getters.getTotal
    }
  }
}
</script>
<style lang="scss">
  .about{
    width: 100%;
    ul{
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      li{
        width: 45%;
        height: 100px;
        margin:5px;
        p{
          text-align: center;
          span{
          padding:10px 15px;
          background: #eee;
          margin-left: 5px;
          border-radius: 5px;
          text-align: center;
          line-height: 30px;
        }
        }

        
      }
    }
  }
</style>