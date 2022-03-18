export default (sequelize, Sequelize) => {
  const User = sequelize.define('users', {
    username: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
    history: {
      type: Sequelize.STRING,
      defaultValue: '0',
    },
  });

  return User;
};
