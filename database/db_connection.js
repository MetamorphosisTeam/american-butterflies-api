
import { Sequelize } from "sequelize";
import dotenv from 'dotenv';


dotenv.config();

const db_connection = new Sequelize(
    process.env.DB_DATABASE,
    process.env.DB_USERNAME, 
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: process.env.DB_DIALECT,
        define: {
            timestamps: true, 
            underscored: true 
        }
    }
);

export default db_connection;