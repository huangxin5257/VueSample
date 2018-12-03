import Vue from 'vue'
import VueRouter from 'vue-router'

// import App from './App.vue'
// import App from './Vue生命周期.vue'
// import App from './Vue模板语法.vue'
 import App from './AppRouter.vue'
//import App from './Vue事件.vue'

Vue.use(VueRouter);

// 1. 定义 (路由) 组件。
// 可以从其他文件 import 进来
const Foo = {
  template: '<div>foo</div>'
};
const Bar = { template: '<div>bar</div>' };
const User = {
  props: ['id'],
  template: `
    <div class="user">
      <h2>User {{ id }}</h2>
      <router-link to="/user/:id/profile">Profile</router-link>
      <router-link to="posts">Posts</router-link>
      <router-view></router-view>
    </div>
  `,
  beforeRouteEnter (to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
    console.debug('beforeRouteEnter');
    console.debug(to);
    console.debug(from);
    next();
  },
  beforeRouteUpdate (to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
    console.debug('beforeRouteUpdate');
    console.debug(to);
    console.debug(from);
    next();
  },
  beforeRouteLeave (to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    console.debug('beforeRouteLeave');
    console.debug(to);
    console.debug(from);
    next();
  }
};
const UserProfile = { template: '<div>Profile {{ $route.params.id }}</div>' };
const UserPosts = { template: '<div>Posts {{ $route.params.id }}</div>' };



// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar },
  { path: '/user/:id', component: User,
    children: [
      {
        // 当 /user/:id/profile 匹配成功，
        // UserProfile 会被渲染在 User 的 <router-view> 中
        path: 'profile',
        name: 'profile',
        component: UserProfile
      },
      {
        // 当 /user/:id/posts 匹配成功
        // UserPosts 会被渲染在 User 的 <router-view> 中
        path: 'posts',
        name: 'posts',
        component: UserPosts
      }
    ]
  }
];

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
});

/*
router.beforeEach((to, from, next) => {
  console.debug('beforeEach');
  next();
});
router.beforeResolve((to, from, next) => {
  console.debug('beforeResolve');
  next();
});
router.afterEach((to, from) => {
  console.debug('afterEach')
});*/

new Vue({
  router,
  el: '#app',
  render: (h) => h(App)
});
