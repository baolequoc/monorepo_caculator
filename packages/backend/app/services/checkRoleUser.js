import db from '../models/index';

const User = db.user;

async function checkRoleContains (id, role) {
  try {
    const user = await User.findByPk(id);
    if (!user) {
      return false;
    }
    const roles = user.getRoles();
    return roles.filter((r) => r.name === role.toLowerCase());
  } catch (e) {
    return false;
  }
}
module.exports = {
  checkRoleContains,
};
