<template>
  <section class="tags">
    <ul>
      <li>
        <div class="tagIcon">
          <Icon name="clothes" active-class="selected" />
        </div>
        <span>服饰</span>
      </li>
      <li>
        <div class="tagIcon" active-class="selected">
          <Icon name="food" />
        </div>
        <span>餐饮</span>
      </li>
      <li>
        <div class="tagIcon">
          <Icon name="housing" active-class="selected" />
        </div>
        <span>住房</span>
      </li>
      <li>
        <div class="tagIcon">
          <Icon name="traffic" active-class="selected" />
        </div>
        <span>交通</span>
      </li>
      <li>
        <div class="tagIcon">
          <Icon name="fun" active-class="selected" />
        </div>
        <span>娱乐</span>
      </li>
      <li>
        <div class="tagIcon">
          <Icon name="clothes" active-class="selected" />
        </div>
        <span>服饰</span>
      </li>
      <li>
        <div class="tagIcon" active-class="selected">
          <Icon name="food" />
        </div>
        <span>餐饮</span>
      </li>
      <li>
        <div class="tagIcon">
          <Icon name="housing" active-class="selected" />
        </div>
        <span>住房</span>
      </li>
      <li>
        <div class="tagIcon">
          <Icon name="traffic" active-class="selected" />
        </div>
        <span>交通</span>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Tags extends Vue {}
</script>

<style lang="scss" scoped>
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

      & > .tagIcon {
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
