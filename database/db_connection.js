import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config(); // Cargar variables de .env

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
  }
);

export default sequelize;



//codigo anterior al cambio por el archivo .env

// import { Sequelize } from "sequelize";

// // Configura la conexión a tu base de datos
// const sequelize = new Sequelize('american_butterflies', 'root', 'Pajaritos123', {
//   host: 'localhost',
//   dialect: 'mysql'
// });

// export default sequelize;