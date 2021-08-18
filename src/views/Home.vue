<template>
  <div class="home">
    {{ hi }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",

  props: {
    hi: {
      type: String,
    },
  },

  setup(props) {
    window.console.log(props.hi);
  },
});
</script>
