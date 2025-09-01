import  express  from "express";
import { ButterflyValidator } from "../validators/butterflyValidators.js";
import { validateFields } from "../middlewares/validateFields.js";
import { getAllButterflies, getOneButterfly, createButterfly, updateButterfly, deleteButterfly } from '../controllers/ButterfliesController.js'

const butterfliesRouter = express.Router();

//getAllButerflies 
butterfliesRouter.get("/", getAllButterflies)

//getOneButterfly
butterfliesRouter.get("/:id", getOneButterfly)

//createButterfly
butterfliesRouter.post("/", createButterfly, ButterflyValidator, validateFields)

//updateButterfly
butterfliesRouter.put("/:id", updateButterfly)

//deleteButterfly
butterfliesRouter.delete("/:id", deleteButterfly)


export default butterfliesRouter;
