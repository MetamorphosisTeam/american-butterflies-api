import { check, param } from "express-validator";

/**
 * Define las reglas de validación y sanitización para los datos de una mariposa.
 * Estas reglas están sincronizadas con la lógica del frontend (ValidateButterfly.js)
 * para asegurar consistencia entre cliente y servidor.
 */
export const validatorButterfly = [
    // 1. Validación para 'name': campo obligatorio con reglas específicas.
    check('name', 'El nombre es obligatorio, debe tener entre 2 y 5 palabras y de 5 a 100 caracteres.')
        .exists({ checkFalsy: true }) // No debe ser un string vacío ""
        .notEmpty({ ignore_whitespace: true })
        .isString()
        .trim()
        .isLength({ min: 5, max: 100 })
        .custom((value) => {
            const wordCount = value.trim().split(/\s+/).length;
            if (wordCount < 2 || wordCount > 5) {
                throw new Error('El nombre debe contener entre 2 y 5 palabras.');
            }
            return true;
        }),

    // 2. Validación para 'order': opcional, ya que es de solo lectura en el form.
    check('order', 'El orden debe ser texto.')
        .optional({ checkFalsy: true })
        .isString()
        .trim(),

    // 3. Validación para 'family': campo obligatorio.
    check('family', 'Debes seleccionar una familia de la lista.')
        .exists({ checkFalsy: true })
        .notEmpty({ ignore_whitespace: true })
        .isString()
        .trim(),

    // 4. Validación para 'img': opcional, pero si existe debe ser una URL de imagen válida.
    check('img', 'La URL de la imagen debe ser un formato válido (jpg, jpeg, png, webp, gif).')
        .optional({ checkFalsy: true })
        .isURL()
        .matches(/\.(jpg|jpeg|png|webp|gif)$/i)
        .withMessage('La URL debe terminar en .jpg, .jpeg, .png, .webp o .gif'),

    // 5. Validación genérica para los campos de texto opcionales (textareas).
    ...['origin', 'location', 'color', 'size', 'fenology', 'cycle', 'habitat', 'plants'].map(field =>
        check(field, `El campo '${field}' debe tener entre 4 y 500 caracteres.`)
            .optional({ checkFalsy: true })
            .isString()
            .trim()
            .isLength({ min: 4, max: 500 })
    ),
];

/**
 * Valida que el ID proporcionado en la URL (parámetro) sea un ID de MongoDB válido.
 * Este es el _id que MongoDB genera automáticamente para las rutas GET, PUT, DELETE.
 */
export const validatorId = [
    param('id', 'El ID de la mariposa en la URL no es válido.')
        .isMongoId()
];
