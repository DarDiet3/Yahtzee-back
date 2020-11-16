'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Gamedata extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Gamedata.belongsTo(models.User, { foreignKey: "userId"});
    }
  };
  Gamedata.init({
    userId: DataTypes.INTEGER,
    victorypoints: DataTypes.INTEGER,
    rock: DataTypes.INTEGER,
    wheat: DataTypes.INTEGER,
    sheep: DataTypes.INTEGER,
    brick: DataTypes.INTEGER,
    wood: DataTypes.INTEGER,
    gold: DataTypes.INTEGER,
    settlements: DataTypes.INTEGER,
    cities: DataTypes.INTEGER,
    roads: DataTypes.INTEGER,
    knights: DataTypes.INTEGER,
    jokers: DataTypes.INTEGER,
    round1: DataTypes.INTEGER,
    round2: DataTypes.INTEGER,
    round3: DataTypes.INTEGER,
    round4: DataTypes.INTEGER,
    round5: DataTypes.INTEGER,
    round6: DataTypes.INTEGER,
    round7: DataTypes.INTEGER,
    round8: DataTypes.INTEGER,
    round9: DataTypes.INTEGER,
    round10: DataTypes.INTEGER,
    round11: DataTypes.INTEGER,
    round12: DataTypes.INTEGER,
    round13: DataTypes.INTEGER,
    round14: DataTypes.INTEGER,
    round15: DataTypes.INTEGER,
    trades: DataTypes.INTEGER,
    tradedrock: DataTypes.INTEGER,
    tradedwheat: DataTypes.INTEGER,
    tradedsheep: DataTypes.INTEGER,
    tradedbrick: DataTypes.INTEGER,
    tradedwood: DataTypes.INTEGER,
    jokerock: DataTypes.INTEGER,
    jokewheat: DataTypes.INTEGER,
    jokesheep: DataTypes.INTEGER,
    jokebrick: DataTypes.INTEGER,
    jokewood: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Gamedata',
  });
  return Gamedata;
};