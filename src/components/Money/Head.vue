<template>
  <header>
    <ul>
      <li class="selected"><strong>支出</strong></li>
      <li><strong>收入</strong></li>
    </ul>
    <Icon name="add" class="add" />
  </header>
</template>

<script lang="ts">
export default {
  name: "Head",
};
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
header {
  background: $color-theme;

  position: relative;
  > ul {
    height: 60px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    > li {
      margin-left: 25px;
      margin-right: 25px;
      font-size: 18px;
      font-family: $font-hei;
      position: relative;
      &.selected {
        color: $color-highlight;
      }
      &.selected::after {
        content: "";
        position: absolute;
        bottom: -10px;
        left: 0;
        height: 4px;
        width: 100%;
        background: $color-highlight;
      }
    }
  }

  > .add {
    position: absolute;
    right: 16px;
    bottom: 0;
    top: 0;
    margin: auto;
    width: 25px;
    height: 25px;
  }
}
</style>
