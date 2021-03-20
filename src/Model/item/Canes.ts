const Items = require("./Items");

const CaneList = [{
        id: 1,
        name: "ふきとばしの杖",
        bid_price: 500,
        selling_price: 250,
        bid_increase: 25,
        selling_increase: 12.5,
        min_count: 4,
        max_count: 7
    },
    {
        id: 2,
        name: "のりうつりの杖",
        bid_price: 500,
        selling_price: 250,
        bid_increase: 25,
        selling_increase: 12.5,
        min_count: 4,
        max_count: 6
    },
    {
        id: 3,
        name: "場所がえの杖",
        bid_price: 800,
        selling_price: 400,
        bid_increase: 40,
        selling_increase: 20,
        min_count: 4,
        max_count: 7
    },
    {
        id: 4,
        name: "引きよせの杖",
        bid_price: 800,
        selling_price: 400,
        bid_increase: 40,
        selling_increase: 20,
        min_count: 4,
        max_count: 7
    },
    {
        id: 5,
        name: "回復の杖",
        bid_price: 800,
        selling_price: 400,
        bid_increase: 80,
        selling_increase: 40,
        min_count: 4,
        max_count: 6
    },
    {
        id: 6,
        name: "ころばぬ先の杖",
        bid_price: 1000,
        selling_price: 500,
        bid_increase: 50,
        selling_increase: 25,
        min_count: 0,
        max_count: 1
    },
    {
        id: 7,
        name: "物知りの杖",
        bid_price: 1000,
        selling_price: 500,
        bid_increase: 50,
        selling_increase: 25,
        min_count: 5,
        max_count: 7
    },
    {
        id: 8,
        name: "クオーターの杖",
        bid_price: 1200,
        selling_price: 250,
        bid_increase: 60,
        selling_increase: 12.5,
        min_count: 4,
        max_count: 7
    },
    {
        id: 9,
        name: "鈍足の杖",
        bid_price: 1200,
        selling_price: 400,
        bid_increase: 60,
        selling_increase: 20,
        min_count: 3,
        max_count: 6
    },
    {
        id: 10,
        name: "封印の杖",
        bid_price: 2000,
        selling_price: 500,
        bid_increase: 100,
        selling_increase: 25,
        min_count: 3,
        max_count: 6
    },
    {
        id: 11,
        name: "トンネルの杖",
        bid_price: 2000,
        selling_price: 1000,
        bid_increase: 100,
        selling_increase: 50,
        min_count: 3,
        max_count: 7
    },
    {
        id: 12,
        name: "とうめいの杖",
        bid_price: 2000,
        selling_price: 1000,
        bid_increase: 100,
        selling_increase: 50,
        min_count: 3,
        max_count: 7
    },
    {
        id: 13,
        name: "倍速の杖",
        bid_price: 2000,
        selling_price: 1000,
        bid_increase: 200,
        selling_increase: 100,
        min_count: 3,
        max_count: 7
    },
    {
        id: 14,
        name: "からぶりの杖",
        bid_price: 2500,
        selling_price: 2500,
        bid_increase: 125,
        selling_increase: 60,
        min_count: 3,
        max_count: 6
    },
    {
        id: 15,
        name: "火ばしらの杖",
        bid_price: 2500,
        selling_price: 2500,
        bid_increase: 125,
        selling_increase: 60,
        min_count: 4,
        max_count: 7
    },
    {
        id: 16,
        name: "不幸の杖",
        bid_price: 2500,
        selling_price: 1000,
        bid_increase: 250,
        selling_increase: 100,
        min_count: 4,
        max_count: 6
    },
    {
        id: 17,
        name: "しあわせの杖",
        bid_price: 3000,
        selling_price: 1000,
        bid_increase: 150,
        selling_increase: 50,
        min_count: 4,
        max_count: 6
    },
    {
        id: 18,
        name: "草投げの杖",
        bid_price: 3000,
        selling_price: 1200,
        bid_increase: 150,
        selling_increase: 60,
        min_count: 4,
        max_count: 7
    },
    {
        id: 19,
        name: "草受けの杖",
        bid_price: 3000,
        selling_price: 1400,
        bid_increase: 150,
        selling_increase: 70,
        min_count: 4,
        max_count: 7
    },
];

/**
 * 杖のクラス
 */
class Canes extends Items {
    /**
     * Canes constructor
     * @param string name アイテム名
     */
    constructor(name) {
        super(CaneList);
        this.item = CaneList.find((v) => v.name === name);
    }

    /**
     * 名前を取得
     */
    getName() {
        return this.item.name;
    }

    /**
     * 杖の最大回数を取得する
     */
    getMaxCount() {
        return this.item.max_count;
    }

    /**
     * 杖の最小回数を取得する
     */
    getMinCount() {
        return this.item.min_count;
    }

    /**
     * 修正値の値から買値を求める
     * @param integer corValue
     */
    calcBidPrice(corValue) {
        return this.item.bid_price + (corValue * this.item.bid_increase);
    }

    /**
     * 修正値の値から売値を求める
     * @param integer corValue
     */
    calcSellingPrice(corValue) {
        return this.item.selling_price + (corValue * this.item.selling_increase);
    }
}

module.exports = Canes