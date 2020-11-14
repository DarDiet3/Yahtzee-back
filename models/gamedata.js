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
    rolled1: DataTypes.INTEGER,
    rolled2: DataTypes.INTEGER,
    rolled3: DataTypes.INTEGER,
    rolled4: DataTypes.INTEGER,
    rolled5: DataTypes.INTEGER,
    rolled6: DataTypes.INTEGER,
    scored1: DataTypes.INTEGER,
    scored2: DataTypes.INTEGER,
    scored3: DataTypes.INTEGER,
    scored4: DataTypes.INTEGER,
    scored5: DataTypes.INTEGER,
    scored6: DataTypes.INTEGER,
    totalUpper1: DataTypes.INTEGER,
    bonusUpper: DataTypes.INTEGER,
    upperTotal: DataTypes.INTEGER,
    kind3: DataTypes.INTEGER,
    kind4: DataTypes.INTEGER,
    fullhouse: DataTypes.INTEGER,
    smStraight: DataTypes.INTEGER,
    lgStraiht: DataTypes.INTEGER,
    yahtzee: DataTypes.INTEGER,
    chance: DataTypes.INTEGER,
    totalLower: DataTypes.INTEGER,
    grandtotal: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Gamedata',
  });
  return Gamedata;
};