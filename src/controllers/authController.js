const AdminSchema = require('../Models/AdminSchema.js');
const AppError = require('../utils/appError.js');
const CatchAsync = require('../utils/catchAsync.js');
const { validatorPassword, comparePass } = require('../utils/compare.js');
const env = require('../config/env-vars.js') 

const jwt = require('jsonwebtoken');



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

const login = CatchAsync(async(req, res, next) => {
    const { email, password} = req.body;
    const admin = await AdminSchema.findOne({where: { email }});

    const correct = await validatorPassword(password, admin.password);

    if(!user || !correct){
        return next (new AppError ('Email o contraseña incorrecta', 401));
    }
    createSendToken(admin, 200, res);
});

  const signUp = CatchAsync(async (req, res, next) => {
    const { nombre, apellidos, email, password, confirmarPassword } = req.body;
    const admin = await AdminSchema.findOne({ where: { email } });
    if (admin) {
      return next(new AppError('El usario ya existe', 400));
    } else if (!comparePass(password, confirmarPassword)) {
      return next(new AppError('Las contraseñas no coinciden', 400));
    }
  
    const newAdmin = await AdminSchema.create({
      nombre,
      apellidos,
      email,
      password,
      confirmarPassword
      
    });
  
    return createSendToken(newAdmin, 201, res);
  
  });
  
  const getLogout = CatchAsync((req, res) => {
    res.cookie('token', '', { maxAge: 1 });
    res.redirect('/');
  });

  module.exports = {login, signUp, getLogout}