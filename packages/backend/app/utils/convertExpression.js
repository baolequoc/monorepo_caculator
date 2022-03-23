
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
    const result = limitedEvaluate(sample);
    return result;
  } catch (e) {
    return 'Undefined';
  }
}
