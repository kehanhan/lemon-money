<template>
  <div>
    <header>
      <div class="text">
        <span class="back">
          <Icon name="back"/>
          <span @click="$router.replace('/tag-setting')">返回</span>
        </span>
        <span v-if="tagType === '-'" class="title">添加支出类别</span>
        <span v-else-if="tagType === '+'" class="title">添加收入类别</span>
        <span class="complete" @click="complete">完成</span>
      </div>
      <div class="edit">
        <div id="selectedIcon" class="tagIcon">
          <Icon :name="selectedIcon"/>
        </div>
        <input
            v-model="tagName"
            placeholder="请输入类别名称(不超过4个汉字)"
            type="text"
        />
      </div>
    </header>
    <main>
      <ul>
        <li v-for="icon in tagIcons" :key="icon">
          <div
              :class="{ selected: icon === selectedIcon }"
              class="tagIcon"
              @click="selectedIcon = icon"
          >
            <Icon :name="icon"/>
          </div>
        </li>
      </ul>
    </main>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";

@Component
export default class AddTag extends Vue {
  tagIcons = this.$store.tagIcons;
  tagType = this.$store.tagType;
  selectedIcon = "clothes";
  tagName = "";

  complete() {
    this.$store.newTag(this.tagName, this.selectedIcon) &&
    this.$router.replace("/tag-setting");
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/style/helper";

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
