<template>
  <div class="home">
    <Swiper />
    <CartBar :cartData="cartData" />
  </div>
</template>

<script>
// @ is an alias to /src
import Swiper from "../components/Swiper"
import CartBar from "../components/CartBar"

export default {
  name: 'home',
  components: {
    Swiper,
    CartBar
  },
  data() {
    return {
      cartData:[]
    }
  },
  created() {
    this.getCartData()
  },
  methods: {
    getCartData(){
      this.$axios.get("/cartList").then(res=>{
        this.cartData = res.data
      })  
    }
  },
}
</script>
