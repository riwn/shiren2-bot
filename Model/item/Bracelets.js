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
        super(BraceletList);
        this.item = BraceletList.find((v) => v.name === name);
    }

    /**
     * 名前を取得
     */
    getName() {
        return this.item.name;
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

    /**
     * 引数の購入金額の腕輪一覧取得
     */
    getBidBracelets(bid_price) {
        return this.list.filter((v) => v.bid_price === bid_price);
    }

    /**
     * 引数の売却金額の腕輪一覧取得
     */
    getSellingBracelets(selling_price) {
        return this.list.filter((v) => v.selling_price === selling_price);
    }

    /**
     * 引数の購入金額の腕輪を整形して表示
     */
    printSameBidBracelets(bid_price) {
        const bracelets = this.getBidBracelets(bid_price)
        let print_string = "購入金額" + bid_price + "の腕輪は\n"
        const bid_price_bracelets = bracelets.map((bracelet) => bracelet.name)
        if (bid_price_bracelets.length) {
            return print_string + bid_price_bracelets.join('\n') + "\nです。"
        }
        return print_string + "存在しません。"
    }

    /**
     * 引数の売却金額の腕輪を整形して表示
     */
    printSameSellingBracelets(selling_price) {
        const bracelets = this.getSellingBracelets(selling_price)
        let print_string = "売却金額" + selling_price + "の腕輪は\n"
        const selling_price_bracelets = bracelets.map((bracelet) => bracelet.name)
        if (selling_price_bracelets.length) {
            return print_string + selling_price_bracelets.join('\n') + "\nです。"
        }
        return print_string + "存在しません。"
    }
}

module.exports = Bracelets