import ArrayHelper from "../../utils/ArrayHelper";

/**
 * 选择排序：
 * 1、查找从i=0开始，之后的最小元素的坐标j
 * 2、交换，i 和 j
 * 3、i++
 * 4、重复步骤1~3知道结束
 * 
 * @param nums 数组
 */
export default function selectionSort(nums: number[]) {
    for (let i = 0; i < nums.length; i++) {
        let min = i;
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] < nums[min]) min = j;
        }
        ArrayHelper.swap(nums, i, min);
    }
}