type TagType = "-" | "+";
type TagItem = {
  name: string;
  icon: string;
};
type RecordItem = {
  tag: TagItem;
  notes: string;
  type: TagType;
  amount: number;
  date?: string;
};
