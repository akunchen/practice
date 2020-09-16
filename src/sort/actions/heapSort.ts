import ArrayHelper from "../../utils/ArrayHelper";

/**
 * 堆调整
 * 
 * @param nums 
 * @param target 
 * @param range 
 */
function adjust(nums: number[], target: number, range: number) {
    const temp = nums[target];

    let child = 2 * target + 1;
    while (child < range) {
        if (child + 1 < range && nums[child + 1] < nums[child]) { // 右子节点比左子节点还小
            child++;
        }

        if (nums[target] < nums[child]) { // 目标节点小于子节点
            break;
        }

        //单向赋值
        nums[target] = nums[child];
        target = child;
        child = 2 * target + 1;
    }

    nums[target] = temp;
}

/**
 * 堆排序
 * 基础知识：
 * 1、最小堆结构，形同二叉树，每个节点的值，均小于其子节点的值，根节点即为最小值
 * 2、堆可以用数组来表示，i的左节点即: 2i+1，i的右节点即: 2i+2，父节点即: Math.floor((i-1)/2)
 * 
 * @param nums 数组
 */
export default function heapSort(nums: number[]) {
    for (let i = 0; i < nums.length; i++) {
        adjust(nums, i, nums.length);
    }

    // for (let i = nums.length; i >= 1; i++) {
    //     ArrayHelper.swap(nums, i, 0);
    //     adjust(nums, 0, i - 1);
    // }
}