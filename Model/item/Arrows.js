const ArrowList = [{
    id: 1,
    name: "木の矢",
    strength: -2,
    bid_price: 20,
    selling_price: 2,
    min_count: 5,
    max_count: 9
}, {
    id: 2,
    name: "鉄の矢",
    strength: 6,
    bid_price: 60,
    selling_price: 10,
    min_count: 4,
    max_count: 8
}, {
    id: 3,
    name: "銀の矢",
    strength: 0,
    bid_price: 80,
    selling_price: 20,
    min_count: 4,
    max_count: 6
}, {
    id: 4,
    name: "会心の矢",
    strength: 2,
    bid_price: 120,
    selling_price: 40,
    min_count: 10,
    max_count: 15
}, {
    id: 5,
    name: "かまいたちの矢",
    strength: 0,
    bid_price: 200,
    selling_price: 80,
    min_count: 13,
    max_count: 18
}, {
    id: 6,
    name: "石",
    strength: 8,
    bid_price: 100,
    selling_price: 50,
    min_count: 3,
    max_count: 6
}, {
    id: 7,
    name: "デブータの石",
    strength: 12,
    bid_price: 150,
    selling_price: 70,
    min_count: 3,
    max_count: 6
}, {
    id: 8,
    name: "大砲の玉",
    strength: "-",
    bid_price: 100,
    selling_price: 50,
    min_count: 1,
    max_count: 3
}];

/**
 * 矢のクラス
 */
class Arrows {
    /**
     * Arrows constructor
     * @param string name アイテム名
     */
    constructor(name) {
        this.arrow = ArrowList.find((v) => v.name === name);
    }

    /**
     * 名前を取得
     */
    getName() {
        return this.arrow.name;
    }

    /**
     * 矢の強さ取得
     */
    getStrength() {
        return this.arrow.strength;
    }

    /**
     * 矢の最大出現本数を取得する
     */
    getMaxCount() {
        return this.arrow.max_count;
    }

    /**
     * 矢の最小出現本数を取得する
     */
    getMinCount() {
        return this.arrow.min_count;
    }

    /**
     * 購入時の最高額を取得
     */
    getBidPrice() {
        return this.arrow.bid_price;
    }

    /**
     * 購入時の最高額を取得
     */
    getSellingPrice() {
        return this.arrow.selling_price;
    }
}

module.exports = Arrows