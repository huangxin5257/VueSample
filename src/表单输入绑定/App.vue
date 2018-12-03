<template>
  <div id="app">
      <div class="row">
      <input v-model="message" placeholder="edit me">
      <p>Message is: {{ message }}</p>
      </div>

      <div class="row">
      <input type="checkbox" id="checkbox" v-model="checkbox.checked"  true-value="yes"
             false-value="no">
      <label for="checkbox">{{ checkbox.checked }}</label>

      </div>
      <div class="row">
        <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
        <label for="jack">Jack</label>
        <input type="checkbox" id="john" value="John" v-model="checkedNames">
        <label for="john">John</label>
        <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
        <label for="mike">Mike</label>
        <br>
        <span>Checked names: {{ checkedNames }}</span>
      </div>

      <div class="row">
        <input type="radio" id="one" value="One" v-model="picked">
        <label for="one">One</label>
        <br>
        <input type="radio" id="two" value="Two" v-model="picked">
        <label for="two">Two</label>
        <br>
        <span>Picked: {{ picked }}</span>

        <input type="radio" v-model="picked" v-bind:value="message">
      </div>

    <div class="row">
      <select v-model="selected">
        <option disabled value="">请选择</option>
        <option v-for="option in options" v-bind:value="option.value">
          {{ option.text }}
        </option>
      </select>
      <span>Selected: {{ selected }}</span>
    </div>

    <div class="row">
      <input v-model.lazy.trim="message" placeholder="edit me">
      <p>Message is: {{ message }}</p>
      <input v-model.number="age" type="number">
      <p>Age is: {{ age }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        message: "",
        checkbox: {
          checked: 'yes'
        },
        checkedNames: [],
        picked: '',
        options: [
          { text: 'One', value: 'A' },
          { text: 'Two', value: 'B' },
          { text: 'Three', value: 'C' }
        ],
        age: null,
        selected: ""
      }
    },
    methods: {
      doClickButton: function () {
        console.log("%c%s", "color:red" , "doClickButton");
      }
    }
  };
</script>
