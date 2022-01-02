function productOfAnyAmountOfNumbers() {
    var i, product = 1;
    for (i = 0; i < arguments.length; i++) {
        product *= arguments[i];
    }
    return product;
};

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;