const Items = require('./Items');
const WeaponList = [{
    id: 1,
    name: "きたえた木刀",
    strength: 2,
    mark_num: 1,
    bid_price: 3000,
    selling_price: 1500,
    bid_increase: 300,
    selling_increase: 150,
}, {
    id: 2,
    name: "こんぼう",
    strength: 3,
    mark_num: 3,
    bid_price: 400,
    selling_price: 200,
    bid_increase: 20,
    selling_increase: 10,
}, {
    id: 3,
    name: "長巻",
    strength: 6,
    mark_num: 4,
    bid_price: 700,
    selling_price: 300,
    bid_increase: 35,
    selling_increase: 15,
}, {
    id: 4,
    name: "神器の剣",
    strength: 8,
    mark_num: 14,
    bid_price: 45000,
    selling_price: 20000,
    bid_increase: 2250,
    selling_increase: 1000,
}, {
    id: 5,
    name: "カタナ",
    strength: 10,
    mark_num: 5,
    bid_price: 900,
    selling_price: 400,
    bid_increase: 45,
    selling_increase: 20,
}, {
    id: 6,
    name: "どうたぬき",
    strength: 12,
    mark_num: 6,
    bid_price: 3600,
    selling_price: 1200,
    bid_increase: 180,
    selling_increase: 60,
}, {
    id: 7,
    name: "象牙の剣",
    strength: 13,
    mark_num: 4,
    bid_price: 4000,
    selling_price: 1600,
    bid_increase: 200,
    selling_increase: 80,
}, {
    id: 8,
    name: "剛剣マンジカブラ",
    strength: 18,
    mark_num: 5,
    bid_price: 15000,
    selling_price: 7000,
    bid_increase: 2250,
    selling_increase: 1050,
}, {
    id: 9,
    name: "大三元の剣",
    strength: 20,
    mark_num: 9,
    bid_price: 48000,
    selling_price: 32000,
    bid_increase: 4800,
    selling_increase: 3200,
}, {
    id: 10,
    name: "火迅風魔刀",
    strength: 30,
    mark_num: 10,
    bid_price: 20000,
    selling_price: 10000,
    bid_increase: 2000,
    selling_increase: 1000,
}, {
    id: 11,
    name: "宝剣ミジンハ",
    strength: 50,
    mark_num: 16,
    bid_price: 60000,
    selling_price: 4000,
    bid_increase: 12000,
    selling_increase: 8000,
}, {
    id: 12,
    name: "秘剣カブラステギ",
    strength: 99,
    mark_num: 12,
    bid_price: 55000,
    selling_price: 20000,
    bid_increase: 8250,
    selling_increase: 3000,
}, {
    id: 13,
    name: "成仏のカマ",
    strength: 5,
    mark_num: 5,
    bid_price: 5000,
    selling_price: 2000,
    bid_increase: 250,
    selling_increase: 100,
}, {
    id: 14,
    name: "ドレインバスター",
    strength: 6,
    mark_num: 5,
    bid_price: 5000,
    selling_price: 2500,
    bid_increase: 250,
    selling_increase: 125,
}, {
    id: 15,
    name: "一ツ目殺し",
    strength: 9,
    mark_num: 4,
    bid_price: 4500,
    selling_price: 2000,
    bid_increase: 225,
    selling_increase: 125,
}, {
    id: 16,
    name: "三日月刀",
    strength: 14,
    mark_num: 6,
    bid_price: 50000,
    selling_price: 25000,
    bid_increase: 5000,
    selling_increase: 2500,
}, {
    id: 17,
    name: "ドラゴンキラー",
    strength: 15,
    mark_num: 7,
    bid_price: 10000,
    selling_price: 5000,
    bid_increase: 500,
    selling_increase: 250,
}, {
    id: 18,
    name: "龍神剣",
    strength: 25,
    mark_num: 7,
    bid_price: 30000,
    selling_price: 15000,
    bid_increase: 3000,
    selling_increase: 1500,
}, {
    id: 19,
    name: "ガマラのムチ",
    strength: 2,
    mark_num: 4,
    bid_price: 16000,
    selling_price: 8000,
    bid_increase: 800,
    selling_increase: 400,
}, {
    id: 20,
    name: "つるはし",
    strength: 2,
    mark_num: 5,
    bid_price: 3500,
    selling_price: 1600,
    bid_increase: 175,
    selling_increase: 80,
}, {
    id: 21,
    name: "ごんぼう",
    strength: 3,
    mark_num: 2,
    bid_price: 500,
    selling_price: 250,
    bid_increase: 25,
    selling_increase: 12.5,
}, {
    id: 22,
    name: "必中の剣",
    strength: 3,
    mark_num: 3,
    bid_price: 10000,
    selling_price: 5000,
    bid_increase: 500,
    selling_increase: 250,
}, {
    id: 23,
    name: "にぎりへんげの剣",
    strength: 3,
    mark_num: 4,
    bid_price: 10000,
    selling_price: 5000,
    bid_increase: 500,
    selling_increase: 250,
}, {
    id: 24,
    name: "金の剣",
    strength: 3,
    mark_num: 5,
    bid_price: 6000,
    selling_price: 3000,
    bid_increase: 300,
    selling_increase: 150,
}, {
    id: 25,
    name: "かつおぶし",
    strength: 4,
    mark_num: 2,
    bid_price: 2000,
    selling_price: 1000,
    bid_increase: 100,
    selling_increase: 50,
}, {
    id: 26,
    name: "オトトスピア",
    strength: 4,
    mark_num: 5,
    bid_price: 4000,
    selling_price: 1600,
    bid_increase: 200,
    selling_increase: 80,
}, {
    id: 27,
    name: "妖刀かまいたち",
    strength: 5,
    mark_num: 4,
    bid_price: 5000,
    selling_price: 2500,
    bid_increase: 250,
    selling_increase: 125,
}, {
    id: 28,
    name: "回復の剣",
    strength: 6,
    mark_num: 3,
    bid_price: 20000,
    selling_price: 10000,
    bid_increase: 2000,
    selling_increase: 1000,
}, {
    id: 29,
    name: "ケンゴウの刀",
    strength: 7,
    mark_num: 4,
    bid_price: 3200,
    selling_price: 900,
    bid_increase: 160,
    selling_increase: 45,
}, {
    id: 30,
    name: "スパークソード",
    strength: 7,
    mark_num: 6,
    bid_price: 15000,
    selling_price: 7500,
    bid_increase: 750,
    selling_increase: 375,
}, {
    id: 31,
    name: "サトリのつるはし",
    strength: 13,
    mark_num: 4,
    bid_price: 20000,
    selling_price: 10000,
    bid_increase: 2000,
    selling_increase: 1000,
}, {
    id: 32,
    name: "使い捨ての剣",
    strength: 35,
    mark_num: 3,
    bid_price: 3000,
    selling_price: 1500,
    bid_increase: 150,
    selling_increase: 75,
}, {
    id: 33,
    name: "木づち",
    strength: 3,
    mark_num: 5,
    bid_price: 4000,
    selling_price: 2000,
    bid_increase: 200,
    selling_increase: 100,
}, {
    id: 34,
    name: "如意棒",
    strength: 5,
    mark_num: 4,
    bid_price: 20000,
    selling_price: 10000,
    bid_increase: 1000,
    selling_increase: 500,
}, {
    id: 35,
    name: "アイアンハンマー",
    strength: 5,
    mark_num: 5,
    bid_price: 20000,
    selling_price: 10000,
    bid_increase: 1000,
    selling_increase: 500,
}, {
    id: 36,
    name: "モーニングスター",
    strength: 5,
    mark_num: 6,
    bid_price: 5000,
    selling_price: 2500,
    bid_increase: 250,
    selling_increase: 125,
}, {
    id: 37,
    name: "ヤリ",
    strength: 6,
    mark_num: 7,
    bid_price: 10000,
    selling_price: 4000,
    bid_increase: 500,
    selling_increase: 200,
}, {
    id: 38,
    name: "ミノタウロスの斧",
    strength: 8,
    mark_num: 11,
    bid_price: 6000,
    selling_price: 2400,
    bid_increase: 300,
    selling_increase: 120,
}, {
    id: 39,
    name: "アイアンヘッドの頭",
    strength: 9,
    mark_num: 7,
    bid_price: 5000,
    selling_price: 2500,
    bid_increase: 250,
    selling_increase: 125,
}, ];

/**
 * 武器のクラス
 */
class Weapons extends Items {
    /**
     * Weapons constructor
     * @param string  name アイテム名
     * @param integer correctionValue 修正値
     */
    constructor(name) {
        super();
        this.weapon = WeaponList.find((v) => v.name === name);
    }

    /**
     * 名前を取得
     * @param integer correctionValue 修正値
     */
    getName(correctionValue) {
        if (correctionValue == 0) {
            return this.weapon.name;
        }
        return this.weapon.name + '+' + String(correctionValue);
    }

    /**
     * 武器の強さ取得
     */
    getStrength(correctionValue) {
        return this.weapon.strength + correctionValue;
    }

    /**
     * 武器の印数を取得
     */
    getMarkNum() {
        return this.weapon.mark_num;
    }

    /**
     * 修正値の値から買値を求める
     * @param integer correctionValue 修正値
     */
    getBidPrice(correctionValue) {
        return this.weapon.bid_price + (correctionValue * this.weapon.bid_increase);
    }

    /**
     * 修正値の値から売値を求める
     * @param integer correctionValue 修正値
     */
    getSellingPrice(correctionValue) {
        return this.weapon.selling_price + (correctionValue * this.weapon.selling_increase);
    }
}

module.exports = Weapons