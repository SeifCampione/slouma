const Sequelize = require("sequelize");
const sequelize = require("../Config/dbConfig");
const user = sequelize.define("user", {
  id: {
    primaryKey: true,
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  userName: Sequelize.DataTypes.STRING,
  userPassword: Sequelize.DataTypes.STRING,
  userMail: Sequelize.DataTypes.STRING,
  userRole: Sequelize.DataTypes.ENUM("admin", "student"),
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
});
module.exports = user;
