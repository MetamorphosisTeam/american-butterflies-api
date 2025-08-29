import express from "express";
import cors from "cors";
import db from "./database/db_connection.js";
import butterfliesRoutes from "./routes/ButterfliesRoutes.js";


const app = express();

app.use(cors());
app.use(express.json());

// Rutas
app.use("/api/butterflies", butterfliesRoutes);

// Conexión a BD (base de datos)
try {
  await db.authenticate();
  console.log("Conexión a la base de datos exitosa");
} catch (error) {
  console.error("Error de conexión a la base de datos:", error);
}

// Iniciar servidor
const PORT = 4000;
app.listen(4000, () => {
  console.log("Servidor corriendo en http://localhost:4000");
});
