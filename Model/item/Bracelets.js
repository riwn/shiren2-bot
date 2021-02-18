const Items = require("./Items");

const BraceletList = [{
    id: 1,
    name: "くねくねよけの腕輪",
    bid_price: 3000,
    selling_price: 1500,
}, {
    id: 2,
    name: "遠投の腕輪",
    bid_price: 4000,
    selling_price: 2000,
}, {
    id: 3,
    name: "白発白中の腕輪",
    bid_price: 4000,
    selling_price: 2000,
}, {
    id: 4,
    name: "ノーコンの腕輪",
    bid_price: 4000,
    selling_price: 2000,
}, {
    id: 5,
    name: "まじしおの腕輪",
    bid_price: 5000,
    selling_price: 2500,
}, {
    id: 6,
    name: "回復の腕輪",
    bid_price: 5000,
    selling_price: 2500,
}, {
    id: 7,
    name: "ハラヘリよけの腕輪",
    bid_price: 5000,
    selling_price: 2500,
}, {
    id: 8,
    name: "たれ流しの腕輪",
    bid_price: 5000,
    selling_price: 2500,
}, {
    id: 9,
    name: "ちからの腕輪",
    bid_price: 5000,
    selling_price: 3400,
}, {
    id: 10,
    name: "百発百中の腕輪",
    bid_price: 7500,
    selling_price: 3000,
}, {
    id: 11,
    name: "超会心の腕輪",
    bid_price: 7500,
    selling_price: 1500,
}, {
    id: 12,
    name: "パコレプキンの腕輪",
    bid_price: 10000,
    selling_price: 5000,
}, {
    id: 13,
    name: "とうしの腕輪",
    bid_price: 10000,
    selling_price: 5000,
}, {
    id: 14,
    name: "紙一重の腕輪",
    bid_price: 15000,
    selling_price: 7500,
}, {
    id: 15,
    name: "うけながしの腕輪",
    bid_price: 15000,
    selling_price: 7500,
}, {
    id: 16,
    name: "ハラヘラズの腕輪",
    bid_price: 15000,
    selling_price: 7500,
}, {
    id: 17,
    name: "ハラヘリの腕輪",
    bid_price: 15000,
    selling_price: 7500,
}, {
    id: 18,
    name: "ワナ師の腕輪",
    bid_price: 25000,
    selling_price: 1000,
}];

/**
 * 腕輪のクラス
 */
class Bracelets extends Items {
    /**
     * Bracelets constructor
     * @param string name アイテム名
     */
    constructor(name) {
        super();
        this.bracelet = BraceletList.find((v) => v.name === name);
    }

    /**
     * 名前を取得
     */
    getName() {
        return this.bracelet.name;
    }

    /**
     * 購入時の最高額を取得
     */
    getBidPrice() {
        return this.bracelet.bid_price;
    }

    /**
     * 購入時の最高額を取得
     */
    getSellingPrice() {
        return this.bracelet.selling_price;
    }
}

module.exports = Bracelets