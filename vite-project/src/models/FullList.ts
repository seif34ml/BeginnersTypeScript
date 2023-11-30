import ListItem from './ListItem'

interface List {
    list: ListItem[],
    load(): void,
    save(): void,
    clearList(): void,
    addItem(itemObj: ListItem): void,
    removeItem(id: string): void,
}
export default class FullList implements List {

    list: ListItem[];
     
        constructor(private _list: ListItem[]) {
            this.list = _list; // Corrected property assignment
        }
    
     
     load(): void {
        const storedList: string | null = localStorage.getItem("myList")
        if (typeof storedList !== "string") return

        const parsedList: { _id: string, _item: string, _checked: boolean }[] = JSON.parse(storedList)

        parsedList.forEach(itemObj => {
            const newListItem = new ListItem(itemObj._id, itemObj._item, itemObj._checked)
         this.addItem(newListItem)
        })
     }
    clearList(): void {
        this._list=[]
        this.save()
    }
    save(): void {
        localStorage.setItem('myList',JSON.stringify(this._list))
    }
    addItem(itemObj: ListItem): void {
        this._list.push(itemObj);
        this.save()
    }
    
        removeItem(id: string): void {
            this._list = this._list.filter(item => item.id !== id)
            this.save()
        
    }



}