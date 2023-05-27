const {check}= require('express-validator')

const checks = [
    check('nombre')
        .notEmpty().withMessage('el campo nombre es obligatorio')
        .isString().withMessage('el campo nombre debe ser un string'),
    check('ciudad')
        .notEmpty().withMessage('el campo ciudad es obligatorio')
        .isString().withMessage('el campo ciudad debe ser un string'),
    check('cantidadDeTorneosGan')
        .notEmpty().withMessage('el campo cantidadDeTorneosGan es obligatorio')
        .isNumeric().withMessage('el campo cantidadDeTorneosGan debe ser un string'),
    check('alias')
        .notEmpty().withMessage('el campo alias es obligatorio')
        .isString().withMessage('el campo alias debe ser un string'),
    check('categoria')
        .notEmpty().withMessage('el campo categoria es obligatorio')
        .isString().withMessage('el campo categoria debe ser un string')
]

module.exports = checks