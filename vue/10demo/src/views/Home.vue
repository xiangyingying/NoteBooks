<template>
  <div class="home">
    <h2>todoList</h2>
    <input type="text" v-model="keyword" @keyup.enter="handleEnter" />
    <div v-for="item of arr" :key="item.word">
      <input type="checkbox" v-model="item.checked" />
      {{item.word}}
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      keyword: "",
      arr: []
    };
  },
  /* [{word:"vue",checked:false},{word:"react",checked:false}] */
  methods: {
    handleEnter() {
      /* localStorge值只能是字符串 JSON.stringify JSON.parse  */
      this.arr.push({ word: this.keyword, checked: false });
      var words = JSON.parse(localStorage.getItem("words"));
      words.push({ word: this.keyword, checked: false });
      localStorage.setItem("words", JSON.stringify(words));
    }
  },
  mounted() {
    let words = localStorage.getItem("words");
    if (words) {
      this.arr = JSON.parse(words);
    } else {
      localStorage.setItem("words", "[]");
    }
  },
  watch: {
    arr: {
      handler(newVal) {
        var words = JSON.parse(localStorage.getItem("words"));
        words = newVal;
        localStorage.setItem("words", JSON.stringify(words));
      },
      deep: true
    }
  }
};
</script>