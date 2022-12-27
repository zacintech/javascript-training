var sellingPrice = 200;
var listingPrice = 499;


var discountPercent = ((listingPrice - sellingPrice) / listingPrice) * 100;

console.log(discountPercent);

roundedDiscountPercent = Math.round(discountPercent);

console.log(roundedDiscountPercent);

