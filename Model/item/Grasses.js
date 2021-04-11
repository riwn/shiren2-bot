const Items = require("./Items");

const GrassList = [{
    id: 1,
    name: "雑草",
    bid_price: 50,
    selling_price: 25,
}, {
    id: 2,
    name: "薬草",
    bid_price: 100,
    selling_price: 50,
}, {
    id: 3,
    name: "くねくね草",
    bid_price: 300,
    selling_price: 150,
}, {
    id: 4,
    name: "すばやさ草",
    bid_price: 300,
    selling_price: 150,
}, {
    id: 5,
    name: "高とび草",
    bid_price: 300,
    selling_price: 150,
}, {
    id: 6,
    name: "命の草",
    bid_price: 400,
    selling_price: 200,
}, {
    id: 7,
    name: "胃拡張の種",
    bid_price: 400,
    selling_price: 200,
}, {
    id: 8,
    name: "毒消し草",
    bid_price: 400,
    selling_price: 200,
}, {
    id: 9,
    name: "超不幸の草",
    bid_price: 400,
    selling_price: 200,
}, {
    id: 10,
    name: "胃縮小の草",
    bid_price: 400,
    selling_price: 200,
}, {
    id: 11,
    name: "話の種",
    bid_price: 500,
    selling_price: 100,
}, {
    id: 12,
    name: "弟切草",
    bid_price: 500,
    selling_price: 250,
}, {
    id: 13,
    name: "めぐすり草",
    bid_price: 500,
    selling_price: 250,
}, {
    id: 14,
    name: "ドラゴン草",
    bid_price: 500,
    selling_price: 250,
}, {
    id: 15,
    name: "火炎草",
    bid_price: 700,
    selling_price: 350,
}, {
    id: 16,
    name: "よくきき草",
    bid_price: 1000,
    selling_price: 500,
}, {
    id: 17,
    name: "ちからの草",
    bid_price: 1500,
    selling_price: 750,
}, {
    id: 18,
    name: "毒草",
    bid_price: 1500,
    selling_price: 750,
}, {
    id: 19,
    name: "しあわせ草",
    bid_price: 2000,
    selling_price: 1000,
}, {
    id: 20,
    name: "不幸の種",
    bid_price: 2000,
    selling_price: 1000,
}, {
    id: 21,
    name: "復活の草",
    bid_price: 2500,
    selling_price: 1250,
}, {
    id: 22,
    name: "天使の種",
    bid_price: 3000,
    selling_price: 1500,
}];

/**
 * 草のクラス
 */
class Grasses extends Items {
    /**
     * Grasss constructor
     * @param string name アイテム名
     */
    constructor(name) {
        super(GrassList);
        this.item = GrassList.find((v) => v.name === name);
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
     * 引数の購入金額の草一覧取得
     */
    getBidGrasses(bid_price) {
        return this.list.filter((v) => v.bid_price === bid_price);
    }

    /**
     * 引数の売却金額の草一覧取得
     */
    getSellingGrasses(selling_price) {
        return this.list.filter((v) => v.selling_price === selling_price);
    }

    /**
     * 引数の購入金額の草を整形して表示
     */
    printSameBidGrassed(bid_price) {
        const grasses = this.getBidGrasses(bid_price)
        let print_string = "購入金額" + bid_price + "の草は\n"
        const bid_price_grasses = grasses.map((grass) => grass.name)
        if (bid_price_grasses.length) {
            return print_string + bid_price_grasses.join('\n') + "\nです。"
        }
        return print_string + "存在しません。"
    }

    /**
     * 引数の売却金額の草を整形して表示
     */
    printSameSellingGrassed(selling_price) {
        const grasses = this.getSellingGrasses(selling_price)
        let print_string = "売却金額" + selling_price + "の草は\n"
        const selling_price_grasses = grasses.map((grass) => grass.name)
        if (selling_price_grasses.length) {
            return print_string + selling_price_grasses.join('\n') + "\nです。"
        }
        return print_string + "存在しません。"
    }
}

module.exports = Grasses