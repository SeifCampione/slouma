"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.createTable("quiz", {
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
  },

  async down(queryInterface, Sequelize) {
    queryInterface.dropTable("quiz");
  },
};
