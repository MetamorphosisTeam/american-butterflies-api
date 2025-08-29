'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('butterflies', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.DataTypes.STRING(100),
        allowNull: false
      },
      order_name: {
        type: Sequelize.DataTypes.STRING(50),
        allowNull: false,
        defaultValue: 'Lepidoptera'
      },
      family: {
        type: Sequelize.DataTypes.STRING(50),
        allowNull: false
      },
      color: {
        type: Sequelize.DataTypes.STRING(150),
        allowNull: false
      },
      size: {
        type: Sequelize.DataTypes.STRING(20),
        allowNull: false
      },
      origin: {
        type: Sequelize.DataTypes.STRING(100),
        allowNull: false
      },
      location: {
        type: Sequelize.DataTypes.STRING(200),
        allowNull: false
      },
      habitat: {
        type: Sequelize.DataTypes.TEXT
      },
      plants: {
        type: Sequelize.DataTypes.TEXT
      },
      cycle: {
        type: Sequelize.DataTypes.TEXT
      },
      img: {
        type: Sequelize.DataTypes.STRING(500)
      },
      fenology: {
        type: Sequelize.DataTypes.TEXT
      }
    }, {
      tableName: 'butterflies',
      timestamps: true,
      underscored: true
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('butterflies');
  }
};