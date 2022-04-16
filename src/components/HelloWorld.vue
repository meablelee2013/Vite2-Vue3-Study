<template>
  <h1>{{ msg }}</h1>
  <Comp />
  <h1 @click="$store.commit('add')">{{$store.state.counter}}</h1>
  
  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Documentation
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button type="button" @click="count++">count is: {{ count }}</button>
  <button @click="onclick">emit</button>
</template>

<script setup>
import { ref, getCurrentInstance, defineProps } from "vue";
//1.直接导入组件
import Comp from "comps/Comp.vue";
//2.属性定义
const props = defineProps({
  msg: String,
});
//3.获取上下文
const ctx = getCurrentInstance();

//通过defineExpose 将组件内的方法对外暴露
defineExpose({
  someMethod() {
    console.log("some method from helloworld");
  },
});

//4.定义事件
const emit = defineEmits(["myclick"]);

const onclick = () => {
  // emit('myclick')
  ctx.emit("myclick");
};

fetch("/api/getUser")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  });

const count = ref(0);
</script>
<style scoped>

</style>
