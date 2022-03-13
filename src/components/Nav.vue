<template>
  <nav>
    <router-link to="/labels" class="item" active-class="selected">
      <Icon name="labels" />
      标签</router-link
    >
    <router-link to="/money" class="item" active-class="selected">
      <Icon name="money" /> 记账</router-link
    >
    <router-link to="/stats" class="item" active-class="selected">
      <Icon name="stats" />
      统计</router-link
    >
  </nav>
</template>

<script lang="ts">
export default {
  name: "Nav",
};
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
nav {
  // border: 1px solid red;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  height: 60px;
  > .item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2px 0;
  }
  > .item.selected {
    color: $color-theme;
  }
  .icon {
    width: 25px;
    height: 25px;
  }
}
</style>
