/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let rightIdx = m + n - 1
    let nIdx = n - 1
    let mIdx = m - 1

    while(nIdx >= 0){
        if(mIdx >= 0 && nums1[mIdx] > nums2[nIdx]) {
            nums1[rightIdx] = nums1[mIdx]
            mIdx--
        } else {
            nums1[rightIdx] = nums2[nIdx]
            nIdx--
        }
        rightIdx--
    }
};