const localStorageKey = "recordList";
let recordList: RecordItem[] = [];
const recordStore = {
  newRecord(record: RecordItem) {
    const recordCopy: RecordItem = JSON.parse(JSON.stringify(record));
    recordCopy.date = new Date();
    recordList?.push(recordCopy);
    this.saveRecords();
  },
  getRecords() {
    recordList =
      JSON.parse(window.localStorage.getItem(localStorageKey)!) || [];
    return recordList;
  },
  saveRecords() {
    window.localStorage.setItem(localStorageKey, JSON.stringify(recordList));
  },
};
export default recordStore;
