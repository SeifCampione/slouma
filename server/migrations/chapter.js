"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.createTable("chapter", {
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
  },

  async down(queryInterface, Sequelize) {
    queryInterface.dropTable("chapter");
  },
};
