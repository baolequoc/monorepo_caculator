import { hashSync, compareSync } from 'bcryptjs';
import db from '../models/index';
// eslint-disable-next-line import/named
import { getSignedToken } from '../services/jwt_service';

const User = db.user;
const Role = db.role;

const { Op } = db.Sequelize;

export async function signup (req, res) {
  try {
    // Save User to Database
    const user = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: hashSync(req.body.password, 8),
    });

    if (req.body.roles) {
      const role = await Role.findAll({
        where: {
          name: {
            [Op.or]: req.body.roles,
          },
        },
      });
      user.setRoles(role);
      res.send({ message: 'User registered successfully!' });
    } else {
      // user role = 1
      user.setRoles([1]).then(() => {
        res.send({ message: 'User registered successfully!' });
      });
    }
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
}

export async function signin (req, res, next) {
  try {
    const user = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (!user) {
      res.status(404).send({ message: 'User Not found.' });
      return;
    }
    const passwordIsValid = compareSync(req.body.password, user.password);
    if (!passwordIsValid) {
      res.status(401).send({
        accessToken: null,
        message: 'Invalid Password!',
      });
      return;
    }
    const token = await getSignedToken({ id: user.id });
    const authorities = [];
    const roles = await user.getRoles();
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < roles.length; i += 1) {
      authorities.push(`ROLE_${roles[i].name.toUpperCase()}`);
    }
    res.status(200).send({
      id: user.id,
      username: user.username,
      email: user.email,
      roles: authorities,
      accessToken: token,
    });
  } catch (err) {
    next(err);
  }
}
