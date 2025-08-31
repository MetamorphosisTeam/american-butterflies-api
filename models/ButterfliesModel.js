"use strict";
const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Butterfly extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index.js` file will call this method automatically.
     */
    static associate(models) {
      // En el futuro, aquí puedes definir relaciones, por ejemplo:
      // this.hasMany(models.OtherModel);
    }
  }
  Butterfly.init(
    {
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
    },
    {
      sequelize,
      modelName: "Butterfly",
      tableName: "butterflies",
      timestamps: true,
      underscored: true,
    }
  );
  return Butterfly;
};
