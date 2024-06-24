"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.createTable("course", {
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
  },

  async down(queryInterface, Sequelize) {
    queryInterface.dropTable("course");
  },
};
