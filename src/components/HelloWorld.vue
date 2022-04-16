<template>
  <h1>{{ msg }}</h1>
  <Comp />
  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VS Code</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

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
import { ref, defineProps, defineEmits ,getCurrentInstance} from "vue";
//1.直接导入组件
import Comp from "comps/Comp.vue";
//2.属性定义
const props = defineProps({
  msg: String,
});
//3.获取上下文
const ctx = getCurrentInstance()
 
//4.定义事件
const emit = defineEmits(["myclick"]);
const onclick = () => {
  // emit('myclick')
 ctx.emit('myclick')
};

const count = ref(0);
</script>
<style scoped>
a {
  color: #42b983;
}
</style>
