/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let start = 0
    let end = nums.length - 1

    while (start <= end) {
        if(nums[end] === val){
            nums.pop()
            end--
        } else if (nums[start] === val) {
            nums[start] = nums[end]
            nums.pop()
            end--
            start++
        } else {
            start++
        }
    }
};