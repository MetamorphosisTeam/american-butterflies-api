import ButterfliesModel from "../models/ButterfliesModel.js";

// Obtener todas las mariposas
export const getAllButterflies = async (req, res) => {
  try {
    const butterflies = await ButterfliesModel.findAll();
    res.status(200).json(butterflies);
  } catch (error) {
    console.error("Error Sequelize en getAllButterflies:", error);
    res.status(500).json({ error: "Error al obtener mariposas" });
  }
}

// Obtener mariposa por ID
export const getById = async (req, res) => {
  try {
    const butterfly = await ButterfliesModel.findByPk(req.params.id);

    if (!butterfly) {
      return res.status(404).json({ error: "No encontrada" });
    }

    res.status(200).json(butterfly);
  } catch (error) {
    console.error("Error Sequelize en getById:", error);
    res.status(500).json({ error: "Error al obtener mariposa" });
  }


}

export const createButterfly = async (req, res) => {
  try {
    const newButterfly = await ButterfliesModel.create(req.body);
    console.log("newButterfly creado:", newButterfly);
    res.status(201).json({
      ok: true,
      msg: "Mariposa creada correctamente",
      data: newButterfly
    });
  } catch (error) {
    console.error("Error Sequelize en createButterfly:", error);

    res.status(500).json({ ok: false, message: error.message });
  }
}
export const updateButterfly = async (req, res) => {

}

export const deleteButterfly = async (req, res) => {

}

