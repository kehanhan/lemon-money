<template>
  <div class="pageWrapper">
    <main :class="classPrefix && `${classPrefix}-content`">
      <slot />
    </main>

    <Nav />
  </div>
</template>

<script>
export default {
  name: "Layout",
  props: ["classPrefix"],
};
</script>

<style lang="scss" scoped>
.pageWrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
main {
  overflow: auto;
  flex-grow: 1;
}
</style>
