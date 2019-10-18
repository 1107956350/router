<template>
  <div id="app">
    <div class="mask" v-show="isshow">
      <div class="mask-sure">
        <button v-for="(item,index) in istrue" :key="index">{{item}}</button>
      </div>
    </div>
    <div class="header">

    </div>
    <div class="main">
      <router-view/>
    </div>
    <div class="footer">
      <Footer />
    </div>
  </div>
</template>
<script>
import Footer from "./components/FooterBar"
export default {
  components:{
    Footer
  },
  data() {
    return {
      istrue:["确定","取消"],
      isshow:false
    }
  }
}
</script>

<style lang="scss">
*{
  padding: 0;
  margin: 0;
  list-style: none;
}
html,body{
  width: 100%;
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
}
.mask{
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,.6);
  position: fixed;
  top:0;
  left:0;
}
.header{
  width: 100%;
  height: 45px;
  background: #eee;
}
.main{
  flex:1;
}
.footer{
  width: 100%;
  height: 45px;
  background: #eee;
}
// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
