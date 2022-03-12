<template>
  <nav>
    <router-link to="/labels" class="item">
      <Icon iconName="labels" />
      标签</router-link
    >
    <router-link to="/add" class="item">
      <Icon iconName="add" /> 记账</router-link
    >
    <router-link to="/stats" class="item">
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
nav {
  // border: 1px solid red;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  // font-size: 12px;
  > .item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2px 0;
  }
  .icon {
    width: 32px;
    height: 32px;
  }
}
</style>
