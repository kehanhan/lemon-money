<template>
  <div class="wrapper">
    <header>
      <div class="text">
        <div class="back" @click="$router.push('/money')">
          <Icon name="back" />
          <span>返回</span>
        </div>
        <span class="title">类别设置</span>
      </div>
      <div class="types">
        <button :class="tagType === '-' && 'selected'" @click="selectType('-')">
          支出
        </button>
        <button :class="tagType === '+' && 'selected'" @click="selectType('+')">
          收入
        </button>
      </div>
    </header>
    <main>
      <ul v-if="tagType === '-'">
        <li v-for="tag in costTagList" :key="tag.name">
          <div>
            <Icon name="remove" @click.native="removeTag(tag.name)" />
            <Icon :name="tag.icon" />
          </div>
          <span>{{ tag.name }}</span>
        </li>
      </ul>
      <ul v-else-if="tagType === '+'">
        <li v-for="tag in incomeTagList" :key="tag.name">
          <div>
            <Icon name="remove" @click.native="removeTag(tag.name)" />
            <Icon :name="tag.icon" />
          </div>
          <span>{{ tag.name }}</span>
        </li>
      </ul>
    </main>
    <footer>
      <button id="addTag" @click="$router.push('/addTag')">添加类别</button>
    </footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Tags extends Vue {
  tagType = this.$store.getType();
  costTagList = this.$store.getTags("-");
  incomeTagList = this.$store.getTags("+");

  selectType(type: "-" | "+") {
    this.tagType = type;
    this.$store.setType(type);
  }

  removeTag(name: string) {
    this.$store.removeTag(name);
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/style/helper.scss";

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
}

header {
  width: 100%;
  min-height: 80px;
  background: $color-theme;

  > div {
    text-align: center;
  }

  .text {
    margin: 8px auto;
  }

  .back {
    position: absolute;
    left: 5px;
    top: 10px;

    & .icon {
      font-size: 20px;
    }
  }

  .title {
    font-size: 18px;
  }

  .types > button {
    width: 40vw;
    border: 1px solid black;
    padding: 2px 0;
    background: $color-theme;

    &:first-child {
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
      border-right: none;
    }

    &:last-child {
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
    }

    &.selected {
      background: black;
      color: $color-theme;
    }
  }
}

main {
  flex-grow: 1;
  width: 100%;
  overflow: auto;

  & li {
    border: 1px solid #eee;
    display: flex;
    align-items: center;
    line-height: 2;

    div {
      font-size: 26px;

      svg {
        margin: 0 5px;
      }
    }
  }
}

footer {
  button {
    width: 100vw;
    background: white;
    height: 50px;
    border: none;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  }
}
</style>
