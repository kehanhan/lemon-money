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
  tagIcons: string[];
  costTagList: TagItem[];
  incomeTagList: TagItem[];
  newTag: (name: string, icon: string) => TagItem | undefined;
  removeTag: (name: string) => void;
}
