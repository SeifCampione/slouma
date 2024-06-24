const Sequelize = require("sequelize");
const sequelize = require("../Config/dbConfig");
const chapter = sequelize.define("chapter", {
  id: {
    primaryKey: true,
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  courseId: Sequelize.DataTypes.INTEGER,
  title: Sequelize.DataTypes.STRING,
  description: Sequelize.DataTypes.STRING,
  videoUrl: Sequelize.DataTypes.STRING,
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
});
module.exports = chapter;
