<template>
  <Layout classPrefix="money">
    <InputBox
        :amount.sync="record.amount"
        :notes.sync="record.notes"
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
    <Type :type.sync="record.type"/>
  </Layout>
</template>

<script lang="ts">
import InputBox from "@/components/Money/InputBox.vue";
import TagList from "@/components/Money/TagList.vue";
import Type from "@/components/Money/Type.vue";
import {Component, Vue} from "vue-property-decorator";

@Component({
  components: {Type, TagList, InputBox},
})
export default class Money extends Vue {
  costTagList = window.costTagList;
  incomeTagList = window.incomeTagList;
  recordList = window.recordList;
  record: RecordItem = {
    tag: {name: "", icon: ""},
    notes: "",
    type: "-",
    amount: 0,
  };

  newRecord() {
    window.newRecord(this.record);
  }
}
</script>

<style lang="scss">
.money-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>
