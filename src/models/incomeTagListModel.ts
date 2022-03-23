const localStorageKey = "incomeTagList";
const defaultIncomeTagList = [
    {name:"工资",icon:"salary"},
    {name:"奖金",icon:"bonus"},
    {name:"报销",icon:"reimbursements"},
    {name:"理财",icon:"finance"},
    {name:"生活费",icon:"living-cost"}
]
const incomeTagListModel = {
    fetch() {
        return (
            JSON.parse(window.localStorage.getItem(localStorageKey)!) || defaultIncomeTagList
        );
    },
    save(data: TagItem) {
        window.localStorage.setItem(localStorageKey, JSON.stringify(data));
    },
};
export default incomeTagListModel;