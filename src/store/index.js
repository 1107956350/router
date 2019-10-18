import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    cartData:JSON.parse(localStorage.getItem("cartGoods"))||[],
    total:0
  },
  mutations: {
    clickAdd(state,item){
      let goods = state.cartData.find(val=>val.id==item.id)
      if(goods){
        goods.count++
      }else{
        state.cartData.push({
          name:item.name,
          price:item.price,
          id:item.id,
          count:1
        })
      }
    },
    addClick(state,index){
      state.cartData[index].count++
    },
    removeClick(state,index){
      if(state.cartData[index].count<=1){
        state.cartData.splice(index,1)
        return
      }
      state.cartData[index].count--
    }
  },
  getters:{
    getTotal(state){
      state.total = 0;
      state.cartData.forEach(item=>{
        state.total+=item.count * item.price
      })
      return state.total
    }
  },
  actions: {
  },
  modules: {
  }
})


store.subscribe((mutations,state)=>{
  localStorage.setItem("cartGoods",JSON.stringify(state.cartData))
})

export default store