const {formatCurrency, getCoins} = require('../src/js/money-functions');
describe("formatCurrency", () => {
  test('formats amount 0 to currency $0.00', () => {
    expect(formatCurrency(0)).toBe('$0.00');
  });
  test('formats amount 657.996 to currency $658.00', () => {
    expect(formatCurrency(657.996)).toBe('$658.00');
  });
  test('formats amount -498.68 to currency -$498.68', () => {
    expect(formatCurrency(-498.68)).toBe('-$498.68');
  });
  test('formats amount -4 to currency -$4.00', () => {
    expect(formatCurrency(-4)).toBe('-$4.00');
  });
});

describe("getCoins", () => {
  test('16 cents returns 0 quarters 1 dimes 1 nickels 1 pennies', () => {
    expect(getCoins(16)).toEqual({quarters: 0, dimes: 1, nickels: 1, pennies: 1});
  });
  test('48 cents returns 1 quarters 2 dimes 0 nickels 3 pennies', () => {
    expect(getCoins(48)).toEqual({quarters: 1, dimes: 2, nickels: 0, pennies: 3});
  });
  test('99 cents returns 3 quarters 2 dimes 0 nickels 4 pennies', () => {
    expect(getCoins(99)).toEqual({quarters: 3, dimes: 2, nickels: 0, pennies: 4});
  });
  test('80 cents returns 3 quarters 0 dimes 1 nickels 0 pennies', () => {
    expect(getCoins(80)).toEqual({quarters: 3, dimes: 0, nickels: 1, pennies: 0});
  });
});