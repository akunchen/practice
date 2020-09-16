import ArrayHelper from "../../utils/ArrayHelper";

/**
 * 冒泡排序
 * 
 * @param nums 数组
 */
export default function bubbleSort(nums: number[]) {
    const size = nums.length;
    for (let i = 0; i < size; i++) {
        for (let j = i + 1; j < size; j++) {
            if (nums[i] > nums[j]) {
                ArrayHelper.swap(nums, i, j);
            }
        }
    }
}