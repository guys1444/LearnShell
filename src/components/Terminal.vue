<template>
  <vue-command class="ter" :commands="commands" />
</template>

<script>
import VueCommand, { createStdout } from "vue-command";
import "vue-command/dist/vue-command.css";

export default {
  components: {
    VueCommand,
  },

  data: () => ({
    commands: {
      echo: () => createStdout("Hello world"),
    },
  }),
};
</script>
<style>
.ter {
  margin: 30px;
}
.vue-command .term-bar {
  background: #422800;
  border-bottom: 1px solid #252525;
  display: block;
  height: 32px;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  top: 0;
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
</style>