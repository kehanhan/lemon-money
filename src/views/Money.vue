<template>
  <Layout classPrefix="money">
    <InputBox
      :notes.sync="record.notes"
      :amount.sync="record.amount"
      @submit="pushRecord"
    />
    {{ record }}
    <TagList
      v-if="record.type === '-'"
      :selectedTag.sync="record.tag"
      :tagList="costTagList"
    />
    <TagList
      v-else-if="record.type === '+'"
      :selectedTag.sync="record.tag"
      :tagList="incomeTagList"
    />
    <Type :type.sync="record.type" />
  </Layout>
</template>

<script lang="ts">
import InputBox from "@/components/Money/InputBox.vue";
import TagList from "@/components/Money/TagList.vue";
import Type from "@/components/Money/Type.vue";
import { Component, Vue, Watch } from "vue-property-decorator";
import recordListModel from "@/models/recordListModel";

@Component({
  components: { Type, TagList, InputBox },
})
export default class Money extends Vue {
  costTagList = window.costTagList;
  incomeTagList = window.incomeTagList;
  recordList: RecordItem[] = recordListModel.fetch();
  record: RecordItem = {
    tag: { name: "服饰", icon: "clothes" },
    notes: "",
    type: "-",
    amount: 0,
  };

  pushRecord() {
    recordListModel.push(this.record, this.recordList);
  }
  @Watch("record.type")
  onRecordTypeChanged(type: string) {
    if (type === "+") {
      this.record.tag = { name: "工资", icon: "salary" };
    } else {
      this.record.tag = { name: "服饰", icon: "clothes" };
    }
  }
  @Watch("recordList")
  onRecordListChanged(recordList: RecordItem) {
    recordListModel.save(recordList);
  }
}
</script>

<style lang="scss">
.money-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>
