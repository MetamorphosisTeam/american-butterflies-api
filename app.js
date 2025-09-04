import express from "express";
import dotenv from 'dotenv';
import cors from "cors";
import helmet from "helmet";

import butterfliesRouter from "./routes/ButterfliesRoutes.js";
import db_connection from "./database/db_connection.js";
import ButterfliesModel from "./models/ButterfliesModel.js";

// Cargar variables de entorno
dotenv.config();

// Inicializar app una sola vez, sin export
const app = express();

//Middlewares de seguridad
app.use(helmet());

//CORS configurado
app.use(cors({
  origin: 'http://localhost:5173', // Supuesto puerto de frontend por usar vite
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Middleware para parsear JSON
app.use(express.json());

// Ruta raíz
app.get("/", (req, res) => {
  res.send("🦋 American Butterflies API - v1.0.0");
});

// Rutas de la API
app.use("/butterflies", butterfliesRouter);

// Conexión a la base de datos
try {
  await db_connection.authenticate();
  console.log('✅ Connected to database 🐱🚀');
  await ButterfliesModel.sync({});
  console.log('✅ Models synchronized ✔');
} catch (error) {
  console.error(`❌ Database connection error: ${error}`);
}

// Levantar servidor
const PORT = process.env.PORT || 8000;
export const server = app.listen(PORT, () => {
  console.log(`🚀 Server up at http://localhost:${PORT}/`);
});
