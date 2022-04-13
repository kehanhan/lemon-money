<template>
  <div>
    <router-view />
  </div>
</template>

<script lang="js">
export default {
  data() {
    return {
      store: this.$store
    }
  }
}
</script>

<style lang="scss">
@import "assets/style/reset";
@import "assets/style/helper";

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
  line-height: 1.5;
  font-family: $font-hei;
  height: 100vh;
}
</style>
