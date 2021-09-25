import { createInterface } from 'readline';
import { writeFileSync } from 'fs';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '请输入 1~100 的整数：',
});

const number = Math.floor(Math.random() * 100 + 1);
const data = number.toString();
writeFileSync('number.txt', data);

rl.prompt();

rl.on('line', line => {
  if (isNaN(line) || line < 1 || line > 100 || !Number.isInteger(parseFloat(line))) {
    console.log('输入错误！');
  } else if (line > number) {
    console.log('猜大了！');
  } else if (line < number) {
    console.log('猜小了！');
  } else {
    console.log('恭喜你！猜对了！');
    process.exit();
  }
  rl.prompt();
});
