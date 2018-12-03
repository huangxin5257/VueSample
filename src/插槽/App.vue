<template>
  <div id="app">
    <base-layout v-bind:user="user">

      <p>A paragraph for the main content.</p>

      <todo-list v-bind:todos="todos">
        <template slot-scope="{ todo }">
          <span v-if="todo.isComplete">✓</span>
          {{ todo.text }}
        </template>
      </todo-list>

      <template slot="footer">
        <p>Here's some contact info</p>
      </template>
    </base-layout>
  </div>
</template>

<script>
  import Vue from 'vue'
  
  Vue.component('base-layout', {
    props: ['user'],
    template: `
    <div class="container" >
      <header>
        <slot name="header">Welcome {{user.username}}</slot>
      </header>
      <main>
        <slot></slot>
      </main>
      <footer>
        <slot name="footer"></slot>
      </footer>
    </div>
  `
  });

  Vue.component('todo-list', {
    props: ['todos'],
    template: `
  <ul>
    <li
      v-for="todo in todos"
      v-bind:key="todo.id"
    >
      <slot v-bind:todo="todo">
      </slot>
      </li>
  </ul>
  `
  });

  export default {
    name: 'app',
    data() {
      return {
        message: "Something bad happened.",
        user: {
          username: 'Alex Huang'
        },
        todos: [
          {isComplete:true, text:'This is a complete item.'},
          {isComplete:false, text:'This is not a complete item.'}
        ]
      }
    },
    methods: {
      updateData: function () {
        this.message = "Data is changed.";
        console.log("%c%s", "color:red" , "message数据被更新，但dom不会被修改");
      }
    }
  };
</script>
<style lang="scss">


</style>
