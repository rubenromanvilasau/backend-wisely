'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('users', [
        {
            name: 'Rubén Román',
            email: 'rubenromanvilasau@outlook.com',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            name: 'Wisely Team',
            email: 'wiselyteam@wisely.com',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
    ]);

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('users', null, {});
  }
};
