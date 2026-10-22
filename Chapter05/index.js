const nums = [7, 1, 3, 4, 6, 8];

function maxProfit(prices) {
  let x = prices.length;
  let max = prices[prices.length - 1];
  let max_profit = 0;
  while (x > 0) {
    if (max < prices[x]) {
      max = prices[x];
    }
    let profit = max - prices[x - 1];
    if (max_profit < profit) {
      max_profit = profit;
    }
    x--;
  }
  return max_profit;
}

console.log(maxProfit(nums));
