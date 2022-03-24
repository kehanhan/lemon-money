const costKey = "costTagList";
const incomeKey = "incomeTagList";
const defaultCostTags: TagItem[] = [
  { name: "服饰", icon: "clothes" },
  { name: "餐饮", icon: "food" },
  { name: "住房", icon: "housing" },
  { name: "交通", icon: "traffic" },
  { name: "娱乐", icon: "fun" },
];
const defaultIncomeTags: TagItem[] = [
  { name: "工资", icon: "salary" },
  { name: "奖金", icon: "bonus" },
  { name: "报销", icon: "reimbursements" },
  { name: "理财", icon: "finance" },
  { name: "生活费", icon: "living-cost" },
];
const defaultTagIcons: string[] = [
  "clothes",
  "food",
  "fun",
  "housing",
  "traffic",
  "bonus",
  "finance",
  "living-cost",
  "lottery",
  "part-time",
  "refund",
  "reimbursements",
  "salary",
];
const tagStore = {
  tagType: <string>"-",
  tagIcons: <string[]>defaultTagIcons,
  costTagList: <TagItem[]>[],
  incomeTagList: <TagItem[]>[],

  fetchTags(type: string) {
    if (type !== "-" && type !== "+") {
      throw new Error("type is illegal");
    } else if (type === "-") {
      this.costTagList =
        JSON.parse(window.localStorage.getItem(costKey)!) || defaultCostTags;
      return this.costTagList;
    } else {
      this.incomeTagList =
        JSON.parse(window.localStorage.getItem(incomeKey)!) ||
        defaultIncomeTags;
      return this.incomeTagList;
    }
  },
  saveTags() {
    window.localStorage.setItem(
      this.tagType === "-" ? costKey : incomeKey,
      JSON.stringify(
        this.tagType === "-" ? this.costTagList : this.incomeTagList
      )
    );
  },
  newTag(name: string, icon: string) {
    if (name === "") {
      return;
    }
    if (name.length > 4) {
      window.alert("超出最大长度");
      return;
    }
    if (this.tagType !== "-" && this.tagType !== "+") {
      throw new Error("type is illegal");
    }
    const newTag: TagItem = { name: `${name}`, icon: `${icon}` };
    if (this.tagType === "-") {
      const names = this.costTagList.map((item) => item.name);
      if (names.indexOf(name) >= 0) {
        window.alert("标签名不能重复");
        return;
      }
      this.costTagList.push(newTag);
    } else {
      const names = this.incomeTagList.map((item) => item.name);
      if (names.indexOf(name) >= 0) {
        window.alert("标签名不能重复");
        return;
      }
      this.incomeTagList.push(newTag);
    }
    this.saveTags();
    return newTag;
  },
  removeTag(name: string) {
    if (this.tagType !== "-" && this.tagType !== "+") {
      throw new Error("type is illegal");
    } else if (this.tagType === "-") {
      for (let i = 0; i < this.costTagList.length; i++) {
        if (this.costTagList[i].name === name) {
          this.costTagList.splice(i, 1);
          break;
        }
      }
    } else {
      for (let i = 0; i < this.incomeTagList.length; i++) {
        if (this.incomeTagList[i].name === name) {
          this.incomeTagList.splice(i, 1);
          break;
        }
      }
    }
    this.saveTags();
  },
};
export default tagStore;
