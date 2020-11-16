'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Leaderboard extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Leaderboard.belongsTo(models.User, {foreignKey: "userId"})
    }
  };
  Leaderboard.init({
    userId: DataTypes.INTEGER,
    username: DataTypes.STRING,
    score: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Leaderboard',
  });
  return Leaderboard;
};