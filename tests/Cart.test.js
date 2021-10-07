const Cart = require('../src/js/Cart')
const Product = require('../src/js/Product')
describe("Cart", () => {
  test('items set to empty array', () => {
    const cart = new Cart();
    expect(cart.items).toEqual([]);
  });
  test('make sure product adds to array Candy', () => {
    const cart = new Cart();
    const product = new Product('Candy', 1.75, true);
    cart.add(product);
    expect(cart.items).toEqual(expect.arrayContaining([expect.objectContaining({name: 'Candy', price: 1.75, taxable: true})]));
  });
  test('make sure product adds to array Candy/Pop', () => {
    const cart = new Cart();
    const candy = new Product('Candy', 1.75, true);
    const pop = new Product('Pop', 2.50, true);
    cart.add(candy);
    cart.add(pop);
    expect(cart.items).toEqual(expect.arrayContaining([expect.objectContaining({name: 'Candy', price: 1.75, taxable: true})]));
  });
  test('get total item count of array to be 2', () => {
    const cart = new Cart();
    const candy = new Product('Candy', 1.75, true);
    const pop = new Product('Pop', 2.50, true);
    cart.add(candy);
    cart.add(pop);
    expect(cart.getItemCount()).toEqual(2);
  });
  test('get total item count of array to be 3', () => {
    const cart = new Cart();
    const candy = new Product('Candy', 1.75, true);
    const pop = new Product('Pop', 2.50, true);
    const canned = new Product('Canned Goods', 3.15, false);
    cart.add(candy);
    cart.add(pop);
    cart.add(canned);
    expect(cart.getItemCount()).toEqual(3);
  });
  test('total price of all items', () => {
    const cart = new Cart();
    const candy = new Product('Candy', 1.75, true);
    const pop = new Product('Pop', 2.50, true);
    const canned = new Product('Canned Goods', 3.15, false);
    cart.add(candy);
    cart.add(pop);
    cart.add(canned);
    expect(cart.getTotalBeforeTax()).toBeCloseTo(7.40);
  });
  test('total price of all items', () => {
    const cart = new Cart();
    const cheese = new Product('Cheese', 4.55, false);
    const milk = new Product('Milk', 5.50, false);
    const toiletPaper = new Product('Toilet Paper', 8.95, true);
    const light = new Product('Light Bulbs', 11.49, true);
    cart.add(cheese);
    cart.add(milk);
    cart.add(toiletPaper);
    cart.add(light);
    expect(cart.getTotalBeforeTax()).toBeCloseTo(30.49);
  });
  test('total price of all items with tax', () => {
    const cart = new Cart();
    const cheese = new Product('Cheese', 4.55, false);
    const milk = new Product('Milk', 5.50, false);
    const toiletPaper = new Product('Toilet Paper', 8.95, true);
    const light = new Product('Light Bulbs', 11.49, true);
    cart.add(cheese);
    cart.add(milk);
    cart.add(toiletPaper);
    cart.add(light);
    expect(cart.getTotalWithTax()).toBeCloseTo(32.53);
  });
  test('total price of all items with tax', () => {
    const cart = new Cart();
    const candy = new Product('Candy', 1.75, true);
    const pop = new Product('Pop', 2.50, true);
    const canned = new Product('Canned Goods', 3.15, false);
    cart.add(candy);
    cart.add(pop);
    cart.add(canned);
    expect(cart.getTotalWithTax()).toBeCloseTo(7.83);
  });
  test('get price of just the tax', () => {
    const cart = new Cart();
    const cheese = new Product('Cheese', 4.55, false);
    const milk = new Product('Milk', 5.50, false);
    const toiletPaper = new Product('Toilet Paper', 8.95, true);
    const light = new Product('Light Bulbs', 11.49, true);
    cart.add(cheese);
    cart.add(milk);
    cart.add(toiletPaper);
    cart.add(light);
    expect(cart.getTax()).toBeCloseTo(2.04);
  });
});