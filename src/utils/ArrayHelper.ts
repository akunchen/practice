import { Random } from 'mockjs';

export default class ArrayHelper {

    /**
     * 生成随机数
     * 
     * @param amount 数量
     * @param unique 是否唯一
     */
    public static random(amount: number, unique: boolean = false) {
        const nums: number[] = [];
        const min = 1, max = Math.min(2 * amount, Number.MAX_VALUE);
        while (nums.length < amount) {
            const num = Random.integer(min, max);
            if (!unique || !nums.includes(num)) {
                nums.push(num);
            }
        }

        return nums;
    }

    /**
     * 数组2个位置互换
     * 
     * @param nums 数组
     * @param a 坐标a
     * @param b 坐标b
     */
    public static swap(nums: number[], a: number, b: number) {
        const temp = nums[a];
        nums[a] = nums[b];
        nums[b] = temp;
    }

    /**
     * 打印树
     * 
     *  -1
     *   |-1-1
     *   | |-1-1-1
     *   | |-1-1-2
     *   |-1-2
     *   | |-1-2-1
     *   | |-1-2-1
     * 
     * @param nums 数组
     * @todo need fix
     */
    public static printTree(nums: number[]) {
        const groups: number[][] = [];
        let size: number = 1, group: number[] = [];

        for (let i = 0; i < nums.length; i++) {
            if (group.length === 0) {
                groups.push(group);
            }

            group.push(nums[i]);
            if (group.length === size) {
                group = [];
                size *= 2;
            }
        }

        console.log();
        console.log(' '.repeat(20), 'tree');
        const lines = [];
        for (let i = 0; i < groups.length; i++) {
            const group = groups[groups.length - 1 - i];
            const prefix = 4 * i;
            const space = i * i + 4;
            lines.push('-'.repeat(prefix) + group.join('-'.repeat(space)));
        }
        lines.reverse();
        console.log(lines.join('\n'));
    }
}
