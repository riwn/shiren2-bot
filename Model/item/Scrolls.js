const ScrollList = [{
    id: 1,
    name: "ワナ作動の巻物",
    bid_price: 200,
    selling_price: 100,
}, {
    id: 2,
    name: "識別の巻物",
    bid_price: 500,
    selling_price: 250,
}, {
    id: 3,
    name: "いかずち巻物",
    bid_price: 500,
    selling_price: 250,
}, {
    id: 4,
    name: "炎上の巻物",
    bid_price: 500,
    selling_price: 250,
}, {
    id: 5,
    name: "引き上げ巻物",
    bid_price: 500,
    selling_price: 250,
}, {
    id: 6,
    name: "いかすしの巻物",
    bid_price: 500,
    selling_price: 250,
}, {
    id: 7,
    name: "おはらいの巻物",
    bid_price: 1000,
    selling_price: 500,
}, {
    id: 8,
    name: "氷の巻物",
    bid_price: 1000,
    selling_price: 500,
}, {
    id: 9,
    name: "分身の巻物",
    bid_price: 1000,
    selling_price: 500,
}, {
    id: 10,
    name: "ワナけしの巻物",
    bid_price: 1000,
    selling_price: 500,
}, {
    id: 11,
    name: "ゾワゾワの巻物",
    bid_price: 1000,
    selling_price: 500,
}, {
    id: 12,
    name: "持ちかえりの巻物",
    bid_price: 1000,
    selling_price: 500,
}, {
    id: 13,
    name: "天の恵みの巻物",
    bid_price: 1200,
    selling_price: 600,
}, {
    id: 14,
    name: "地の恵みの巻物",
    bid_price: 1200,
    selling_price: 600,
}, {
    id: 15,
    name: "バクスイの巻物",
    bid_price: 1200,
    selling_price: 600,
}, {
    id: 16,
    name: "水がれの巻物",
    bid_price: 1500,
    selling_price: 750,
}, {
    id: 17,
    name: "バクハの巻物",
    bid_price: 1500,
    selling_price: 750,
}, {
    id: 18,
    name: "大部屋の巻物",
    bid_price: 2000,
    selling_price: 1000,
}, {
    id: 19,
    name: "壺われずの巻物",
    bid_price: 2000,
    selling_price: 1000,
}, {
    id: 20,
    name: "壺増大の巻物",
    bid_price: 2000,
    selling_price: 1100,
}, {
    id: 21,
    name: "すいだしの巻物",
    bid_price: 3000,
    selling_price: 1500,
}, {
    id: 22,
    name: "メッキの巻物",
    bid_price: 4000,
    selling_price: 2000,
}, {
    id: 23,
    name: "仕入れ直しの巻物",
    bid_price: 4000,
    selling_price: 2000,
}, {
    id: 24,
    name: "白紙の巻物",
    bid_price: 5000,
    selling_price: 2500,
}, {
    id: 25,
    name: "聖域の巻物",
    bid_price: 7500,
    selling_price: 2500,
}, {
    id: 26,
    name: "聖城の巻物",
    bid_price: 7500,
    selling_price: 2500,
}, {
    id: 27,
    name: "ねだやしの巻物",
    bid_price: 25000,
    selling_price: 400,
}];

/**
 * 巻物のクラス
 */
class Scrolls {
    /**
     * Scrolls constructor
     * @param string name アイテム名
     */
    constructor(name) {
        this.scroll = ScrollList.find((v) => v.name === name);
    }

    /**
     * 名前を取得
     */
    getName() {
        return this.scroll.name;
    }

    /**
     * 購入時の最高額を取得
     */
    getBidPrice() {
        return this.scroll.bid_price;
    }

    /**
     * 購入時の最高額を取得
     */
    getSellingPrice() {
        return this.scroll.selling_price;
    }
}

module.exports = Scrolls