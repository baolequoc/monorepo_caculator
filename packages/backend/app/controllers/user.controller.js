/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
import db from '../models/index.js';

const User = db.user;

// eslint-disable-next-line import/prefer-default-export
export async function saveHistory (req, res) {
  try {
    console.log('save history!');
    if (!req.userId) {
      throw new Error('No authenticated!');
    }
    const userUpdate = await User.update(
      { history: req.body.history },
      { where: { id: req.userId } },
    );
    if (userUpdate) {
      res.status(200).send({ history: req.body.history });
      // eslint-disable-next-line no-console
      console.log('JWT successfully authenticated!');
    } else {
      res.status(404).send({ message: 'invalid' });
    }
  } catch (err) {
    res.status(403).send({ message: 'invalid authenticated!' });
  }
}

export async function getHistory (req, res) {
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
