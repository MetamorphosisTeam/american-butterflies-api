import ButterfliesModel from "../models/ButterfliesModel.js"

export const getAllButterflies = async (req, res) => {
    try {
        const butterflies = await ButterfliesModel.findAll();
        res.status(200).json(butterflies);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const getOneButterfly = async (req, res) => {

}

export const createButterfly = async (req, res) => {
    try {
        const newButterfly = await ButterfliesModel.create(req.body);
        res.status(201).json({
            ok: true,
            msg: "Mariposa creada correctamente",
            data: newButterfly
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const updateButterfly = async (req, res) => {
  try {
    const { id } = req.params;
    const butterfly = await ButterfliesModel.findByPk(id);

    if (!butterfly) {
      return res.status(404).json({ ok: false, msg: "Mariposa no encontrada" });
    }

    await butterfly.update(req.body);

    res.status(200).json({
      ok: true,
      msg: "Mariposa actualizada correctamente",
      data: butterfly
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteButterfly = async (req, res) => {
  try {
    const { id } = req.params;
    const butterfly = await ButterfliesModel.findByPk(id);

    if (!butterfly) {
      return res.status(404).json({ ok: false, msg: "Mariposa no encontrada" });
    }

    await butterfly.destroy();

    res.status(200).json({
      ok: true,
      msg: "Mariposa eliminada correctamente"
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

