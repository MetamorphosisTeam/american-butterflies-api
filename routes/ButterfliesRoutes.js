import express from "express"
import {getAllButterflies} from "../controllers/ButterfliesController.js"

const butterfliesRouter = express.Router()
    butterfliesRouter.get("/",getAllButterflies) //1er parámetro es la ruta y el 2do el controlador
    /* bookRouter.post("/", createBook),
    bookRouter.delete("/:id", deleteBook),
    bookRouter.update("/:id", updateBook)*/


export default butterfliesRouter