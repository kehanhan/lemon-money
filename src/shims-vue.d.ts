declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}
declare module "*.svg" {
  const content: any;
  export default content;
}

import Vue from "vue";

declare module "vue/types/vue" {
  interface Vue {
    $store: {
      getType: () => TagType;
      setType: (type: TagType) => void;
      getIcons: () => string[];
      newTag: (name: string, icon: string) => void | TagItem;
      removeTag: (name: string) => void;
      getTags: (type: TagType) => TagItem[];
      saveTags: () => void;
      newRecord: (record: RecordItem) => void;
      getRecords: () => RecordItem[];
      saveRecords: () => void;
    };
  }
}
