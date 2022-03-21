<template>
  <section class="tags">
    <ul>
      <li v-for="[name, icon] in tags" :key="name">
        <div
          :class="{ selected: tag.indexOf(name) >= 0 }"
          @click="selectTag(name)"
        >
          <Icon :name="icon" />
        </div>
        <span>{{ name }}</span>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Tags extends Vue {
  @Prop(Array) readonly tags: string[] | undefined;
  @Prop({ default: "" }) readonly tag!: string;
  selectTag(name: string) {
    this.$emit("update:tag", name);
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/style/helper.scss";
.tags {
  flex-grow: 1;
  > ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 20px;

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
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: 1px solid;
        border-color: #e5e7eb;
        background: #f5f5f5;
        display: flex;
        justify-content: center;
        align-items: center;
        > svg {
          width: 32px;
          height: 32px;
        }
      }

      &:last-child {
        margin-right: auto;
      }
    }
  }
}
</style>
