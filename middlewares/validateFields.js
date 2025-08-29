
const { validationResult } = require('express-validator');

//Función Middleware, quien revisa y deja pasar al controlador
const  validateFields = (req, res, next) => { //(req, res, next) parametros estandar del middleware de Express
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) { //Si hay errores devuelve la res error(400)
        return res.status(400).json({
            success: false,
            message: 'Error de validación',
            errors: errors.array().map(error => ({
                field: error.path, //campo que fallo (ej:'nombre de la mariposa')
                value: error.value, //valor que se envió (ej: 'abeja reina')
                message: error.msg, //mensaje de error personalizado
                location: error.location // donde esta el campo del error ('body', 'params', 'query')
            }))
        });
    }
    console.log('Validación exitosa para:', `${req.method} ${req.path}`)
    next();// no encuentra errores avanza al siguiente middleware-> controlador
}
//para sanitizar debo definir las reglas en los validadores

module.exports = { validateFields };
