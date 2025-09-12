import { check } from "express-validator";

/**
 * Define las reglas de validación y sanitización para los datos de una mariposa.
 * Estas reglas están sincronizadas con la lógica del frontend (ValidateButterfly.js)
 * para asegurar consistencia entre cliente y servidor.
 */
export const ButterflyValidator = [
    // 1. Validación para 'name': campo obligatorio con reglas específicas.
    check('name')
        .exists({ checkFalsy: true }) // No debe ser un string vacío ""
        .withMessage('El nombre de la mariposa es obligatorio.')
        .bail()
        // Regex mejorado para coincidir con el del frontend
        .matches(/^[A-Za-zÁÉÍÓÚáéíóúüÜñÑ\s().-]+$/)
        .withMessage('El nombre solo puede contener letras, espacios, paréntesis, guiones y puntos.')
        .bail()
        .trim(),

    // 2. Validación para 'order': opcional, ya que es de solo lectura en el form.
    check('order', 'El orden debe ser texto.')
        .optional({ checkFalsy: true })
        .customSanitizer(value => value === "" ? null : value) // convierte "" en null
        .isIn(["Lepidoptera"])
        .withMessage('El orden debe ser "Lepidoptera".')
        .trim(),

    // 3. Validación para 'family': campo obligatorio (viene de un <select>).
    check('family')
        .exists({ checkFalsy: true }) // No debe ser un string vacío ""
        .withMessage('La familia es obligatoria.')
        .bail()
        .isIn(["Nymphalidae", "Papilionidae", "Pieridae", "Lycaenidae", "Hesperiidae", "Riodinidae"])
        .withMessage('La familia seleccionada no es valida.')
        .trim(),

    // 4. Validación para 'img': opcional, pero si existe debe ser una URL de imagen válida.
    check('img')
        .optional({ checkFalsy: true })
        .customSanitizer(value => value === "" ? null : value) // convierte "" en null
        .custom((value) => {
            if (value && !/^https?:\/\/.*\.(jpg|jpeg|png|webp|gif)$/i.test(value)) {
                throw new Error('Debe ser una URL válida y terminar en .jpg, .jpeg, .png, .webp o .gif');
            }
            return true;
        })//protegido para coincidir con el formulario(agregado por bug en post con el front)
        .trim(),

    // 5. Validación genérica para los campos de texto opcionales (textareas).
    ...['origin', 'location', 'color', 'size', 'fenology', 'cycle', 'habitat', 'plants'].map(field =>
        check(field)
            .optional({ checkFalsy: true })
            .customSanitizer(value => value === "" ? null : value) // convierte "" en null
            .isString()
            .isLength({ min: 4, max: 500 })
            .withMessage(`El campo '${field}' debe tener entre 4 y 500 caracteres.`)
            .trim()
    ),
];
