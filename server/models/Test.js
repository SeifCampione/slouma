const Sequelize = require("sequelize");
const sequelize = require("../Config/dbConfig");
const test = sequelize.define("test", {
  id: {
    primaryKey: true,
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  test: Sequelize.DataTypes.STRING,
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
});
module.exports = test;
