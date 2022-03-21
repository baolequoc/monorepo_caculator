/* eslint-disable no-console */
/* eslint-disable import/extensions */
import db from '../models/index.js';
import convertExpresstion from '../utils/convertExpression.js';

const User = db.user;

export async function getData (req, res) {
  try {
    if (!req.userId) {
      throw new Error('Not exist value id');
    }
    const user = await User.findByPk(req.userId);
    if (user) {
      res.send({ history: user.history });
    } else {
      throw new Error('Not exist user');
    }
  } catch (err) {
    res.send({ history: '0' });
  }
}

export async function exportData (req, res) {
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

export async function saveData (req, res) {
  try {
    if (!req.userId) {
      throw new Error('No authenticated!');
    }
    const userUpdate = await User.update(
      { history: req.body.history },
      { where: { id: req.userId } },
    );
    if (userUpdate) {
      res.status(200).send({ history: req.body.history });
      console.log('JWT successfully authenticated!');
    } else {
      res.status(404).send({ message: 'invalid' });
    }
  } catch (err) {
    res.status(403).send({ message: 'invalid authenticated!' });
  }
}
