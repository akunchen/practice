/**
 * 归并排序
 * 1、计算中点坐标n，将数组拆分成 [0,n],[n+1,size-1]两个数组
 * 2、分别对2个数组再进行步骤1拆分
 * 3、合并2个数组
 * 
 * @param nums 数组
 */
export default function mergeSort(nums: number[], start: number = 0, end: number = nums.length - 1): number[] {
    if (end <= start) return [nums[start]];

    const middle = Math.floor((start + end) / 2);
    const left = mergeSort(nums, start, middle);
    const right = mergeSort(nums, middle + 1, end);

    let a = 0, b = 0;
    const results = [];
    for (let i = 0; i < left.length + right.length; i++) {
        if (a >= left.length) {
            results.push(right[b++]);
        } else if (b >= right.length) {
            results.push(left[a++]);
        } else if (left[a] < right[b]) {
            results.push(left[a++]);
        } else {
            results.push(right[b++]);
        }
    }

    return results;
}