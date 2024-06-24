const Sequelize = require("sequelize");
const sequelize = require("../Config/dbConfig");
const quizanswer = sequelize.define("quizAnswers", {
  id: {
    primaryKey: true,
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  answer: Sequelize.DataTypes.STRING,
  quizId: Sequelize.DataTypes.INTEGER,

  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
});
module.exports = quizanswer;
