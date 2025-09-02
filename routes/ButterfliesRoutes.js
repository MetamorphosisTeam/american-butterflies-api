import  express  from "express";
import { ButterflyValidator } from "../validators/butterflyValidators.js";
import { validateFields } from "../middlewares/validateFields.js";
import { getAllButterflies, getById, createButterfly, updateButterfly, deleteButterfly } from '../controllers/ButterfliesController.js'


//Get
butterfliesRouter.get("/", getAllButterflies);
butterfliesRouter.get("/:id", getById);

//createButterfly
butterfliesRouter.post("/", createButterfly, ButterflyValidator, validateFields)

//updateButterfly
butterfliesRouter.put("/:id", updateButterfly)

//deleteButterfly
butterfliesRouter.delete("/:id", deleteButterfly)


export default butterfliesRouter;
