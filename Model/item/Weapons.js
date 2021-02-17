const WeaponList = [{
    id: 1,
    name: "木の武器",
    strength: -2,
    bid_price: 20,
    selling_price: 2,
    min_count: 5,
    max_count: 9
}, {
    id: 2,
    name: "鉄の武器",
    strength: 6,
    bid_price: 60,
    selling_price: 10,
    min_count: 4,
    max_count: 8
}, {
    id: 3,
    name: "銀の武器",
    strength: 0,
    bid_price: 80,
    selling_price: 20,
    min_count: 4,
    max_count: 6
}, {
    id: 4,
    name: "会心の武器",
    strength: 2,
    bid_price: 120,
    selling_price: 40,
    min_count: 10,
    max_count: 15
}, {
    id: 5,
    name: "かまいたちの武器",
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
 * 武器のクラス
 */
class Weapons {
    /**
     * Weapons constructor
     * @param string name アイテム名
     */
    constructor(name) {
        this.weapon = WeaponList.find((v) => v.name === name);
    }

    /**
     * 名前を取得
     */
    getName() {
        return this.weapon.name;
    }

    /**
     * 武器の強さ取得
     */
    getStrength() {
        return this.weapon.strength;
    }

    /**
     * 武器の印数を取得
     */
    getMarkNum() {
        return this.weapon.mark_num;
    }

    /**
     * 購入額を取得
     */
    getBidPrice() {
        return this.weapon.bid_price;
    }

    /**
     * 売却額を取得
     */
    getSellingPrice() {
        return this.weapon.selling_price;
    }

    /**
     * 修正値の値から買値を求める
     * @param integer corValue
     */
    calcBidPrice(corValue) {
        return this.weapon.bid_price + (corValue * this.weapon.bid_increase);
    }

    /**
     * 修正値の値から売値を求める
     * @param integer corValue
     */
    calcSellingPrice(corValue) {
        return this.weapon.selling_price + (corValue * this.weapon.selling_increase);
    }
}

module.exports = Weapons