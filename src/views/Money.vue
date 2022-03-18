<template>
  <Layout classPrefix="money">
    <Numpad />
    <Notes />
    <Tags :dataSource="tags" />
    <Head />
  </Layout>
</template>

<script lang="js">
import Numpad from "@/components/Money/Numpad.vue";
import Notes from "@/components/Money/Notes.vue";
import Tags from "@/components/Money/Tags.vue";
import Head from "@/components/Money/Head.vue";
export default {
  name: "Money",
  components: { Head, Tags, Notes, Numpad },
  data(){
    let tags = new Map([
      ['clothes',"服饰"],
      ['food',"餐饮"],
      ['housing',"住房"],
      ['traffic',"交通"],
      ['fun','娱乐']
    ])
    return {
      tags
    }
  }
};
</script>

<style lang="scss">
.money-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>
