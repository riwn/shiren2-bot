const Items = require("./Items");

const PotList = [{
        id: 1,
        name: "識別の壺",
        bid_price: 1000,
        selling_price: 500,
        bid_increase: 50,
        selling_increase: 25,
        min_count: 3,
        max_count: 6
    },
    {
        id: 2,
        name: "弱化の壺",
        bid_price: 1000,
        selling_price: 500,
        bid_increase: 50,
        selling_increase: 25,
        min_count: 3,
        max_count: 6
    },
    {
        id: 3,
        name: "ほぞんの壺",
        bid_price: 1200,
        selling_price: 600,
        bid_increase: 60,
        selling_increase: 30,
        min_count: 4,
        max_count: 6
    },
    {
        id: 4,
        name: "へんげの壺",
        bid_price: 2000,
        selling_price: 1000,
        bid_increase: 100,
        selling_increase: 50,
        min_count: 3,
        max_count: 5
    },
    {
        id: 5,
        name: "手封じの壺",
        bid_price: 3000,
        selling_price: 1500,
        bid_increase: 150,
        selling_increase: 75,
        min_count: 3,
        max_count: 5
    },
    {
        id: 6,
        name: "水がめ",
        bid_price: 3000,
        selling_price: 1500,
        bid_increase: 150,
        selling_increase: 75,
        min_count: 3,
        max_count: 6
    },
    {
        id: 7,
        name: "草効果の壺",
        bid_price: 4000,
        selling_price: 2000,
        bid_increase: 200,
        selling_increase: 100,
        min_count: 3,
        max_count: 6
    },
    {
        id: 8,
        name: "合成の壺",
        bid_price: 8000,
        selling_price: 4000,
        bid_increase: 400,
        selling_increase: 200,
        min_count: 2,
        max_count: 4
    },
    {
        id: 9,
        name: "強化の壺",
        bid_price: 15000,
        selling_price: 7500,
        bid_increase: 750,
        selling_increase: 375,
        min_count: 3,
        max_count: 6
    },
    {
        id: 10,
        name: "ビックリの壺",
        bid_price: 3000,
        selling_price: 1500,
        bid_increase: 0,
        selling_increase: 0,
        min_count: 0,
        max_count: 0
    },
    {
        id: 11,
        name: "形見の壺",
        bid_price: 10000,
        selling_price: 5000,
        bid_increase: 500,
        selling_increase: 250,
        min_count: 1,
        max_count: 4
    },
    {
        id: 12,
        name: "モンスターの壺",
        bid_price: 10000,
        selling_price: 1,
        bid_increase: 0,
        selling_increase: 0,
        min_count: 1,
        max_count: 1
    },
    {
        id: 13,
        name: "ちょきんの壺",
        bid_price: 2,
        selling_price: 1,
        bid_increase: 0,
        selling_increase: 0,
        min_count: 0,
        max_count: 0
    },
];

/**
 * 壺のクラス
 */
class Pots extends Items {
    /**
     * Pots constructor
     * @param string name アイテム名
     */
    constructor(name) {
        super(PotList);
        this.item = PotList.find((v) => v.name === name);
    }

    /**
     * 名前を取得
     */
    getName() {
        return this.item.name;
    }

    /**
     * 壺の最大容量を取得する
     */
    getMaxCount() {
        return this.item.max_count;
    }

    /**
     * 壺の最小容量を取得する
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

module.exports = Pots