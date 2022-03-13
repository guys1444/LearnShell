<template>
  <layout-default>
    <div id="app">
      <h1>Grep - Print lines that match patterns</h1>
      <h2 class="heading">Choose Option</h2>
      <select class="input" v-model="choice">
        <option value="--help">--help Output a usage message and exit.</option>
        <option value="-V">
          -V, --version Output the version number of grep and exit.
        </option>
        <option value="-E">
          -E, --extended-regexp Interpret "PATTERNS" as extended regular
          expressions
        </option>
        <option value="--F">
          -F, --fixed-strings Interpret "PATTERNS" as fixed strings, not regular
          expressions.
        </option>
        <option value="--G">
          -G, --basic-regexp Interpret "PATTERNS" as basic regular expressions.
        </option>
        <option value="--P">
          -P, --perl-regexp Interpret I "PATTERNS" as Perl-compatible regular
          expressions.
        </option>
        <option value="-w">
          -w, --word-regexp Select only those lines containing matches that form
          whole words.
        </option>
        <option value="--help">
          -C NUM, -NUM, --context=NUM Print NUM lines of output context.
        </option>
      </select>
      <br /><br />
      String
      <input class="input" v-model="string" placeholder="String" />
      File Name
      <input class="input" v-model="file" placeholder="File Name" />
      <h1 id="grep">grep {{ choice }} {{ string }} {{ file }}</h1>
      <button class="button-74" @click="copy">Copy</button>
      <button class="button-74" @click="cleardata">Clear Data</button>
    </div>
    <Terminal />
  </layout-default>
</template>

<script>
import LayoutDefault from "@/layouts/LayoutDefault.vue";
import Terminal from "@/components/Terminal.vue";

export default {
  name: `Grep`,
  data() {
    return {
      choice: " ",
      string: " ",
      file: " ",
    };
  },
  methods: {
    cleardata() {
      console.log("Clear Data");
      this.choice = "";
      this.string = "";
      this.file = "";
    },
    copy() {
      const copyText = document.getElementById("grep").innerText;
    },
  },
  components: {
    LayoutDefault,
    Terminal,
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
  margin: 10px;
}

.button-74:hover {
  background-color: #fff;
}

.button:active {
  box-shadow: #422800 2px 2px 0 0;
  transform: translate(2px, 2px);
}

@media (min-width: 768px) {
  .button-74 {
    min-width: 120px;
    padding: 0 25px;
  }
}

.input {
  border-radius: 30px;
}
.heading {
  margin: 10px;
}
</style>