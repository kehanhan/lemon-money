<template>
  <div class="wrapper">
    <header>
      <div class="text">
        <div class="back" @click="back">
          <Icon name="back" />
          <span>返回</span>
        </div>
        <span class="title">类别设置</span>
      </div>
      <div class="types">
        <button class="selected">支出</button><button>收入</button>
      </div>
    </header>
    <main>
      <ul>
        <li>
          <div>
            <Icon name="remove" />
            <Icon name="clothes" />
          </div>
          <span>服饰</span>
        </li>
        <li>
          <div>
            <Icon name="remove" />
            <Icon name="clothes" />
          </div>
          <span>服饰</span>
        </li>
        <li>
          <div>
            <Icon name="remove" />
            <Icon name="clothes" />
          </div>
          <span>服饰</span>
        </li>
        <li>
          <div>
            <Icon name="remove" />
            <Icon name="clothes" />
          </div>
          <span>服饰</span>
        </li>
      </ul>
    </main>
    <footer>
      <button id="addTag" @click="addTag">添加类别</button>
    </footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Tags extends Vue {
  back() {
    this.$router.replace("/money");
  }
  addTag() {
    this.$router.replace("/addTag");
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/style/helper.scss";
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
