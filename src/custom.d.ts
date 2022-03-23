type TagItem = {
  name: string;
  icon: string;
};
type RecordItem = {
  tag: TagItem;
  notes: string;
  type: string;
  amount: number;
  date?: Date;
};
interface Window {
  selectedType: string;
  costTagList: TagItem[];
  incomeTagList: TagItem[];
}
