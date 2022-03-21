<template>
  <section class="notes">
    <input
      type="text"
      placeholder="点击输入备注..."
      @input="updateNotes($event.target.value)"
    />
    <span id="count">{{ amount }}</span>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Notes extends Vue {
  @Prop({ default: "0" }) readonly amount!: string;
  @Prop({ default: "" }) readonly notes!: string;
  updateNotes(notes: string) {
    this.$emit("update:notes", notes);
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
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

  > #count {
    padding-right: 10px;
    height: 100%;
    font-size: 20px;
    line-height: 2.5;
  }
}
</style>
