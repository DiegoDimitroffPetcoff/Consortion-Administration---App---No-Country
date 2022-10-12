//const adminSchema = require('../models/administrador');

import jwt from 'jsonwebtoken';
import { validatorPassword, comparePass } from '../utils/compare.js';
import CatchAsync from '../utils/catchAsync.js';
import AppError from '../utils/appError.js';
import * as env from '../config/env.vars.js'
import adminSchema from '../models/administrador.js';

const signToken = (id, rol) => {
    return jwt.sign({id, rol }, env.JWT_SECRET, {
        expiresIn: env.JWT_EXPIRES_IN
    });
};

const createSendToken = (admin, statusCode, res) => {
    const token = signToken(admin.id, user.rol);

    res.status(statusCode).json({
        status: 'success',
        token,
        data: {
            admin,
        },
    });
};

export const login = CatchAsync(async(req, res, next) => {
    const { email, password} = req.body;
    const admin = await adminSchema.findOne({where: { email }});

    const correct = await validatorPassword(password, admin.password);

    if(!user || !correct){
        return next (new AppError ('Email o contraseña incorrecta', 401));
    }
    createSendToken(admin, 200, res);
});

export const signUp = CatchAsync(async (req, res, next) => {
    const { nombre, apellidos, email, password, confirmarPassword } = req.body;
    const admin = await adminSchema.findOne({ where: { email } });
    if (admin) {
      return next(new AppError('El usario ya existe', 400));
    } else if (!comparePass(password, confirmarPassword)) {
      return next(new AppError('Las contraseñas no coinciden', 400));
    }
  
    const newAdmin = await adminSchema.create({
      nombre,
      apellidos,
      email,
      password,
      confirmarPassword
      
    });
  
    return createSendToken(newAdmin, 201, res);
  
  });
  
  export const getLogout = CatchAsync((req, res) => {
    res.cookie('token', '', { maxAge: 1 });
    res.redirect('/');
  });