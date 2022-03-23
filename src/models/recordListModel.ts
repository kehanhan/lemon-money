const localStorageKey = "recordList";
const recordListModel = {
  push(record: RecordItem, recordList: RecordItem[]) {
    const recordCopy = JSON.parse(JSON.stringify(record));
    recordCopy.date = new Date();
    recordList.push(recordCopy);
  },
  fetch() {
    return JSON.parse(
      window.localStorage.getItem(localStorageKey) || "[]"
    ) as RecordItem[];
  },
  save(recordList: RecordItem[] | RecordItem) {
    window.localStorage.setItem(localStorageKey, JSON.stringify(recordList));
  },
};
export default recordListModel;
