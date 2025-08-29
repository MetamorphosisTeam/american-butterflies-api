import { DataTypes } from 'sequelize';
import sequelize from '../database/db_connection.js';


const Butterfly = sequelize.define('Butterfly', {
  // Sequelize asume 'id' por defecto, pero lo definimos para claridad
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  order_name: {
    type: DataTypes.STRING(50),
    allowNull: false,
    defaultValue: 'Lepidoptera'
  },
  family: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  color: {
    type: DataTypes.STRING(150),
    allowNull: false
  },
  size: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  origin: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  location: {
    type: DataTypes.STRING(200),
    allowNull: false
  },
  habitat: {
    type: DataTypes.TEXT
  },
  plants: {
    type: DataTypes.TEXT
  },
  cycle: {
    type: DataTypes.TEXT
  },
  img: {
    type: DataTypes.STRING(500)
  },
  fenology: {
    type: DataTypes.TEXT
  }

}, {
  // Opciones adicionales del modelo
  tableName: 'butterflies', // Le decimos a Sequelize que use este nombre exacto para la tabla
  timestamps: true, // Habilita createdAt y updatedAt automáticamente
  underscored: true // Mapea campos como `createdAt` a `created_at` en la BBDD
});

export default Butterfly;