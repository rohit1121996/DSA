const num1 = [1, 2, 3];
const num2 = [2, 4, 5, 6];

function margedSortedArrary(m, num1, n, num2) {
  for (let i = m + n - 1; i > 0; i--) {
    if (m > 0 && num1[m - 1] > num2[n - 1]) {
      num1[i] = num1[m - 1];
      m--;
    } else if (n > 0) {
      num1[i] = num2[n - 1];
      n--;
    }
  }
  return num1;
}

console.log(margedSortedArrary(3, num1, 4, num2));
