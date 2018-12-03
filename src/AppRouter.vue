<template>
  <div id="app">
    <h1>Vue Test</h1>
    <p >
      <!-- 使用 router-link 组件来导航. -->
      <!-- 通过传入 `to` 属性指定链接. -->
      <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
     <router-link v-for="menu in routes" v-bind:to="menu.path" class="menu">{{menu.title}}</router-link>
    </p>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
    <div>
      <button v-on:click="gotoBack" >Go Back</button>
      <button v-on:click="gotoNext" >Go Next</button>
    </div>
  </div>
</template>

<script>

  import {routes} from "./router-config";

  export default {
    name: 'app',
    data() {
      return {
        routes: routes
      }
    },
    methods: {
      gotoNext : function () {
        let router = this.$router;
        router.go(1);
      },
      gotoBack : function () {
        let router = this.$router;
        router.go(-1);
      },
    }
  };
</script>
<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 10px;
  }

  .row {
    border: 1px solid #eee;
    padding: 5px;
    margin: 5px;
  }
  .menu {

    padding: 5px;
  }

</style>
