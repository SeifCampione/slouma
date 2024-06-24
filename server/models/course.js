const Sequelize = require("sequelize");
const sequelize = require("../Config/dbConfig");
const course = sequelize.define("course", {
  id: {
    primaryKey: true,
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  image: Sequelize.DataTypes.STRING,
  title: Sequelize.DataTypes.STRING,

  description: Sequelize.DataTypes.STRING,
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
});
module.exports = course;
