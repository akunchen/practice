import commander from 'commander';
import chalk from 'chalk';
import ArrayHelper from '../utils/ArrayHelper';
import { configs } from './config';

configs.forEach(config => {
    const cmd = config.handler.name.replace('Sort', '');
    commander.command(cmd)
        .description(config.description)
        .option('-l, --length <number>', '数组长度', '10')
        .option('-u, --unique', '数组元素是否唯一', false)
        .action(function ({ length, unique }: { length: number, unique: boolean }) {
            const before = ArrayHelper.random(length, unique);
            console.log('排序前：', chalk.yellow(before.join(', ')))
            const after = config.handler(before) || before;
            console.log('排序后：', chalk.yellow(after.join(', ')))
        });
});

commander.parse(process.argv);