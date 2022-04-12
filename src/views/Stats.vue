<template>
  <Layout>
    <Type :type.sync="type" />
    <v-chart class="chart" :option="option" />
  </Layout>
</template>

<script lang="ts">
import Type from "@/components/Money/Type.vue";
import { Vue, Component, Watch } from "vue-property-decorator";
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { PieChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
} from "echarts/components";
import VChart from "vue-echarts";

use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
]);

@Component({
  components: { Type, VChart },
})
export default class Stats extends Vue {
  type: "-" | "+" = "-";
  records: RecordItem[] = [];
  costMap = new Map();
  incomeMap = new Map();
  costData: Array<any> = [];
  incomeData: Array<any> = [];
  option = {
    title: {
      text: "分类统计",
      left: "center",
      top: "5%",
    },
    tooltip: {
      trigger: "item",
    },
    legend: {
      orient: "vertical",
      left: "left",
    },
    series: [
      {
        name: "标签",
        type: "pie",
        radius: "50%",
        data: [] as Array<any>,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };

  mounted() {
    this.records = this.$store.getRecords();
  }

  @Watch("records")
  onRecordsChanged() {
    for (let i = 0; i < this.records.length; i++) {
      if (this.records[i].type === "-") {
        const tagName = this.records[i].tag.name;
        const amount = this.records[i].amount;
        if (this.costMap.has(tagName)) {
          this.costMap.set(tagName, this.costMap.get(tagName) + amount);
        } else {
          this.costMap.set(tagName, amount);
        }
      } else {
        const tagName = this.records[i].tag.name;
        const amount = this.records[i].amount;
        if (this.incomeMap.has(tagName)) {
          this.incomeMap.set(tagName, this.incomeMap.get(tagName) + amount);
        } else {
          this.incomeMap.set(tagName, amount);
        }
      }
    }
    this.costMap.forEach((value, key) => {
      const obj = { value: `${value}`, name: `${key}` };
      this.costData.push(obj);
      this.option.series[0].data = this.costData;
    });
    this.incomeMap.forEach((value, key) => {
      const obj = { value: `${value}`, name: `${key}` };
      this.incomeData.push(obj);
    });
  }

  @Watch("type")
  onTypeChanged() {
    if (this.type === "-") {
      this.option.series[0].data = this.costData;
      this.option.series[0].name = "支出类别";
    } else {
      this.option.series[0].data = this.incomeData;
      this.option.series[0].name = "收入类别";
    }
  }
}
</script>

<style lang="scss" scoped>
.chart {
  max-width: 100%;
  max-height: 80%;
}
</style>
