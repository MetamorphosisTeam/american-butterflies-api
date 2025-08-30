import { check, param } from "express-validator";

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
        .isLength({ min: 5, max: 100 })
        .withMessage('El nombre debe tener entre 5 y 100 caracteres.')
        .bail()
        // Regex mejorado para coincidir con el del frontend
        .matches(/^[A-Za-zÁÉÍÓÚáéíóúüÜñÑ\s\(\)\.,-]+$/)
        .withMessage('El nombre solo puede contener letras, espacios, guiones, comas, paréntesis y puntos.')
        .bail()
        .custom((value) => {
            const wordCount = value.trim().split(/\s+/).length;
            if (wordCount < 2 || wordCount > 5) {
                throw new Error('El nombre debe contener entre 2 y 5 palabras.');
            }
            return true;
        })
        .trim(),

    // 2. Validación para 'order': opcional, ya que es de solo lectura en el form.
    check('order', 'El orden debe ser texto.')
        .optional({ checkFalsy: true })
        .isString()
        .trim(),

    // 3. Validación para 'family': campo obligatorio (viene de un <select>).
    check('family')
        .exists({ checkFalsy: true }) // No debe ser un string vacío ""
        .withMessage('La familia es obligatoria.')
        .bail()
        .isString()
        .withMessage('La familia debe ser texto.')
        .trim(),

    // 4. Validación para 'img': opcional, pero si existe debe ser una URL de imagen válida.
    check('img')
        .optional({ checkFalsy: true })
        .isURL()
        .withMessage('La URL de la imagen no es válida.')
        .bail()
        .matches(/\.(jpg|jpeg|png|webp|gif)$/i)
        .withMessage('La URL debe terminar en .jpg, .jpeg, .png, .webp o .gif'),

    // 5. Validación genérica para los campos de texto opcionales (textareas).
    ...['origin', 'location', 'color', 'size', 'fenology', 'cycle', 'habitat', 'plants'].map(field =>
        check(field)
            .optional({ checkFalsy: true })
            .isString()
            .trim()
            .isLength({ min: 4, max: 500 })
            .withMessage(`El campo '${field}' debe tener entre 4 y 500 caracteres.`)
    ),
];
