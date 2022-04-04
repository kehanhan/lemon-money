<template>
  <Layout classPrefix="money">
    <InputBox
      :amount.sync="record.amount"
      :notes.sync="record.notes"
      :date.sync="record.date"
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
    <Type :type.sync="record.type" />
  </Layout>
</template>

<script lang="ts">
import InputBox from "@/components/Money/InputBox.vue";
import TagList from "@/components/Money/TagList.vue";
import Type from "@/components/Money/Type.vue";
import { Component, Vue, Watch } from "vue-property-decorator";

@Component({
  components: { Type, TagList, InputBox },
})
export default class Money extends Vue {
  costTagList = this.$store.getTags("-");
  incomeTagList = this.$store.getTags("+");
  record: RecordItem = {
    tag: { name: "其他", icon: "other" },
    notes: "",
    type: "-",
    amount: 0,
    date: "",
  };

  mounted() {
    this.record.type = this.$store.getType();
  }

  newRecord(date: Date) {
    this.$store.newRecord(this.record);
  }

  @Watch("record.type")
  onTypeChanged() {
    this.record.tag = { name: "其他", icon: "other" };
  }
}
</script>

<style lang="scss">
.money-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>
