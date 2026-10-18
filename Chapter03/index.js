const arr = [3, 2, 2, 1, 3, 4];

function removeElement(nums, val) {
  let x = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[x] = nums[i];
      x = x + 1;
    }
  }
  return x;
}

console.log(removeElement(arr, 3));
