'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('leaderboards', [
      {
        userId: 1,
        username: "guest",
        score: 0
      },
      {
        userId: 1,
        username: "guest",
        score: 0
      },
      {
        userId: 1,
        username: "guest",
        score: 0
      },
      {
        userId: 1,
        username: "guest",
        score: 0
      },
      {
        userId: 1,
        username: "guest",
        score: 0
      },
      {
        userId: 1,
        username: "guest",
        score: 0
      },
      {
        userId: 1,
        username: "guest",
        score: 0
      },
      {
        userId: 1,
        username: "guest",
        score: 0
      },
      {
        userId: 1,
        username: "guest",
        score: 0
      },
      {
        userId: 1,
        username: "guest",
        score: 0
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
