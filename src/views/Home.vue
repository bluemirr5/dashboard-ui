<template>
  <div class="home">
    {{ hi }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

export default defineComponent({
  name: "Home",

  // components: { HelloWorld },

  props: {
    hi: {
      type: String,
    },
  },

  setup(props) {
    const test = "hello";
    window.console.log(test);

    window.console.log(props.hi);

    const examLongLongNameMethod = (s1: string, s2: string) => {
      console.log(s1 + ":" + s2);
    };

    examLongLongNameMethod(
      "asdfzxcvqwerasdfzxcvqdafasdfasdfwaaaaerxasdf",
      "qwerasdadsfasdffzxsadfasdfsadfasdfcvasdfqwerxczvqwer"
    );
  },
});
</script>
