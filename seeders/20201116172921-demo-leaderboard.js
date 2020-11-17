'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('leaderboards', [
      {
        user_id: 1,
        username: "guest",
        score: 0
      },
      {
        user_id: 1,
        username: "guest",
        score: 0
      },
      {
        user_id: 1,
        username: "guest",
        score: 0
      },
      {
        user_id: 1,
        username: "guest",
        score: 0
      },
      {
        user_id: 1,
        username: "guest",
        score: 0
      },
      {
        user_id: 1,
        username: "guest",
        score: 0
      },
      {
        user_id: 1,
        username: "guest",
        score: 0
      },
      {
        user_id: 1,
        username: "guest",
        score: 0
      },
      {
        user_id: 1,
        username: "guest",
        score: 0
      },
      {
        user_id: 1,
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
