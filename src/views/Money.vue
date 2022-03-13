<template>
  <Layout classPrefix="money">
    <section class="numpad">
      <button>1</button><button>2</button><button>3</button
      ><button id="today">
        <Icon name="calender" />
        今天</button
      ><button>4</button><button>5</button><button>6</button><button>-</button
      ><button>7</button><button>8</button><button>9</button><button>+</button
      ><button>.</button><button>0</button
      ><button>
        <Icon name="delete" /></button
      ><button id="confirm">确认</button>
    </section>
    <section class="notes">
      <Icon name="edit" />
      <input type="text" placeholder="点击输入备注..." />
      <span id="count">100</span>
    </section>
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

    <header>
      <ul>
        <li class="selected"><strong>支出</strong></li>
        <li><strong>收入</strong></li>
      </ul>
      <Icon name="add" class="add" />
    </header>
  </Layout>
</template>

<script lang="ts">
export default {
  name: "Money",
};
</script>

<style lang="scss">
.money-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>
<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

header {
  background: $color-theme;

  position: relative;
  > ul {
    height: 60px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    > li {
      margin-left: 25px;
      margin-right: 25px;
      font-size: 18px;
      font-family: $font-hei;
      position: relative;
      &.selected {
        color: $color-highlight;
      }
      &.selected::after {
        content: "";
        position: absolute;
        bottom: -10px;
        left: 0;
        height: 4px;
        width: 100%;
        background: $color-highlight;
      }
    }
  }

  > .add {
    position: absolute;
    right: 16px;
    bottom: 0;
    top: 0;
    margin: auto;
    width: 25px;
    height: 25px;
  }
}
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
.notes {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  background: #f6f6f6;
  .icon {
    margin-left: 16px;
    width: 28px;
    height: 28px;
  }
  > input {
    flex-grow: 1;
    border: none;
    padding-left: 16px;
    height: 100%;
    background: transparent;
    font-family: $font-song;
  }

  > #count {
    padding-right: 16px;
    height: 100%;
    font-size: 32px;
    color: $color-highlight;
  }
}
.numpad {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  // font-weight: bold;
  background: #f6f6f6;
  > button {
    background: #f0f4f7;
    border: 1px solid;
    border-color: #e5e7eb;
    width: 25%;
    height: 45px;
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
