const Product = require('../src/js/Product');
describe("Product", () => {
    test('Should contain properties name, price, taxable', () => {
      const product = new Product('Chips', 1.50, true);
      expect(product).toHaveProperty('name');
      expect(product).toHaveProperty('price');
      expect(product).toHaveProperty('taxable');
    });
    test('If price is taxable, returns price + 10% tax', () => {
      const product = new Product('Candy', 1.75, true);
      expect(product.getPriceWithTax()).toBeCloseTo(1.925);
    });
    test('If price is taxable, returns price + 10% tax', () => {
      const product = new Product('Pop', 2.50, true);
      expect(product.getPriceWithTax()).toBeCloseTo(2.75);
    });
    test('If price is not taxable, returns price', () => {
      const product = new Product('Canned Goods', 3.15, false);
      expect(product.getPriceWithTax()).toBeCloseTo(3.15);
    });
});
