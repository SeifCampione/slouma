"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.createTable("quizAnswers", {
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
  },

  async down(queryInterface, Sequelize) {
    queryInterface.dropTable("quizAnswers");
  },
};
