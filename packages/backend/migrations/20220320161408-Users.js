/* eslint-disable no-unused-vars */
/* eslint-disable indent */

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('users', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
        },
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
      }),

  down: (queryInterface, Sequelize) => queryInterface.dropTable('users'),
};
