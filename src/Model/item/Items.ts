class Items {
    /**
     * Items constructor
     */
    constructor(list) {
        this.item = undefined;
        this.list = list;
    }

    /**
     * Itemが設定されているかどうかをチェックする
     */
    isSetItem() {
        return this.item != undefined;
    }

    /**
     * 全てのアイテムをリスト化して表示する
     */
    getItemList() {
        var itemString = '以下から選択してね！\n';
        this.list.forEach(item => {
            itemString += String(item.id) + ':' + item.name + '\n';
        });
        return itemString
    }
}
module.exports = Items