<template>
  <div id="app">
    <alert-box>
      {{message}}
    </alert-box>
  </div>
</template>

<script>
  import Vue from 'vue'
  
  Vue.component('alert-box', {
    template: `
    <div class="demo-alert-box">
      <strong>Error!</strong>
      <slot></slot>
    </div>
  `
  });

  export default {
    name: 'app',
    data() {
      return {
        message: "Something bad happened."
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
<style>

  .demo-alert-box {
    padding: 10px 20px;
    background: #f3beb8;
    border: 1px solid #f09898;
  }
</style>
