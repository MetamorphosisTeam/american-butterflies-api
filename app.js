import express from "express"
import butterfliesRouter from "./routes/ButterfliesRoutes.js"
import db_connection from "./database/db_connection.js"
import ButterfliesModel from "./models/ButterfliesModel.js"

export const app = express()

app.get ("/", (req, res)=> {
    res.send("Hola API")
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

export const server = app.listen(8000, () => {
    console.log('🚀server up in http://localhost:8000/')
})
