
import { create, all } from 'mathjs';

const math = create(all);
const limitedEvaluate = math.evaluate;

math.import({
  import () { throw new Error('Function import is disabled'); },
  createUnit () { throw new Error('Function createUnit is disabled'); },
  evaluate () { throw new Error('Function evaluate is disabled'); },
  parse () { throw new Error('Function parse is disabled'); },
  simplify () { throw new Error('Function simplify is disabled'); },
  derivative () { throw new Error('Function derivative is disabled'); },
}, { override: true });
/* eslint-disable radix */
/* eslint-disable no-restricted-globals */
const replaceAll = (string, search, replace) => string.split(search).join(replace);

export default function convertExpression (expression) {
  try {
    let sample = expression;
    if (sample.includes('x')) {
      sample = replaceAll(sample, 'x', '*');
    }
    if (sample.includes('%')) {
      sample = replaceAll(sample, '%', '/100');
    }
    if (sample.includes('^')) {
      sample = replaceAll(sample, '^', '**');
    }
    if (/[a-z]/.test(sample) || /[A-Z]/.test(sample)) {
      throw new Error('Undifine');
    }
    const result = limitedEvaluate(sample);
    return result;
  } catch (e) {
    return 'Undefine';
  }
}

// const calculate = (s) => {
//   const len = s.length;
//   if (len === 0) return 0;
//   const stack = [];
//   let res = 0;
//   let sign = 1;

//   // remove space
//   s.replace(' ', '');
//   // eslint-disable-next-line no-plusplus
//   for (let i = 0; i < len; i++) {
//     const n = s.charAt(i);
//     if (!isNaN(parseInt(n))) {
//       let cur = parseInt(n);
//       while (i + 1 < len && !isNaN(parseInt(s.charAt(i + 1)))) {
//         cur = cur * 10 + parseInt(s.charAt(i + 1));
//         // eslint-disable-next-line no-plusplus
//         i++;
//       }
//       res += cur * sign;
//     } else if (n === '-') {
//       sign = -1;
//     } else if (n === '+') {
//       sign = 1;
//     } else if (n === '(') {
//       stack.push(res);
//       res = 0;
//       stack.push(sign);
//       sign = 1;
//     } else if (n === ')') {
//       res = res * stack.pop() + stack.pop();
//     }
//   }
//   return res;
// };
