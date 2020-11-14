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
      rolled1: {
        type: Sequelize.INTEGER
      },
      rolled2: {
        type: Sequelize.INTEGER
      },
      rolled3: {
        type: Sequelize.INTEGER
      },
      rolled4: {
        type: Sequelize.INTEGER
      },
      rolled5: {
        type: Sequelize.INTEGER
      },
      rolled6: {
        type: Sequelize.INTEGER
      },
      scored1: {
        type: Sequelize.INTEGER
      },
      scored2: {
        type: Sequelize.INTEGER
      },
      scored3: {
        type: Sequelize.INTEGER
      },
      scored4: {
        type: Sequelize.INTEGER
      },
      scored5: {
        type: Sequelize.INTEGER
      },
      scored6: {
        type: Sequelize.INTEGER
      },
      totalUpper1: {
        type: Sequelize.INTEGER
      },
      bonusUpper: {
        type: Sequelize.INTEGER
      },
      upperTotal: {
        type: Sequelize.INTEGER
      },
      kind3: {
        type: Sequelize.INTEGER
      },
      kind4: {
        type: Sequelize.INTEGER
      },
      fullhouse: {
        type: Sequelize.INTEGER
      },
      smStraight: {
        type: Sequelize.INTEGER
      },
      lgStraiht: {
        type: Sequelize.INTEGER
      },
      yahtzee: {
        type: Sequelize.INTEGER
      },
      chance: {
        type: Sequelize.INTEGER
      },
      totalLower: {
        type: Sequelize.INTEGER
      },
      grandtotal: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Gamedata');
  }
};