import  express  from "express";
import { ButterflyValidator } from "../validators/butteflyValidators";
import { validateFields } from "../middlewares/validateFields";
import { getAllButterflies, getOneButterfly, createButterfly, updateButterfly, deleteButterfly } from '../controllers/ButterfliesController.js'

const ButterflyRouter = express.Router();

//getAllButerflies 
ButterflyRouter.get("/", getAllButterflies)

//getOneButterfly
ButterflyRouter.get("/:id", getOneButterfly)

//createButterfly
ButterflyRouter.post("/", createButterfly, ButterflyValidator, validateFields)

//updateButterfly
ButterflyRouter.put("/:id", updateButterfly)

//deleteButterfly
ButterflyRouter.delete("/:id", deleteButterfly)

export default ButterflyRouter;
