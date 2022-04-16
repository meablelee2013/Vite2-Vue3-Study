<script lang="jsx">
import { ref } from "vue";

export default {
  setup() {
    const couter = ref(0);

    const onclick =() =>{
      couter.value++
    }

    return () => (
      <>
        <div>Comp</div>
        <h1 onClick={onclick}>{couter.value}</h1>
      </>
    );
  },
};
</script>

<style lang="scss" scoped></style>
