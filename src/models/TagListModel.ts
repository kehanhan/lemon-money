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
  save(type: string) {
    window.localStorage.setItem(
      type === "-" ? costKey : incomeKey,
      JSON.stringify(type === "-" ? this.costTagList : this.incomeTagList)
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
      for (let i = 0; i < this.costTagList.length; i++) {
        if (this.costTagList[i].name === name) {
          window.alert("标签名不能重复");
          return;
        }
      }
      this.costTagList.push(newTag);
    } else {
      for (let i = 0; i < this.incomeTagList.length; i++) {
        if (this.incomeTagList[i].name === name) {
          window.alert("标签名不能重复");
          return;
        }
      }
      this.incomeTagList.push(newTag);
    }
    this.save(type);
    return newTag;
  },
};
export default TagListModel;
