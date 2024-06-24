"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.createTable("userCourse", {
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
  },

  async down(queryInterface, Sequelize) {
    queryInterface.dropTable("userCourse");
  },
};
