<template>
  <section class="tag_list">
    <ul>
      <li v-for="[name, icon] in tagList" :key="name">
        <div
          :class="{ selected: tag.indexOf(name) >= 0 }"
          @click="select(name)"
        >
          <Icon :name="icon" />
        </div>
        <span>{{ name }}</span>
      </li>
      <li>
        <div @click="setting">
          <Icon name="setting" />
        </div>
        <span>设置</span>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class TagList extends Vue {
  @Prop(Array) readonly tagList: string[] | undefined;
  @Prop({ default: "" }) readonly tag!: string;
  select(name: string) {
    this.$emit("update:tag", name);
  }
  setting() {
    this.$router.replace("/Tags");
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/style/helper.scss";
.tag_list {
  flex-grow: 1;
  overflow: auto;
  > ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 10px;

    > li {
      width: 20%;
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 12px;
      margin-top: 10px;

      & div.selected {
        background: $color-theme;
      }

      & > div {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        border: 1px solid;
        border-color: #e5e7eb;
        background: #f5f5f5;
        display: flex;
        justify-content: center;
        align-items: center;
        & .icon {
          font-size: 36px;
        }
      }

      &:last-child {
        margin-right: auto;
      }
    }
  }
}
</style>
