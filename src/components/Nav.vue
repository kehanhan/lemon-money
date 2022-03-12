<template>
  <nav>
    <router-link to="/labels" class="item" active-class="selected">
      <Icon iconName="labels" />
      标签</router-link
    >
    <router-link to="/add" class="item" active-class="selected">
      <Icon iconName="add" /> 记账</router-link
    >
    <router-link to="/stats" class="item" active-class="selected">
      <Icon iconName="stats" />
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

  > .item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2px 0;
  }
  > .item.selected {
    color: $color-highlight;
  }
  .icon {
    width: 32px;
    height: 32px;
  }
}
</style>
