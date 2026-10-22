const arr = [0, 1, 0, 3, 12];
const moveZeroes = function (nums) {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0 && nums[j] === 0) {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      j++;
    } else if (nums[j] !== 0) {
      j++;
    }
  }
  return nums;
};

console.log(moveZeroes(arr));
