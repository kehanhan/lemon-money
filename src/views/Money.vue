<template>
  <Layout classPrefix="money">
    <Numpad />
    <Notes />
    <Tags />
    <Head />
  </Layout>
</template>

<script lang="ts">
import Numpad from "@/components/Money/Numpad.vue";
import Notes from "@/components/Money/Notes.vue";
import Tags from "@/components/Money/Tags.vue";
import Head from "@/components/Money/Head.vue";
export default {
  name: "Money",
  components: { Head, Tags, Notes, Numpad },
};
</script>

<style lang="scss">
.money-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>
