<template>
  <div id="app">
    <h1>Hello App!</h1>
    <p>
      <!-- 使用 router-link 组件来导航. -->
      <!-- 通过传入 `to` 属性指定链接. -->
      <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
      <router-link to="/foo">Go to Foo</router-link>
      <router-link to="/bar">Go to Bar</router-link>
      <router-link to="/user/1">Go to User</router-link>
    </p>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
    <div>
      <button v-on:click="gotoPage" >Go to</button>
      <button v-on:click="gotoBack" >Go Back</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    methods: {
      gotoPage : function () {
        let router = this.$router;
        const id = '123';

        // router.push({ path: `/user/2/posts` }) // -> /user/123/posts

        router.push({ path: `/user/${id}/posts` }) // -> /user/123/posts
       // router.push({ path: '/user', params: { id }}); // -> /user
      },
      gotoBack : function () {
        let router = this.$router;
        router.go(-1);
      },
    }
  };
</script>
