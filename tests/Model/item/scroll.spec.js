const scrolls = require('../../../Model/item/Scrolls');

describe('Scrolls test', () => {
    beforeAll(() => {
        scroll = new scrolls("ワナ作動の巻物");
    });

    it('getName', () => {
        expect(scroll.getName()).toBe("ワナ作動の巻物");
    });
    it('getBidPrice', () => {
        expect(scroll.getBidPrice()).toBe(200);
    });
    it('getSellingPrice', () => {
        expect(scroll.getSellingPrice()).toBe(100);
    });
    it('getBidScrolls by none', () => {
        expect(scroll.getBidScrolls(800)).toEqual([]);
    });
    it('getSellingScrollsetName by none', () => {
        expect(scroll.getSellingScrolls(10)).toEqual([]);
    });
    it('getBidScrolls by one', () => {
        expect(scroll.getBidScrolls(200)).toEqual([{"bid_price": 200, "id": 1, "name": "ワナ作動の巻物", "selling_price": 100}]);
    });
    it('getSellingScrollsetName by one', () => {
        expect(scroll.getSellingScrolls(100)).toEqual([{"bid_price": 200, "id": 1, "name": "ワナ作動の巻物", "selling_price": 100}]);
    });
    it('getBidScrolls by multi', () => {
        expect(scroll.getBidScrolls(2000)).toEqual([ {
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
        }]);
    });
    it('getSellingScrollsetName by multi', () => {
        expect(scroll.getSellingScrolls(1000)).toEqual([ {
            id: 18,
            name: "大部屋の巻物",
            bid_price: 2000,
            selling_price: 1000,
        }, {
            id: 19,
            name: "壺われずの巻物",
            bid_price: 2000,
            selling_price: 1000,
        }]);
    });
    it('printSameBidScrollsIfExsist', () => {
        expect(scroll.printSameBidScrolls(200)).toEqual("購入金額200の巻物は\nワナ作動の巻物\nです。");
    });
    it('printSameBidScrollsIfNotExsist', () => {
        expect(scroll.printSameBidScrolls(800)).toEqual("購入金額800の巻物は\n存在しません。");
    });
});