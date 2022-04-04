<template>
  <Layout classPrefix="billing">
    <header class="billing-header">
      <div class="title">
        <strong>柠檬记账</strong>
      </div>
      <div class="info">
        <div class="date">
          <span class="summary year">2022年</span
          ><span class="month">03月<i class="icon_down"></i></span>
        </div>
        <div class="income">
          <span class="summary">收入</span><span class="data">0.00</span>
        </div>
        <div class="cost">
          <span class="summary">支出</span><span class="data">0.00</span>
        </div>
      </div>
    </header>
    <main>
      <ol>
        <li class="group" v-for="(group, index) in result" :key="index">
          <span>{{ group.day }}</span>
          <ol>
            <li class="item" v-for="(item, index) in group.items" :key="index">
              <div class="icon">
                <Icon :name="item.tag.icon" />
              </div>
              <div class="record">
                <span>{{ item.notes ? item.notes : item.tag.name }}</span>
                <span>
                  <span>{{ item.type }}</span
                  >{{ item.amount }}</span
                >
              </div>
            </li>
          </ol>
        </li>
      </ol>
    </main>
  </Layout>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
import Component from "vue-class-component";
import dayjs from "dayjs";

@Component
export default class Billing extends Vue {
  records: RecordItem[] = [];
  now = dayjs();

  get result() {
    type HashTableValue = { day: string; items: RecordItem[] };
    const hashTable: { [key: string]: HashTableValue } = {};
    for (let i = 0; i < this.records.length; i++) {
      const date = this.records[i].date;
      hashTable[date] = hashTable[date] || { day: date, items: [] };
      hashTable[date].items.push(this.records[i]);
    }
    return hashTable;
  }

  mounted() {
    this.records = this.$store.getRecords();
  }
}
</script>

<style lang="scss">
.billing-content {
  display: flex;
  flex-direction: column;
}
</style>
<style lang="scss" scoped>
@import "src/assets/style/helper";

.billing-header {
  background: $color-theme;
  min-height: 100px;

  & .title {
    padding-top: 10px;
    text-align: center;
    font-size: 20px;
    padding-bottom: 5px;
  }

  & .info {
    display: flex;

    & div {
      display: flex;
      flex-direction: column;
    }

    & .date {
      min-width: 25%;
      padding-left: 5%;

      & .month {
        display: block;
        border-right: 1px solid #555;
        position: relative;
      }

      & .icon_down {
        border-style: solid;
        border-width: 10px 6px;
        border-color: black transparent transparent;
        position: absolute;
        top: 0.5rem;
        left: 2.5rem;
      }
    }

    & .income {
      min-width: 37.5%;
      padding-left: 7%;
    }

    & .cost {
      min-width: 37.5%;
    }
  }

  .summary {
    font-size: 12px;
    color: #777;
  }

  .data {
    font-size: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}

main {
  .group {
    margin: 5px 0;

    & > span {
      padding-left: 8px;
      color: #999;
    }
  }

  & .item {
    border: 1px solid #eee;
    display: flex;
    align-items: center;
    line-height: 2;

    .icon {
      font-size: 26px;

      svg {
        margin: 0 0.5rem;
      }
    }

    .record {
      flex-grow: 1;
      display: flex;
      justify-content: space-between;
      padding-right: 0.5rem;
    }
  }
}
</style>
