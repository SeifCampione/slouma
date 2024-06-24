const Sequelize = require("sequelize");
const sequelize = require("../Config/dbConfig");
const userCourse = sequelize.define("userCourse", {
  id: {
    primaryKey: true,
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  courseId: Sequelize.DataTypes.INTEGER,
  userId: Sequelize.DataTypes.STRING,
  score: Sequelize.DataTypes.STRING,

  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
});
module.exports = userCourse;
