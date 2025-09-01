
import { Sequelize } from "sequelize";

const db_connection = new Sequelize('american_butterflies','root','1201',{
        host: 'localhost',
        dialect: 'mysql',
        define: {
            timestamps: false //esta parte es un añadido por lo de createAT y updateAt
        }
}) 

export default db_connection;