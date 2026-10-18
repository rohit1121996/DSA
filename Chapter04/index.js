// Reverse string
const arr = ["h", "e", "l", "l", "o"];

function reverseString(s) {
  let len = s.length;
  let halfLen = Math.floor(len / 2);
  for (let i = 0; i < halfLen; i++) {
    let temp = s[i];
    s[i] = s[len - 1 - i];
    s[len - 1 - i] = temp;
  }
  return s;
}
console.log(reverseString(arr));
