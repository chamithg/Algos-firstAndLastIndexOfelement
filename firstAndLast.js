/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function searchRange(nums, target) {
  let positions = [];
  if (nums.length === 1 && nums[0] == target) {
    return [0, 0];
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == target && positions.length === 0) {
      positions.push(i);
    } else if (nums[i] !== target && positions.length !== 0) {
      positions.push(i - 1);
      return positions;
    }
    if (nums[i] === target && positions.length !== 0 && i == nums.length - 1) {
      positions.push(i);
      return positions;
    }
  }
  return [-1, -1];
}

nums = [1, 1, 1, 1, 2, 2, 2, 2, 2];
target = 2;

console.log(searchRange(nums, target));
