var prices = [1.23, 48.11, 90.11, 8.50, 9.99, 1.00, 1.10, 67.00];
for (var i = 0; i < prices.length; i++) {
   if (i === 0 ) {
      prices[i] = 10;
   }
   else if (i === 2) {
      prices[i] = 20;
   }
   else if (i === 6) {
      prices[i] = 30;
   }
}
console.log(prices);