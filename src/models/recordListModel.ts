const localStorageKey = "recordList";
const recordListModel = {
  recordList: <RecordItem[]>[],

  fetch() {
    this.recordList =
      JSON.parse(window.localStorage.getItem(localStorageKey)!) || [];
    return this.recordList;
  },
  save() {
    window.localStorage.setItem(
      localStorageKey,
      JSON.stringify(this.recordList)
    );
  },
  new(record: RecordItem) {
    this.fetch();
    const recordCopy = JSON.parse(JSON.stringify(record));
    recordCopy.date = new Date();
    this.recordList.push(recordCopy);
    this.save();
  },
};
export default recordListModel;
