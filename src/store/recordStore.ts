const localStorageKey = "recordList";
const recordStore = {
  recordList: <RecordItem[]>[],

  fetchRecords() {
    this.recordList =
      JSON.parse(window.localStorage.getItem(localStorageKey)!) || [];
    return this.recordList;
  },
  saveRecords() {
    window.localStorage.setItem(
      localStorageKey,
      JSON.stringify(this.recordList)
    );
  },
  newRecord(record: RecordItem) {
    const recordCopy: RecordItem = JSON.parse(JSON.stringify(record));
    recordCopy.date = new Date();
    this.recordList?.push(recordCopy);
    this.saveRecords();
  },
};
export default recordStore;
