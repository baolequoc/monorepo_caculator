/* eslint-disable no-unused-vars */
/* eslint-disable import/no-absolute-path */
/* eslint-disable import/no-unresolved */

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('roles', [{
    id: 1,
    name: 'user',
  },
  {
    id: 2,
    name: 'moderator',
  },
  {
    id: 3,
    name: 'admin',
  }]),
  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('roles', null, {}),
};
