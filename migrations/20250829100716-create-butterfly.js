"use strict";

import { DataTypes } from "sequelize";

/** @type {import('sequelize-cli').Migration} */
export default {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("butterflies", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      order_name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        defaultValue: "Lepidoptera",
      },
      family: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      color: {
        type: DataTypes.STRING(150),
        allowNull: false,
      },
      size: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      origin: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      location: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      habitat: {
        type: DataTypes.TEXT,
      },
      plants: {
        type: DataTypes.TEXT,
      },
      cycle: {
        type: DataTypes.TEXT,
      },
      img: {
        type: DataTypes.STRING(500),
      },
      fenology: {
        type: DataTypes.TEXT,
      },
      created_at: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updated_at: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("butterflies");
  },
};
