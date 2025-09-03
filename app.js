import express from "express"
import dotenv from 'dotenv';
import butterfliesRouter from "./routes/ButterfliesRoutes.js"
import db_connection from "./database/db_connection.js"
import ButterfliesModel from "./models/ButterfliesModel.js"

//Cargar Variables de entorno
dotenv.config();

export const app = express()

app.get ("/", (req, res)=> {
    res.send("🦋 American Butterflies API - v1.0.0")
})

app.use(express.json())
app.use("/butterflies", butterfliesRouter)

try {
    await db_connection.authenticate()
    console.log('conected to database🐱🚀')
    await ButterfliesModel.sync({})
    console.log('models syncronised✔')
} catch (error) {
    console.log(`error: ${error}`)
}

// Usamos la variable de entorno para el puerto
const PORT = process.env.PORT || 8000; // Si no hay .env, usa 8000 como fallback

export const server = app.listen(PORT, () => {
    console.log(`🚀 Server up in http://localhost:${PORT}/`);
});
