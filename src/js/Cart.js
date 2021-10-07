class Cart {
    constructor() {
        this.items = [];
    };
    add(product) {
       this.items.push(product);
    };
    getItemCount() {
       return this.items.length;
    };
    getTotalBeforeTax() {
        let totalPrice = 0;
        this.items.forEach(e => {
            totalPrice += e.price;
        })
        return totalPrice;
    };
    getTotalWithTax() {
        let totalWithTax = 0;
        this.items.forEach(e => {
            totalWithTax += e.getPriceWithTax();
        })
        return totalWithTax;
    };
    getTax() {
        return this.getTotalWithTax() - this.getTotalBeforeTax();
    };
};
module.exports = Cart;