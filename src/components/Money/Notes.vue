<template>
  <section class="notes">
    <Icon name="edit" />
    <input type="text" placeholder="点击输入备注..." />
    <span id="count">100</span>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Notes extends Vue {}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.notes {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  background: #f6f6f6;
  .icon {
    margin-left: 16px;
    width: 28px;
    height: 28px;
  }
  > input {
    flex-grow: 1;
    border: none;
    padding-left: 16px;
    height: 100%;
    background: transparent;
  }

  > #count {
    padding-right: 16px;
    height: 100%;
    font-size: 32px;
    color: $color-highlight-red;
  }
}
</style>
