const Items = require("./Items");
const RiceList = [{
    id: 1,
    name: "まずそうなおにぎり",
    bid_price: 40,
    selling_price: 1,
}, {
    id: 2,
    name: "おにぎり",
    bid_price: 100,
    selling_price: 50,
}, {
    id: 3,
    name: "大きなおにぎり",
    bid_price: 200,
    selling_price: 100,
}, {
    id: 4,
    name: "特製おにぎり",
    bid_price: 200,
    selling_price: 100,
}, {
    id: 5,
    name: "巨大なおにぎり",
    bid_price: 300,
    selling_price: 150,
}];

/**
 * おにぎりのクラス
 */
class Rices extends Items {
    /**
     * Rices constructor
     * @param string name アイテム名
     */
    constructor(name) {
        super(RiceList);
        this.item = RiceList.find((v) => v.name === name);
    }

    /**
     * 名前を取得
     */
    getName() {
        return this.item.name;
    }

    /**
     * おにぎりの強さ取得
     */
    getStrength() {
        return this.item.strength;
    }

    /**
     * おにぎりの最大出現本数を取得する
     */
    getMaxCount() {
        return this.item.max_count;
    }

    /**
     * おにぎりの最小出現本数を取得する
     */
    getMinCount() {
        return this.item.min_count;
    }

    /**
     * 購入時の最高額を取得
     */
    getBidPrice() {
        return this.item.bid_price;
    }

    /**
     * 購入時の最高額を取得
     */
    getSellingPrice() {
        return this.item.selling_price;
    }
}

module.exports = Rices