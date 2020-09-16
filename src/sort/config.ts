import bubbleSort from "./actions/bubbleSort";
import heapSort from "./actions/heapSort";
import insertSort from "./actions/insertSort";
import mergeSort from "./actions/mergeSort";
import quickSort from "./actions/quickSort";
import selectionSort from "./actions/selectionSort";
import shellSort from "./actions/shellSort";

interface SortConfig {
    description: string;
    handler: (nums: number[]) => number[] | void
}

export const configs: SortConfig[] = [
    { description: '冒泡排序', handler: bubbleSort },
    { description: '快速排序', handler: quickSort },
    { description: '选择排序', handler: selectionSort },
    { description: '插入排序', handler: insertSort },
    { description: '希尔排序', handler: shellSort },
    { description: '归并排序', handler: mergeSort },
    { description: '堆排序', handler: heapSort },
];
