/* eslint-disable radix */
/* eslint-disable no-restricted-globals */
function replaceAll (string, search, replace) {
  return string.split(search).join(replace);
}

export default function convertExpression (sample) {
  if (sample.includes('x')) {
    // eslint-disable-next-line no-param-reassign
    sample = replaceAll(sample, 'x', '*');
  }
  if (sample.includes('%')) {
    // eslint-disable-next-line no-param-reassign
    sample = replaceAll(sample, '%', '/100');
  }
  if (sample.includes('^')) {
    // eslint-disable-next-line no-param-reassign
    sample = replaceAll(sample, '^', '**');
  }
  // eslint-disable-next-line no-eval
  // eslint-disable-next-line no-use-before-define
  return `${calculate(sample)}`;
}

const calculate = (s) => {
  const len = s.length;
  if (len === 0) return 0;
  const stack = [];
  let res = 0;
  let sign = 1;

  // remove space
  s.replace(' ', '');
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < len; i++) {
    const n = s.charAt(i);
    if (!isNaN(parseInt(n))) {
      let cur = parseInt(n);
      while (i + 1 < len && !isNaN(parseInt(s.charAt(i + 1)))) {
        cur = cur * 10 + parseInt(s.charAt(i + 1));
        // eslint-disable-next-line no-plusplus
        i++;
      }
      res += cur * sign;
    } else if (n === '-') {
      sign = -1;
    } else if (n === '+') {
      sign = 1;
    } else if (n === '(') {
      stack.push(res);
      res = 0;
      stack.push(sign);
      sign = 1;
    } else if (n === ')') {
      res = res * stack.pop() + stack.pop();
    }
  }
  return res;
};
