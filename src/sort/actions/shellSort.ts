import insertSort from "./insertSort";

/**
 * 希尔排序，对插入排序的一种优化
 * 1、将数分为每2个一组，共gap组，进行间隔为gap插入排序
 * 2、将gap细化，gap = Math.floor(gap / 2)，再进行插入排序
 * 3、直到gap=0
 * 
 * @param nums 数组
 */
export default function shellSort(nums: number[]) {
    let gap = nums.length;
    while ((gap = Math.floor(gap / 2)) >= 1) {
        insertSort(nums, gap);
    }
}