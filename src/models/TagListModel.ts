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
const TagListModel = {
  costTagList: <TagItem[]>[],
  incomeTagList: <TagItem[]>[],

  fetch(type: string) {
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
  save() {
    window.localStorage.setItem(
      window.selectedType === "-" ? costKey : incomeKey,
      JSON.stringify(
        window.selectedType === "-" ? this.costTagList : this.incomeTagList
      )
    );
  },
  new(name: string, icon: string) {
    if (name === "") {
      return;
    }
    if (name.length > 4) {
      window.alert("超出最大长度");
      return;
    }
    const type = window.selectedType;
    if (type !== "-" && type !== "+") {
      throw new Error("type is illegal");
    }
    const newTag: TagItem = { name: `${name}`, icon: `${icon}` };
    if (type === "-") {
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
    this.save();
    return newTag;
  },
  remove(name: string) {
    if (window.selectedType !== "-" && window.selectedType !== "+") {
      throw new Error("type is illegal");
    } else if (window.selectedType === "-") {
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
    this.save();
  },
};
export default TagListModel;
