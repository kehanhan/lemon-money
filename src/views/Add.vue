<template>
  <Layout>
    <div class="tags">
      <ul>
        <li>服饰</li>
        <li>餐饮</li>
        <li>住房</li>
        <li>交通</li>
      </ul>
      <button>添加</button>
    </div>
    <div class="note">
      <input type="text" placeholder="点击输入备注..." />
    </div>
    <div class="options">
      <button>昨天</button>
      <button>今天</button>
      100
    </div>
    <div class="numpad">
      <button>1</button><button>2</button><button>3</button><button>x</button
      ><button>4</button><button>5</button><button>6</button><button>-</button
      ><button>7</button><button>8</button><button>9</button><button>+</button
      ><button>清空</button><button>0</button><button>.</button
      ><button>保存</button>
    </div>
  </Layout>
</template>

<script lang="ts">
export default {
  name: "Add",
};
</script>
