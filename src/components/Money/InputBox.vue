<template>
  <div class="inputBox">
    <section class="notes">
      <input
        type="text"
        placeholder="点击输入备注..."
        @input="$emit('update:notes', $event.target.value)"
      />
      <span id="output">{{ output }}</span>
    </section>
    <section class="numpad">
      <button @click="inputContent">1</button>
      <button @click="inputContent">2</button>
      <button @click="inputContent">3</button>
      <button id="today">
        <Icon name="calender" />
        今天
        <el-date-picker
          v-model="date"
          type="date"
          value-format="yyyy-MM-dd"
        ></el-date-picker>
      </button>
      <button @click="inputContent">4</button>
      <button @click="inputContent">5</button>
      <button @click="inputContent">6</button>
      <button @click="inputContent">-</button>
      <button @click="inputContent">7</button>
      <button @click="inputContent">8</button>
      <button @click="inputContent">9</button>
      <button @click="inputContent">+</button>
      <button @click="inputContent">.</button>
      <button @click="inputContent">0</button>
      <button @click="deleteContent()">
        <Icon name="delete" />
      </button>
      <button id="confirm" @click="confirm">确认</button>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class InputBox extends Vue {
  @Prop({ default: 0 }) readonly amount!: number;
  @Prop({ default: "" }) readonly notes!: string;

  output = this.amount.toString();
  date = new Date().toISOString().split("T")[0];

  inputContent(event: MouseEvent) {
    const input = (event.target as HTMLButtonElement).textContent!;
    if (
      (this.output.length === 8 &&
        this.output.indexOf(".") < 0 &&
        input !== ".") ||
      (this.output.indexOf(".") >= 0 && input === ".") ||
      (this.output.indexOf(".") > 0 &&
        this.output.length - this.output.indexOf(".") > 2)
    ) {
      return;
    }

    if (this.output === "0" && "0123456789".indexOf(input) >= 0) {
      this.output = input;
    } else {
      this.output += input;
    }
  }

  deleteContent() {
    if (this.output.length === 1) {
      this.output = "0";
    } else {
      this.output = this.output.slice(0, -1);
    }
  }

  confirm() {
    if (this.output !== "0") {
      this.$emit("update:amount", parseFloat(this.output));
      this.$emit("update:date", this.date);
      this.$emit("submit");
      this.output = "0";
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/style/helper.scss";

.notes {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  background: #f0f4f7;

  .icon {
    margin-left: 16px;
    width: 28px;
    height: 28px;
  }

  > input {
    max-width: 75vw;
    flex-grow: 1;
    border: none;
    padding-left: 10px;
    height: 100%;
    background: transparent;
  }

  > #output {
    padding-right: 10px;
    height: 100%;
    font-size: 20px;
    line-height: 2.5;
  }
}

.numpad {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  > button {
    background: #f0f4f7;
    border: 1px solid #e5e7eb;
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

    & .el-date-editor {
      width: 25%;
      position: absolute;
      opacity: 0;
    }
  }

  #confirm {
    background: $color-theme;
  }
}
</style>
