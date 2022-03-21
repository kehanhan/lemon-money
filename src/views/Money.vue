<template>
  <Layout classPrefix="money">
    <InputBox
      :notes.sync="record.notes"
      :amount.sync="record.amount"
      @submit="saveRecord"
    />
    <TagList :tag.sync="record.tag" :tagList="tagList" />
    <Type :type.sync="record.type" />
  </Layout>
</template>

<script lang="ts">
import InputBox from "@/components/Money/InputBox.vue";
import TagList from "@/components/Money/TagList.vue";
import Type from "@/components/Money/Type.vue";
import { Component, Vue, Watch } from "vue-property-decorator";

type Record = {
  tag: string;
  notes: string;
  type: string;
  amount: number;
  date?: Date;
};
@Component({
  components: { Type, TagList, InputBox },
})
export default class Money extends Vue {
  tagList = new Map([
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
    amount: 0,
  };
  recordList: Record[] = JSON.parse(
    window.localStorage.getItem("recordList") || "[]"
  );

  saveRecord() {
    const recordCopy = JSON.parse(JSON.stringify(this.record));
    recordCopy.date = new Date();
    this.recordList.push(recordCopy);
  }

  @Watch("recordList")
  onRecordListChanged() {
    window.localStorage.setItem("recordList", JSON.stringify(this.recordList));
  }
}
</script>

<style lang="scss">
.money-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>
