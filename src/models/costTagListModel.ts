const localStorageKey = "costTagList";
const defaultCostTags: TagItem[] = [
  { name: "服饰", icon: "clothes" },
  { name: "餐饮", icon: "food" },
  { name: "住房", icon: "housing" },
  { name: "交通", icon: "traffic" },
  { name: "娱乐", icon: "fun" },
];
const costTagListModel = {
  fetch() {
    return (
      JSON.parse(window.localStorage.getItem(localStorageKey)!) ||
      defaultCostTags
    );
  },
  save(data: TagItem) {
    window.localStorage.setItem(localStorageKey, JSON.stringify(data));
  },
};
export default costTagListModel;
