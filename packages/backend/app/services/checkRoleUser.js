import db from '../models/index';

const User = db.user;

async function checkRoleContains (id, role) {
  try {
    const user = await User.findByPk(id);
    if (!user) {
      return false;
    }
    const roles = user.getRoles();
    for (let i = 0; i < roles.length; i += 1) {
      if (role[i].name === role.toLowerCase()) {
        return true;
      }
    }
    return false;
  } catch (e) {
    return false;
  }
}
module.exports = {
  checkRoleContains,
};
