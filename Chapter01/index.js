// Leaner search algorithm implementation in JavaScript
const array = [2, 1, 3, 5, 4, 8, 7, 6];

function leanerSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
    else continue;
  }
  return -1;
}

console.log(leanerSearch(array, 5));

// Binary search algorithm implementation in JavaScript

const arr2 = [1, 3, 4, 5, 7, 8, 13, 15, 18];

function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] > target) {
      end = mid - 1; // here the logic is if mid element is greater than the target that means my number belongs to left side of array so now end = mid - 1
    } else {
      start = mid + 1; // here the logic is if mid element is less than the target number that means my number belongs to right side of the array so start = mid + 1
    }
  }
  return -1;
}

console.log(binarySearch(arr2, 8));
