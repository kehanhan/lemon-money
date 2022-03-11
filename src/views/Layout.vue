<template>
  <div class="pageWrapper">
    <main>
      <slot />
    </main>

    <Nav />
  </div>
</template>

<script>
export default {
  name: "Layout",
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
