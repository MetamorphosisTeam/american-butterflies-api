import { Sequelize } from "sequelize";

// Configura la conexión a tu base de datos
const sequelize = new Sequelize('american_butterflies', 'root', 'Pajaritos123', {
  host: 'localhost',
  dialect: 'mysql'
});

export default sequelize;