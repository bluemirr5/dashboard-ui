<template>
  <div class="home">
    {{ hi }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

export default defineComponent({
  name: "Home",

  components: { HelloWorld },

  props: {
    hi: {
      type: String,
    },
  },

  setup(props) {
    window.console.log("hello");
    window.console.log(props.hi);
  },
});
</script>
