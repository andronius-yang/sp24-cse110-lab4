
function discountPrices(prices, discount) {
    // var discounted = [];
    // var finalPrice = 0;

    // let discounted = [];
    // let finalPrice = 0;

    const discounted = [];
    const length = prices.length;

    // for (var i = 0; i<prices.length; i++){
    // for (let i = 0; i<prices.length; i++){
    for (let i = 0; i<length; i++){
        // var discountedPrice = prices[i] * (1-discount);
        // let discountedPrice = prices[i] * (1-discount);
        const discountedPrice = prices[i] * (1-discount);
        // finalPrice = Math.round(discountedPrice * 100) / 100;
        discounted.push(discountedPrice);
    }

    // console.log(i);
    // console.log(discountedPrice);
    // console.log(finalPrice);
    console.log(length);

    return discounted;
}

discountPrices([100,200,300], 0.5);