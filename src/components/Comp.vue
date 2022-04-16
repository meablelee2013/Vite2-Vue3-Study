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
        <h3 onClick={onclick}>{couter.value}</h3>
      </>
    );
  },
};
</script>

<style lang="scss" scoped></style>
