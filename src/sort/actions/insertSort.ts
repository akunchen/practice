/**
 * 插入排序：
 * 1、从数组i=1开始，将大于i的数都往后移动一位
 * 2、i++，直到结束
 * 
 * @param nums 数组
 * @param offset 间隔
 */
export default function insertSort(nums: number[], offset: number = 1) {
    for (let i = offset; i < nums.length; i += offset) {
        if (nums[i] >= nums[i - offset]) continue;

        const target = nums[i];
        let j = i;
        for (; j > 0; j -= offset) {
            if (nums[j - offset] < target) break;
            nums[j] = nums[j - offset];
        }
        nums[j] = target;
    }
}