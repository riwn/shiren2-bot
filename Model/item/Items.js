class Items {
    /**
     * Items constructor
     */
    constructor() {
        this.item = undefined;
    }

    /**
     * Itemが設定されているかどうかをチェックする
     */
    isSetItem() {
        return this.item != undefined;
    }
}
module.exports = Items