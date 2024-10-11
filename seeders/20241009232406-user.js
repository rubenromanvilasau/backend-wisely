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
   
   console.log('-----------------SEEDING DATABASE-----------------');
    await queryInterface.bulkInsert('users', [
        {
            name: 'Rubén Román',
            email: 'rubenromanvilasau@outlook.com',
            created_at: new Date(),
            updated_at: new Date(),
        },
        {
            name: 'Wisely Team',
            email: 'wiselyteam@wisely.com',
            created_at: new Date(),
            updated_at: new Date(),
        },
    ]);
    console.log('-----------------DATABASE SEEDED-----------------');

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
