<template>
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
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Numpad extends Vue {}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.numpad {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background: #f6f6f6;
  > button {
    background: #f0f4f7;
    border: 1px solid;
    border-color: #e5e7eb;
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
  }
  #confirm {
    background: $color-theme;
  }
}
</style>
