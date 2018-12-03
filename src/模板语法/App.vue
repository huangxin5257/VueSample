<template>
  <div id="app">
    <div class="row">
      <span v-once>{{message}}</span>
      <button v-on:click="updateData">修改数据</button>
      <span>{{message}}</span>
    </div>
    <div class="row">
      <p>Using mustaches: {{ rawHtml }}</p>
      <p>Using v-html directive: <span v-html="rawHtml"></span></p>
    </div>
    <div class="row">
      <p v-if="seen">现在你看到我了</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        message: "测试v-once",
        rawHtml: "<span style=\"color: #ff2177\">This should be red.</span>",
        seen: true
      }
    },
    methods: {
      updateData: function () {
        this.message = "Data is changed.";
        console.log("%c%s", "color:red" , "message数据被更新，但dom不会被修改");
      },
      destroyApp: function () {
        this.$destroy();
      }
    }
  };
</script>
