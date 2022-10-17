const { check } = require('express-validator');
const { validateResult } = require('../utils/handleValidator')

const validatorRegisterAdmin = [
  check('nombre').notEmpty().isString().isLength({ min: 3 }),
  check('apellidos').notEmpty().isString(),
  check('password').notEmpty().isLength({ min: 6 }),
  check('confirmarPassword').notEmpty(),
  check('email').exists().notEmpty().isEmail(),
  (req, res, next) => {
    return validateResult(req, res, next);
  },
];

const validateUpdateAdmin = [
  check('nombre').isString().isLength({ min: 3 }),
  check('apellidos').isString(),
  check('password').isLength({ min: 6 }),
  check('confirmarPassword'),
  check('email').exists().isEmail(),
  (req, res, next) => {
    return validateResult(req, res, next);
  },
];

const validatorLoginAdmin = [
  check('password').exists().notEmpty().isLength({ min: 6 }),
  check('email').exists().notEmpty().isEmail(),
  (req, res, next) => {
    return validateResult(req, res, next);
  },
];

module.exports = {validateUpdateAdmin, validatorRegisterAdmin, validatorLoginAdmin}