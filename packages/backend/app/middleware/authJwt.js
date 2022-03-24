// eslint-disable-next-line import/named
import { verify } from '../services/jwt_service';
// eslint-disable-next-line import/named
import { checkRoleContains } from '../services/checkRoleUser';

const decodeUserIdByToken = async (req, res, next) => {
  try {
    const token = req.headers['x-access-token'];
    if (!token) throw new Error('No token');
    const decoded = await verify(token);
    req.userId = decoded.id;
  } catch (err) {
    req.userId = null;
  }
  next();
};


const isAdmin = async (req, res, next) => {
  try {
    const checkRoleAdmin = await checkRoleContains(req.userId, 'admin');
    if (checkRoleAdmin) {
      next();
      // eslint-disable-next-line no-useless-return
      return;
    }
    res.status(403).send({
      message: 'Require Admin Role!',
    });
  } catch (err) {
    next(err);
  }
};

const isModerator = async (req, res, next) => {
  try {
    const checkRoleMod = await checkRoleContains(req.userId, 'moderator');
    if (checkRoleMod) {
      next();
      // eslint-disable-next-line no-useless-return
      return;
    }
    res.status(403).send({
      message: 'Require Moderator Role!',
    });
  } catch (err) {
    next(err);
  }
};

const isModeratorOrAdmin = async (req, res, next) => {
  try {
    const checkRoleAdmin = await checkRoleContains(req.userId, 'admin');
    const checkRoleMod = await checkRoleContains(req.userId, 'moderator');
    if (checkRoleAdmin || checkRoleMod) {
      next();
      // eslint-disable-next-line no-useless-return
      return;
    }
    res.status(403).send({
      message: 'Require Moderator or Admin Role!',
    });
  } catch (err) {
    next(err);
  }
};

const authJwt = {
  decodeUserIdByToken,
  isAdmin,
  isModerator,
  isModeratorOrAdmin,
};
export default authJwt;
