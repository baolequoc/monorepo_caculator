/* eslint-disable array-callback-return */
import db from '../models/index';

// eslint-disable-next-line prefer-destructuring
const ROLES = db.ROLES;
const User = db.user;

const checkDuplicateUsernameOrEmail = async (req, res, next) => {
  try {
    const userWithUsername = await User.findOne({
      where: {
        username: req.body.username,
      },
    });
    if (userWithUsername) {
      res.status(400).send({
        message: 'Failed! Username is already in use!',
      });
      return;
    }
    const userWithEmail = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (userWithEmail) {
      res.status(400).send({
        message: 'Failed! Email is already in use!',
      });
      return;
    }
    next();
  } catch (err) {
    next(err);
  }
};

const checkRolesExisted = async (req, res, next) => {
  try {
    if (req.body.roles) {
      req.body.roles.map((role) => {
        if (!ROLES.includes(role)) {
          res.status(400).send({
            message: `Failed! Role does not exist = ${role}`,
          });
        }
      });
      return;
    }
    next();
  } catch (err) {
    next(err);
  }
};

const verifySignUp = {
  checkDuplicateUsernameOrEmail,
  checkRolesExisted,
};

export default verifySignUp;
