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

    /**
     * 引数の購入金額の巻物一覧取得
     */
    getBidRices(bid_price) {
        return this.list.filter((v) => v.bid_price === bid_price);
    }

    /**
     * 引数の売却金額の巻物一覧取得
     */
    getSellingRices(selling_price) {
        return this.list.filter((v) => v.selling_price === selling_price);
    }

    /**
     * 引数の購入金額の巻物整形して表示
     */
    printSameBidRices(bid_price) {
        const scrolls = this.getBidRices(bid_price)
        let print_string = "購入金額" + bid_price + "の飯は\n"
        const bid_price_scrolls = scrolls.map((scroll) => scroll.name)
        if (bid_price_scrolls.length) {
            return print_string + bid_price_scrolls.join('\n') + "\nです。"
        }
        return print_string + "存在しません。"
    }
}

module.exports = Rices