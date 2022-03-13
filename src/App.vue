<template>
  <div class="App">
    <router-view />
  </div>
</template>

<script>
export default {
  name: `App`,
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Ubuntu&display=swap");
* {
  font-family: "Ubuntu", sans-serif;
  margin: 0;
  padding: 0;
}

html {
  line-height: 1.6;
  color: #333;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
}

p {
  &:not(:first-child) {
    margin-top: 1.25em;
  }
}
</style>
