const Characters = require('./Characters');
const AsukaStatusList = [{
    lv: 1,
    attack: 7,
    defence: 4
},{
    lv: 2,
    attack: 8,
    defence: 4
},{
    lv: 3,
    attack: 10,
    defence: 4
},{
    lv: 4,
    attack: 12,
    defence: 4
},{
    lv: 5,
    attack: 15,
    defence: 4
},{
    lv: 6,
    attack: 17,
    defence: 4
},{
    lv: 7,
    attack: 18,
    defence: 4
},{
    lv: 8,
    attack: 20,
    defence: 4
},{
    lv: 9,
    attack: 22,
    defence: 4
},{
    lv: 10,
    attack: 24,
    defence: 5
},{
    lv: 11,
    attack: 26,
    defence: 5
},{
    lv: 12,
    attack: 28,
    defence: 5
},{
    lv: 13,
    attack: 31,
    defence: 5
},{
    lv: 14,
    attack: 34,
    defence: 5
},{
    lv: 15,
    attack: 37,
    defence: 5
},{
    lv: 16,
    attack: 41,
    defence: 5
},{
    lv: 17,
    attack: 44,
    defence: 5
},{
    lv: 18,
    attack: 47,
    defence: 5
},{
    lv: 19,
    attack: 50,
    defence: 5
},{
    lv: 20,
    attack: 53,
    defence: 5
},{
    lv: 21,
    attack: 56,
    defence: 5
},{
    lv: 22,
    attack: 58,
    defence: 5
},{
    lv: 23,
    attack: 60,
    defence: 5
},{
    lv: 24,
    attack: 63,
    defence: 5
},{
    lv: 25,
    attack: 66,
    defence: 5
},{
    lv: 26,
    attack: 68,
    defence: 5
},{
    lv: 27,
    attack: 70,
    defence: 5
},{
    lv: 28,
    attack: 72,
    defence: 5
},{
    lv: 29,
    attack: 75,
    defence: 5
},{
    lv: 30,
    attack: 78,
    defence: 5
},{
    lv: 31,
    attack: 80,
    defence: 5
},{
    lv: 32,
    attack: 82,
    defence: 5
},{
    lv: 33,
    attack: 84,
    defence: 5
},{
    lv: 34,
    attack: 86,
    defence: 6
},{
    lv:	35,
    attack:	88,
    defence: 6
},{
    lv:	36,
    attack:	90,
    defence:	6
},{
    lv:	37,
    attack:	92,
    defence:	6
},{
    lv:	37,
attack:	92,
defence:	6
},{
    lv:	38,
attack:	94,
defence:	6
},{
    lv:	39,
attack:	96,
defence:	6
},{
    lv:	40,
attack:	98,
defence:	6
},{
    lv:	41,
attack:	100,
defence:	6
},{
    lv:	42,
attack:	102,
defence:	6
},{
    lv:	43,
attack:	104,
defence:	6
},{
    lv:	44,
attack:	106,
defence:	6
},{
    lv:	45,
attack:	108,
defence:	6
},{
    lv:	46,
attack:	110,
defence:	6
},{
    lv:	47,
attack:	112,
defence:	6
},{
    lv:	48,
attack:	114,
defence:	6
},{
    lv:	49,
attack:	116,
defence:	6
},{
    lv:	50,
attack:	118,
defence:	6
},{
    lv:	51,
attack:	120,
defence:	6
},{
    lv:	52,
attack:	122,
defence:	6
},{
    lv:	53,
attack:	124,
defence:	6
},{
    lv:	54,
attack:	126,
defence:	6
},{
    lv:	55,
attack:	127,
defence:	6
},{
    lv:	56,
attack:	128,
defence:	6
},{
    lv:	57,
attack:	129,
defence:	6
},{
    lv:	58,
attack:	130,
defence:	6
},{
    lv:	59,
attack:	131,
defence:	7
},{
    lv:	60,
attack:	132,
defence:	7
},{
    lv:	61,
attack:	133,
defence:	7
},{
    lv:	62,
attack:	134,
defence:	8
},{
    lv:	63,
attack:	135,
defence:	8
},{
    lv:	64,
attack:	136,
defence:	8
},{
    lv:	65,
attack:	137,
defence:	9
},{
    lv:	66,
attack:	138,
defence:	9
},{
    lv:	67,
attack:	139,
defence:	9
},{
    lv:	68,
attack:	140,
defence:	9
},{
    lv:	69,
attack:	141,
defence:	10
},{
    lv:	70,
attack:	142,
defence:	10
},{
    lv:	71,
attack:	143,
defence:	10
},{
    lv:	72,
attack:	144,
defence:	11
},{
    lv:	73,
attack:	145,
defence:	11
},{
    lv:	74,
attack:	146,
defence:	11
},{
    lv:	75,
attack:	147,
defence:	12
},{
    lv:	76,
attack:	148,
defence:	12
},{
    lv:	77,
attack:	150,
defence:	12
},{
    lv:	78,
attack:	152,
defence:	13
},{
    lv:	79,
attack:	154,
defence:	13
},{
    lv:	80,
attack:	156,
defence:	13
},{
    lv:	81,
attack:	158,
defence:	14
},{
    lv:	82,
attack:	160,
defence:	14
},{
    lv:	83,
attack:	162,
defence:	14
},{
    lv:	84,
attack:	164,
defence:	15
},{
    lv:	85,
attack:	166,
defence:	15
},{
    lv:	86,
attack:	168,
defence:	15
},{
    lv:	87,
attack:	170,
defence:	16
},{
    lv:	88,
attack:	172,
defence:	16
},{
    lv:	89,
attack:	174,
defence:	16
},{
    lv:	90,
attack:	176,
defence:	17
},{
    lv:	91,
attack:	180,
defence:	17
},{
    lv:	92,
attack:	183,
defence:	17
},{
    lv:	93,
attack:	186,
defence:	18
},{
    lv:	94,
attack:	189,
defence:	18
},{
    lv:	95,
attack:	193,
defence:	18
},{
    lv:	96,
attack:	195,
defence:	19
},{
    lv:	97,
attack:	197,
defence:	19
},{
    lv:	98,
attack:	200,
defence:	20
},{
    lv:	99,
attack:	255,
defence:	20
}];

/**
 * プレイヤーのクラス
 */
 class Asuka extends Characters {
    /**
     * Scrolls constructor
     * @param string name アイテム名
     */
    constructor(lv) {
        super(AsukaStatusList);
        this.character = AsukaStatusList.find((v) => v.lv === lv);
    }

    /**
     * 基礎攻撃力を取得
     */
    getAttack() {
        return this.character.attack;
    }

    /**
     * 防御力を取得
     */
    getDefence() {
        return this.character.defence;
    }
}

module.exports = Asuka