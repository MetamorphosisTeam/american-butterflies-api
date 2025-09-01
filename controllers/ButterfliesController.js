import ButterfliesModel from "../models/ButterfliesModel.js";

// Traer los mariposas prueba
export const getAllButterflies = async (req, res) => {
  try {
    const butterflies = await ButterfliesModel.findAll();
    res.status(200).json(butterflies);
  } catch (error) {
    res.json({ message: error.message });
  }
};
