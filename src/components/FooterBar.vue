<template>
  <div class="app-footer">
    <router-link to="/">首页</router-link>
    <router-link to="/about">购物车</router-link>
    <router-link to="/vip">vip</router-link>
    <router-link to="/classify">分类</router-link>
    <router-link to="/mine">我的</router-link>
  </div>
</template>
<style lang="scss">
  .app-footer{
    width: 100%;
    height: 45px;
    display: flex;
    a{
      flex:1;
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
    }
  }
</style>