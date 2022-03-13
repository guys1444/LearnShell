<template>
  <layout-default>
    <div class="Home">
      <div id="app">
        <h2>Choose your Shell</h2>
        <br />
        <router-link to="linux/grep">
          <img
            id="shell"
            src="https://img.icons8.com/dusk/64/000000/linux.png"
          />
        </router-link>
        <img
          id="shell"
          src="https://img.icons8.com/dusk/64/000000/windows8.png"
        />

        <img
          id="shell"
          src="https://img.icons8.com/dusk/64/000000/mac-os.png"
        />
      </div>
    </div>
  </layout-default>
</template>
<script>
import LayoutDefault from "../layouts/LayoutDefault.vue";

export default {
  name: `Home`,
  components: {
    LayoutDefault,
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Ubuntu&display=swap");
body {
  background-color: #111223;
}
#app {
  font-family: "Ubuntu", sans-serif;
  text-align: center;
  color: hsl(0deg 0% 100% / 88%);
  margin-top: 60px;
}

/* CSS */
.button-74 {
  background-color: #fbeee0;
  border: 2px solid #422800;
  border-radius: 30px;
  box-shadow: #422800 4px 4px 0 0;
  color: #422800;
  display: inline-block;
  font-weight: 600;
  font-size: 22px;
  padding: 0 18px;
  line-height: 50px;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  font-family: "Ubuntu", sans-serif;
}

.button-74:hover {
  background-color: #fff;
}

.button-74:active {
  box-shadow: #422800 2px 2px 0 0;
  transform: translate(2px, 2px);
}

@media (min-width: 768px) {
  .button-74 {
    min-width: 120px;
    padding: 0 25px;
  }
}
#shell {
  padding: 10px;
}
</style>