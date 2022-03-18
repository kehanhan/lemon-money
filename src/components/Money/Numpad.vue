<template>
  <section class="numpad">
    <button @click="inputContent">1</button
    ><button @click="inputContent">2</button
    ><button @click="inputContent">3</button
    ><button id="today">
      <Icon name="calender" />
      今天</button
    ><button @click="inputContent">4</button
    ><button @click="inputContent">5</button
    ><button @click="inputContent">6</button
    ><button @click="inputContent">-</button
    ><button @click="inputContent">7</button
    ><button @click="inputContent">8</button
    ><button @click="inputContent">9</button
    ><button @click="inputContent">+</button
    ><button @click="inputContent">.</button
    ><button @click="inputContent">0</button
    ><button @click="deleteContent()">
      <Icon name="delete" /></button
    ><button id="confirm">确认</button>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Numpad extends Vue {
  output = "0";

  inputContent(event: MouseEvent) {
    const input = (event.target as HTMLButtonElement).textContent!;
    if (
      this.output.length === 8 &&
      this.output.indexOf(".") < 0 &&
      input !== "."
    ) {
      return;
    }
    if (
      this.output.indexOf(".") > 0 &&
      this.output.length - this.output.indexOf(".") > 2
    ) {
      return;
    }
    if (this.output === "0") {
      if ("0123456789".indexOf(input) >= 0) {
        this.output = input;
      } else {
        this.output += input;
      }
      return;
    }
    if (this.output.indexOf(".") >= 0 && input === ".") {
      return;
    }
    this.output += input;
  }
  deleteContent() {
    if (this.output.length === 1) {
      this.output = "0";
    } else {
      this.output = this.output.slice(0, -1);
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.numpad {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  // background: #f6f6f6;
  > button {
    background: #f0f4f7;
    border: 1px solid;
    border-color: #e5e7eb;
    width: 25%;
    height: 45px;
    color: black;
  }
  .icon {
    width: 28px;
    height: 28px;
    margin-right: 5px;
  }
  #today {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #confirm {
    background: $color-theme;
  }
}
</style>
