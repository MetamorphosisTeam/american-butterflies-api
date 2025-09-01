// config/db.js
const { Sequelize } = require('sequelize');

// Configura la conexión a tu base de datos
const sequelize = new Sequelize('american_butterflies', 'root', '123456789', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;