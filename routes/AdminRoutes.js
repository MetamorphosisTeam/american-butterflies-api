import express from "express";
import { getAllButterfliesForAdmin } from '../controllers/ButterfliesController.js';

const adminRouter = express.Router();

// Define la ruta para obtener todos los registros, incluyendo los borrados (soft deletes).
// La URL final será /admin/butterflies/all porque en app.js ya le pusimos "/admin".
adminRouter.get("/butterflies/all", getAllButterfliesForAdmin);

export default adminRouter;
