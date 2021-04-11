const Players = require('./Players');
const AsukaStatusList = [{
    id: 1,
    attack: 7,
    defence: 4
},{
    id: 2,
    attack: 8,
    defence: 4
},{
    id: 3,
    attack: 10,
    defence: 4
},{
    id: 4,
    attack: 12,
    defence: 4
},{
    id: 5,
    attack: 15,
    defence: 4
},{
    id: 6,
    attack: 17,
    defence: 4
},{
    id: 7,
    attack: 18,
    defence: 4
},{
    id: 8,
    attack: 20,
    defence: 4
},{
    id: 9,
    attack: 22,
    defence: 4
},{
    id: 10,
    attack: 24,
    defence: 5
},{
    id: 11,
    attack: 26,
    defence: 5
},{
    id: 12,
    attack: 28,
    defence: 5
},{
    id: 13,
    attack: 31,
    defence: 5
},{
    id: 14,
    attack: 34,
    defence: 5
},{
    id: 15,
    attack: 37,
    defence: 5
},{
    id: 16,
    attack: 41,
    defence: 5
},{
    id: 17,
    attack: 44,
    defence: 5
},{
    id: 18,
    attack: 47,
    defence: 5
},{
    id: 19,
    attack: 50,
    defence: 5
},{
    id: 20,
    attack: 53,
    defence: 5
},{
    id: 21,
    attack: 56,
    defence: 5
},{
    id: 22,
    attack: 58,
    defence: 5
},{
    id: 23,
    attack: 60,
    defence: 5
},{
    id: 24,
    attack: 63,
    defence: 5
},{
    id: 25,
    attack: 66,
    defence: 5
},{
    id: 26,
    attack: 68,
    defence: 5
},{
    id: 27,
    attack: 70,
    defence: 5
},{
    id: 28,
    attack: 72,
    defence: 5
},{
    id: 29,
    attack: 75,
    defence: 5
},{
    id: 30,
    attack: 78,
    defence: 5
},{
    id: 31,
    attack: 80,
    defence: 5
},{
    id: 32,
    attack: 82,
    defence: 5
},{
    id: 33,
    attack: 84,
    defence: 5
},{
    id: 34,
    attack: 86,
    defence: 6
},{
    id:	35,
    attack:	88,
    defence: 6
},{
    id:	36,
    attack:	90,
    defence:	6
},{
    id:	37,
    attack:	92,
    defence:	6
},{
    id:	37,
attack:	92,
defence:	6
},{
    id:	38,
attack:	94,
defence:	6
},{
    id:	39,
attack:	96,
defence:	6
},{
    id:	40,
attack:	98,
defence:	6
},{
    id:	41,
attack:	100,
defence:	6
},{
    id:	42,
attack:	102,
defence:	6
},{
    id:	43,
attack:	104,
defence:	6
},{
    id:	44,
attack:	106,
defence:	6
},{
    id:	45,
attack:	108,
defence:	6
},{
    id:	46,
attack:	110,
defence:	6
},{
    id:	47,
attack:	112,
defence:	6
},{
    id:	48,
attack:	114,
defence:	6
},{
    id:	49,
attack:	116,
defence:	6
},{
    id:	50,
attack:	118,
defence:	6
},{
    id:	51,
attack:	120,
defence:	6
},{
    id:	52,
attack:	122,
defence:	6
},{
    id:	53,
attack:	124,
defence:	6
},{
    id:	54,
attack:	126,
defence:	6
},{
    id:	55,
attack:	127,
defence:	6
},{
    id:	56,
attack:	128,
defence:	6
},{
    id:	57,
attack:	129,
defence:	6
},{
    id:	58,
attack:	130,
defence:	6
},{
    id:	59,
attack:	131,
defence:	7
},{
    id:	60,
attack:	132,
defence:	7
},{
    id:	61,
attack:	133,
defence:	7
},{
    id:	62,
attack:	134,
defence:	8
},{
    id:	63,
attack:	135,
defence:	8
},{
    id:	64,
attack:	136,
defence:	8
},{
    id:	65,
attack:	137,
defence:	9
},{
    id:	66,
attack:	138,
defence:	9
},{
    id:	67,
attack:	139,
defence:	9
},{
    id:	68,
attack:	140,
defence:	9
},{
    id:	69,
attack:	141,
defence:	10
},{
    id:	70,
attack:	142,
defence:	10
},{
    id:	71,
attack:	143,
defence:	10
},{
    id:	72,
attack:	144,
defence:	11
},{
    id:	73,
attack:	145,
defence:	11
},{
    id:	74,
attack:	146,
defence:	11
},{
    id:	75,
attack:	147,
defence:	12
},{
    id:	76,
attack:	148,
defence:	12
},{
    id:	77,
attack:	150,
defence:	12
},{
    id:	78,
attack:	152,
defence:	13
},{
    id:	79,
attack:	154,
defence:	13
},{
    id:	80,
attack:	156,
defence:	13
},{
    id:	81,
attack:	158,
defence:	14
},{
    id:	82,
attack:	160,
defence:	14
},{
    id:	83,
attack:	162,
defence:	14
},{
    id:	84,
attack:	164,
defence:	15
},{
    id:	85,
attack:	166,
defence:	15
},{
    id:	86,
attack:	168,
defence:	15
},{
    id:	87,
attack:	170,
defence:	16
},{
    id:	88,
attack:	172,
defence:	16
},{
    id:	89,
attack:	174,
defence:	16
},{
    id:	90,
attack:	176,
defence:	17
},{
    id:	91,
attack:	180,
defence:	17
},{
    id:	92,
attack:	183,
defence:	17
},{
    id:	93,
attack:	186,
defence:	18
},{
    id:	94,
attack:	189,
defence:	18
},{
    id:	95,
attack:	193,
defence:	18
},{
    id:	96,
attack:	195,
defence:	19
},{
    id:	97,
attack:	197,
defence:	19
},{
    id:	98,
attack:	200,
defence:	20
},{
    id:	99,
attack:	255,
defence:	20
}];

/**
 * プレイヤーのクラス
 */
 class Asuka extends Players {
    /**
     * Scrolls constructor
     * @param string name アイテム名
     */
    constructor(lv) {
        super(AsukaStatusList);
        this.item = AsukaStatusList.find((v) => v.id === lv);
    }

    /**
     * 名前を取得
     */
    getName() {
        return this.item.name;
    }

    /**
     * 基礎攻撃力を取得
     */
    getAttack() {
        return this.item.attack;
    }

    /**
     * 防御力を取得
     */
    getDefence() {
        return this.item.defence;
    }

    // /**
    //  * 引数の購入金額の巻物一覧取得
    //  */
    // getBidScrolls(bid_price) {
    //     return this.list.filter((v) => v.bid_price === bid_price);
    // }

    // /**
    //  * 引数の売却金額の巻物一覧取得
    //  */
    // getSellingScrolls(selling_price) {
    //     return this.list.filter((v) => v.selling_price === selling_price);
    // }

    // /**
    //  * 引数の購入金額の巻物整形して表示
    //  */
    // printSameBidScrolls(bid_price) {
    //     const scrolls = this.getBidScrolls(bid_price)
    //     let print_string = "購入金額" + bid_price + "の巻物は\n"
    //     const bid_price_scrolls = scrolls.map((scroll) => scroll.name)
    //     if (bid_price_scrolls.length) {
    //         return print_string + bid_price_scrolls.join('\n') + "\nです。"
    //     }
    //     return print_string + "存在しません。"
    // }
}

module.exports = Asuka