<template>
  <header>
    <ul>
      <li :class="type === '-' && 'selected'" @click="selectType('-')">
        <strong>支出</strong>
      </li>
      <li :class="type === '+' && 'selected'" @click="selectType('+')">
        <strong>收入</strong>
      </li>
    </ul>
    <Icon name="add" class="add" />
  </header>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class Head extends Vue {
  type = "-"; //"-"表示支出,"+"表示收入
  selectType(type: string) {
    if (type !== "+" && type !== "-") {
      throw new Error("type is unknown");
    }
    this.type = type;
  }
}
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
        color: $color-highlight-red;
      }
      &.selected::after {
        content: "";
        position: absolute;
        bottom: -10px;
        left: 0;
        height: 4px;
        width: 100%;
        background: $color-highlight-red;
      }
      &:last-child.selected {
        color: $color-highlight-green;
      }
      &:last-child.selected::after {
        background: $color-highlight-green;
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
