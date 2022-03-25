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
let tagType: TagType = "-";
let costTagList: TagItem[] = [];
let incomeTagList: TagItem[] = [];

const tagStore = {
  getType() {
    return tagType;
  },
  setType(type: TagType) {
    tagType = type;
  },
  getIcons() {
    return defaultTagIcons;
  },
  newTag(name: string, icon: string) {
    if (name === "") {
      return;
    }
    if (name.length > 4) {
      window.alert("超出最大长度");
      return;
    }
    const newTag: TagItem = { name: `${name}`, icon: `${icon}` };
    if (tagType === "-") {
      const names = costTagList.map((item) => item.name);
      if (names.indexOf(name) >= 0) {
        window.alert("标签名不能重复");
        return;
      }
      costTagList.push(newTag);
    } else {
      const names = incomeTagList.map((item) => item.name);
      if (names.indexOf(name) >= 0) {
        window.alert("标签名不能重复");
        return;
      }
      incomeTagList.push(newTag);
    }
    this.saveTags();
    return newTag;
  },
  removeTag(name: string) {
    if (tagType === "-") {
      for (let i = 0; i < costTagList.length; i++) {
        if (costTagList[i].name === name) {
          costTagList.splice(i, 1);
          break;
        }
      }
    } else {
      for (let i = 0; i < incomeTagList.length; i++) {
        if (incomeTagList[i].name === name) {
          incomeTagList.splice(i, 1);
          break;
        }
      }
    }
    this.saveTags();
  },
  getTags(type: TagType) {
    if (type === "-") {
      costTagList =
        JSON.parse(window.localStorage.getItem(costKey)!) || defaultCostTags;
      return costTagList;
    } else {
      incomeTagList =
        JSON.parse(window.localStorage.getItem(incomeKey)!) ||
        defaultIncomeTags;
      return incomeTagList;
    }
  },
  saveTags() {
    window.localStorage.setItem(
      tagType === "-" ? costKey : incomeKey,
      JSON.stringify(tagType === "-" ? costTagList : incomeTagList)
    );
  },
};
export default tagStore;
