<template>
  <div>
    <header>
      <div class="text">
        <span class="back">
          <Icon name="back" />
          <span @click="back">返回</span>
        </span>
        <span class="title">添加支出类别</span>
        <span class="complete">完成</span>
      </div>
      <div class="edit">
        <div id="selectedIcon" class="tagIcon">
          <Icon name="clothes" />
        </div>
        <input type="text" placeholder="请输入类别名称(不超过4个汉字)" />
      </div>
    </header>
    <main>
      <ul>
        <li>
          <div class="tagIcon">
            <Icon name="fun" />
          </div>
        </li>
        <li>
          <div class="tagIcon">
            <Icon name="fun" />
          </div>
        </li>
        <li>
          <div class="tagIcon">
            <Icon name="fun" />
          </div>
        </li>
        <li>
          <div class="tagIcon">
            <Icon name="fun" />
          </div>
        </li>
        <li>
          <div class="tagIcon">
            <Icon name="fun" />
          </div>
        </li>
        <li>
          <div class="tagIcon">
            <Icon name="fun" />
          </div>
        </li>
        <li>
          <div class="tagIcon">
            <Icon name="fun" />
          </div>
        </li>
      </ul>
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class AddTag extends Vue {
  back() {
    this.$router.replace("/tags");
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/style/helper.scss";
.tagIcon {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 1px solid #e5e7eb;
  display: flex;
  justify-content: center;
  align-items: center;
  & .icon {
    font-size: 36px;
  }
}

header {
  .text {
    background: $color-theme;
    min-height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    & .back {
      margin-left: 5px;
      & .icon {
        font-size: 20px;
      }
    }
    & .title {
      padding-right: 15px;
      font-size: 18px;
    }
    & .complete {
      padding-right: 15px;
    }
  }
  .edit {
    display: flex;
    border-bottom: 1px solid #e5e7eb;
    #selectedIcon {
      margin: 10px;
      background: $color-theme;
    }
    & input {
      padding-left: 5px;
      font-size: 16px;
      flex-grow: 1;
      border: none;
    }
  }
}
main {
  overflow: auto;
  & > ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 10px;
    & li {
      width: 20%;
      margin-top: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      &:last-child {
        margin-right: auto;
      }
      & div.selected {
        background: $color-theme;
      }
    }
  }
}
</style>
