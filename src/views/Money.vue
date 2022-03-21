<template>
  <Layout classPrefix="money">
    <Numpad :amount.sync="record.amount" />
    <Notes :notes.sync="record.notes" :amount="record.amount" />
    <Tags :tag.sync="record.tag" :tags="tags" />
    <Type :type.sync="record.type" />
    {{ record }}
  </Layout>
</template>

<script lang="ts">
import Numpad from "@/components/Money/Numpad.vue";
import Notes from "@/components/Money/Notes.vue";
import Tags from "@/components/Money/Tags.vue";
import Type from "@/components/Money/Type.vue";
import { Component, Vue } from "vue-property-decorator";

type Record = {
  tag: string;
  notes: string;
  type: string;
  amount: string;
};
@Component({
  components: { Type, Tags, Notes, Numpad },
})
export default class Money extends Vue {
  tags = new Map([
    ["服饰", "clothes"],
    ["餐饮", "food"],
    ["住房", "housing"],
    ["交通", "traffic"],
    ["娱乐", "fun"],
  ]);
  record: Record = {
    tag: "",
    notes: "",
    type: "-",
    amount: "0",
  };
}
</script>

<style lang="scss">
.money-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>
