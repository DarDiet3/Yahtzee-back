'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Gamedata', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER
      },
      victorypoints: {
        type: Sequelize.INTEGER
      },
      rock: {
        type: Sequelize.INTEGER
      },
      wheat: {
        type: Sequelize.INTEGER
      },
      sheep: {
        type: Sequelize.INTEGER
      },
      brick: {
        type: Sequelize.INTEGER
      },
      wood: {
        type: Sequelize.INTEGER
      },
      gold: {
        type: Sequelize.INTEGER
      },
      settlements: {
        type: Sequelize.INTEGER
      },
      cities: {
        type: Sequelize.INTEGER
      },
      roads: {
        type: Sequelize.INTEGER
      },
      knights: {
        type: Sequelize.INTEGER
      },
      jokers: {
        type: Sequelize.INTEGER
      },
      round1: {
        type: Sequelize.INTEGER
      },
      round2: {
        type: Sequelize.INTEGER
      },
      round3: {
        type: Sequelize.INTEGER
      },
      round4: {
        type: Sequelize.INTEGER
      },
      round5: {
        type: Sequelize.INTEGER
      },
      round6: {
        type: Sequelize.INTEGER
      },
      round7: {
        type: Sequelize.INTEGER
      },
      round8: {
        type: Sequelize.INTEGER
      },
      round9: {
        type: Sequelize.INTEGER
      },
      round10: {
        type: Sequelize.INTEGER
      },
      round11: {
        type: Sequelize.INTEGER
      },
      round12: {
        type: Sequelize.INTEGER
      },
      round13: {
        type: Sequelize.INTEGER
      },
      round14: {
        type: Sequelize.INTEGER
      },
      round15: {
        type: Sequelize.INTEGER
      },
      trades: {
        type: Sequelize.INTEGER
      },
      tradedrock: {
        type: Sequelize.INTEGER
      },
      tradedwheat: {
        type: Sequelize.INTEGER
      },
      tradedsheep: {
        type: Sequelize.INTEGER
      },
      tradedbrick: {
        type: Sequelize.INTEGER
      },
      tradedwood: {
        type: Sequelize.INTEGER
      },
      jokerock: {
        type: Sequelize.INTEGER
      },
      jokewheat: {
        type: Sequelize.INTEGER
      },
      jokesheep: {
        type: Sequelize.INTEGER
      },
      jokebrick: {
        type: Sequelize.INTEGER
      },
      jokewood: {
        type: Sequelize.INTEGER
      },
      gamecomplete:{
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('gamedata');
  }
};