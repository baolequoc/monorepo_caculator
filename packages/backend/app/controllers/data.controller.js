/* eslint-disable import/prefer-default-export */
/* eslint-disable no-console */
/* eslint-disable import/extensions */
import convertExpresstion from '../utils/convertExpression.js';

export async function caculateExpression (req, res) {
  try {
    if (!req.body.value) {
      throw new Error('Not have value');
    }
    const sample = await convertExpresstion(req.body.value);
    res.send(
      { value: sample },
    );
  } catch (err) {
    res.send(
      { value: '0' },
    );
  }
}
