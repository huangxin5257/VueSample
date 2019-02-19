// 1. 定义 (路由) 组件。
import PageTemplate from './模板语法/App.vue'
import PageEvent from './事件机制/App.vue'
import PageSample from './零散练习/App.vue'
import PageBasicComponent from './组件基础/App.vue'
import PageForm from './表单输入绑定/App.vue'
import PageSolt from './插槽/App.vue'
import PageVuexStatus from './Vuex状态/App.vue'
import ElementUI from './ElementUI/App.vue'

export const routes = [
  { path: '/template', component: PageTemplate , title: '模板语法'},
  { path: '/sample', component: PageSample , title: '零散练习' },
  // { path: '/router', component: PageRouter  , title: 'Router'},
  { path: '/basic-component', component: PageBasicComponent , title: '组件基础' },
  { path: '/form', component: PageForm  , title: '表单绑定'},
  { path: '/event', component: PageEvent , title: '事件机制' },
  { path: '/solt', component: PageSolt , title: '插槽' },
  { path: '/vuex-status', component: PageVuexStatus , title: 'Vuex状态' },
  { path: '/element-ui', component: ElementUI , title: 'Element UI' },
];
