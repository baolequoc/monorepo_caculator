import db from '../models/index';

// eslint-disable-next-line prefer-destructuring
const ROLES = db.ROLES;
const User = db.user;

const checkDuplicateUsernameOrEmail = async (req, res, next) => {
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
};

const checkRolesExisted = async (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i += 1) {
      if (!ROLES.includes(req.body.roles[i])) {
        res.status(400).send({
          message: `Failed! Role does not exist = ${req.body.roles[i]}`,
        });
        return;
      }
    }
  }
  next();
};

const verifySignUp = {
  checkDuplicateUsernameOrEmail,
  checkRolesExisted,
};

export default verifySignUp;
