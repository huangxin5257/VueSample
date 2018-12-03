<template>
  <div id="app">
    <div class="row" v-on:click="doClickRow">
      <!-- 阻止单击事件继续传播 -->
      <button v-on:click.stop="doClickButton">阻止单击事件继续传播 </button>
      <!-- 添加事件监听器时使用事件捕获模式 -->
      <!-- 即元素自身触发的事件先在此处理，然后才交由内部元素进行处理 -->
      <div v-on:click.capture="doCapture">
        <button v-on:click="doClickButton">添加事件监听器时使用事件捕获模式</button>
      </div>
      <!-- 只当在 event.target 是当前元素自身时触发处理函数 -->
      <!-- 即事件不是从内部元素触发的 -->
      <div v-on:click.self="doSelf">self div
        <button v-on:click="doClickButton">只当在 event.target 是当前元素自身时触发处理函数</button>
      </div>
      <div v-on:scroll.passive="onScroll" style="width: 200px;height: 300px;border: 4px solid red;overflow: scroll;">
        通常来说就是滚动当前页面（还可能是缩放页面），如果它的默认行为被阻止了，页面就必须静止不动。但浏览器无法预先知道一个监听器会不会调用 preventDefault()，它能做的只有等监听器执行完后再去执行默认行为，而监听器执行是要耗时的，有些甚至耗时很明显，这样就会导致页面卡顿。视频里也说了，即便监听器是个空函数，也会产生一定的卡顿，毕竟空函数的执行也会耗时。

        视频里还说了，有 80% 的滚动事件监听器是不会阻止默认行为的，也就是说大部分情况下，浏览器是白等了。所以，passive 监听器诞生了，passive 的意思是“顺从的”，表示它不会对事件的默认行为说 no，浏览器知道了一个监听器是 passive 的，它就可以在两个线程里同时执行监听器中的 JavaScript 代码和浏览器的默认行为了。</div>
        <div>{{counter}}</div>
      <div @click.ctrl="doCtrlEnter">Ctrl+Click</div>
      <input @keydown.ctrl.enter="doCtrlEnter"></input>
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
        seen: true,
        counter: 0
      }
    },
    methods: {
      doClickButton: function () {
        console.log("%c%s", "color:red" , "doClickButton");
      },
      doClickRow: function () {
        console.log("%c%s", "color:red" , "doClickRow");
      },
      doCapture: function () {
        console.log("%c%s", "color:red" , "doCapture");
      },
      doSelf: function () {
        console.log("%c%s", "color:red" , "doSelf");
      },
      doCtrlEnter: function () {
        console.log("%c%s", "color:red" , "doCtrlEnter");
      },
      onScroll: function () {
        for (var i = 0; i < 1000000; i++) {
       //  console.log("%c%s", "color:red" , "onScroll-"+i);
          this.counter ++;
        }
      }
    }
  };
</script>


