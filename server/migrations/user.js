"use strict";

const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Create the table
    await queryInterface.createTable("user", {
      id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
      },
      userName: Sequelize.DataTypes.STRING,
      userPassword: Sequelize.DataTypes.STRING,
      userMail: Sequelize.DataTypes.STRING,
      userRole: Sequelize.DataTypes.ENUM("admin", "student"),
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });

    // Hash the admin password
    const hashedPassword = await bcrypt.hashSync("Admin@123!", salt);

    // Insert the admin user
    await queryInterface.bulkInsert("user", [
      {
        userName: "admin",
        userPassword: hashedPassword,
        userMail: "admin@example.com",
        userRole: "admin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    // Drop the table
    await queryInterface.dropTable("user");
  },
};
