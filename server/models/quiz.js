const Sequelize = require("sequelize");
const sequelize = require("../Config/dbConfig");
const quiz = sequelize.define("quiz", {
  id: {
    primaryKey: true,
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  courseId: Sequelize.DataTypes.INTEGER,
  question: Sequelize.DataTypes.STRING,
  answerId: Sequelize.DataTypes.INTEGER,
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
});
module.exports = quiz;
