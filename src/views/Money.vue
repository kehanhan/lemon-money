<template>
  <Layout classPrefix="money">
    <InputBox
      :notes.sync="record.notes"
      :amount.sync="record.amount"
      @submit="newRecord"
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
    tag: { name: "", icon: "" },
    notes: "",
    type: "-",
    amount: 0,
  };

  newRecord() {
    recordListModel.new(this.record);
  }

  @Watch("recordList")
  onRecordListChanged() {
    recordListModel.save();
  }
}
</script>

<style lang="scss">
.money-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>
