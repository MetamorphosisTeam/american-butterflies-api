import express from "express";
import { getAllButterflies, getById } from "../controllers/ButterfliesController.js";

const router = express.Router();

router.get("/", getAllButterflies);
router.get("/:id", getById);

export default router;