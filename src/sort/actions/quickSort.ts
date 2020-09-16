import ArrayHelper from "../../utils/ArrayHelper";

/**
 * 快速排序
 * 1、选取一个基准数，一般取第一个
 * 2、将小于基准数的放于数组的左侧，将大于基准数的放在数组的右侧
 * 3、这样的话，该基准数就已经确定了它的位置
 * 4、分别对数组的左侧和右侧进行排序，直到结束
 * 
 * @param nums 数组
 * @param start 起始坐标
 * @param end 结束坐标
 */
export default function quickSort(nums: number[], start: number = 0, end: number = nums.length - 1) {
    if (end <= start) return;

    const compare = nums[start];
    let left = start, right = end;
    while (left < right) {
        while (left < right) { // 查找右侧数组第一个小于基准数的，把他放到左边数组
            if (nums[right] < compare) {
                ArrayHelper.swap(nums, left, right);
                break;
            } else {
                right--;
            }
        }
        while (right > left) { // 查找左侧数组第一个大于基准数的，把他放到右边数组
            if (nums[left] > compare) {
                ArrayHelper.swap(nums, left, right);
                break;
            } else {
                left++;
            }
        }
    }

    nums[left] = compare;
    quickSort(nums, start, left - 1);
    quickSort(nums, left + 1, end);
}