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
        res.status(500).json({ message: error.message });
    }
}

export const updateButterfly = async (req, res) => {
    
}

export const deleteButterfly = async (req, res) => {

}

