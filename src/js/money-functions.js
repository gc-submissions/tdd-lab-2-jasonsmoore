function formatCurrency(amount) {
    if (amount >= 0) {
        return "$" + amount.toFixed(2);
    } else {
        let negative = amount * -1;
        return "-$" + negative.toFixed(2);
    };
};
function getCoins(cents) {
    let change = {
        quarters: 0,
        dimes: 0,
        nickels: 0,
        pennies: 0
    }
    change.quarters = Math.floor(cents / 25);
    cents = cents - change.quarters * 25;
    change.dimes = Math.floor(cents / 10);
    cents = cents - change.dimes * 10;
    change.nickels = Math.floor(cents / 5);
    cents = cents - change.nickels * 5;
    console.log(cents, change);
    change.pennies = cents;
    return change;
};
module.exports = {getCoins, formatCurrency};