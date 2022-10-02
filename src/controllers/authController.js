import AdministradorSchema from '../models/ADMINISTRADOR.js';
import jwt from 'jsonwebtoken';
import { validatePassword, comparePass } from '../utils/compare.js';
import CatchAsync from '../utils/catchAsync.js';
import AppError from '../utils/appError.js';
import * as env from '../config/env-vars.js';

const signToken = (id) => {
  return jwt.sign({ id }, env.JWT_SECRET, {
    expiresIn: env.JWT_EXPIRES_IN,
  });
};

const createSendToken = (administrator, statusCode, res) => {
  const token = signToken(administratorgit._id);

  res.status(statusCode).json({
    status: 'success',
    token,
    data: {
        administrator,
    },
  });
};

export const login = CatchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  const administrator = await AdministradorSchema.findOne({ where: { email } });

  const correct = await validatePassword(password, administrator.password);

  if (!administrator || !correct) {
    return next(new AppError('Email o contraseña incorrecta', 401));
  }

  createSendToken(administrator, 200, res);
});

export const signUp = CatchAsync(async (req, res, next) => {
  const { nombre, apellidos, email, password, confirmarPassword } = req.body;
  const administrator = await AdministradorSchema.findOne({ where: { email } });
  if (administrator) {
    return next(new AppError('El usario ya existe', 400));
  } else if (!comparePass(password, confirmarPassword)) {
    return next(new AppError('Las contraseñas no coinciden', 400));
  }

  const newAdmin = await AdministradorSchema.create({
    nombre,
    apellidos,
    email,
    password,
    confirmarPassword,
    
  });

  return createSendToken(newAdmin, 201, res);

});

export const getLogout = CatchAsync((req, res) => {
  res.cookie('token', '', { maxAge: 1 });
  res.redirect('/');
});
