<template>
  <Layout classPrefix="money">
    <InputBox
        :amount.sync="record.amount"
        :notes.sync="record.notes"
        @submit="newRecord"
    />
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
import store from "@/store/store";

@Component({
  components: {Type, TagList, InputBox},
})
export default class Money extends Vue {
  costTagList = store.fetchTags("-");
  incomeTagList = store.fetchTags("+");
  recordList = store.fetchRecords();
  record: RecordItem = {
    tag: {name: "", icon: ""},
    notes: "",
    type: "-",
    amount: 0,
  };

  mounted() {
    this.record.type = store.tagType;
  }

  newRecord() {
    store.newRecord(this.record);
  }
}
</script>

<style lang="scss">
.money-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>
