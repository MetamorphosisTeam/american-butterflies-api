import Butterfly from "../models/ButterfliesModel.js";

// Obtener todas las mariposas
export const getAllButterflies = async (req, res) => {
  try {
    const butterflies = await Butterfly.findAll();
    res.json(butterflies);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener mariposas" });
  }
};

// Obtener mariposa por ID
export const getById = async (req, res) => {
  try {
    const butterfly = await Butterfly.findByPk(req.params.id);
    
    if (!butterfly) {
      return res.status(404).json({ error: "No encontrada" });
    }

    res.json(butterfly);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener mariposa" });
  }
};
