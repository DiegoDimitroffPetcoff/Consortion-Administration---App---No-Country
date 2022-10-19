const AdminSchema = require('../Models/AdminSchema.js');
const AppError = require('../utils/appError.js');
const CatchAsync = require('../utils/catchAsync.js');
const { validatorPassword, comparePass, hash} = require('../utils/compare.js');
const env = require('../config.js/env-vars.js') 

const jwt = require('jsonwebtoken');



const signToken = (id, rol) => {
    return jwt.sign({id, rol }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    });
};

const createSendToken = (admin, statusCode, res) => {
    const token = signToken(admin._id);

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
    const admin = await AdminSchema.findOne({ email: email });
    console.log("CONTRASEÑA GUARDADA", admin.password)
    console.log("CONTRASEÑA RECIBIDA", password)

    const correct = await validatorPassword(password, admin.password);
    console.log("user ENCONTRADO: ", admin)
    console.log("correct pass ENCONTRADO: ", correct)


    if(!admin || !correct){
        return next (new AppError ('Email o contraseña incorrecta', 401));
    }
    createSendToken(admin, 200, res);
});

  const signUp = CatchAsync(async (req, res, next) => {
    const { nombre, apellidos, email, password, confirmarPassword } = req.body;
    const admin = await AdminSchema.findOne({ email: email });
    console.log("ENTREEEEEEE A SINGUP: ", admin)
    if (admin) {
      console.log("CONDICION 1")
      return next(new AppError('El usario ya existe ', 400));
  }
    if (!comparePass(password, confirmarPassword)) {
      return next(new AppError('Las contraseñas no coinciden', 400));
    }

    const hashPassword =  await hash(password)
    
    const newAdmin = await AdminSchema.create({
      nombre,
      apellidos,
      email,
      password: hashPassword,
      confirmarPassword: hashPassword,
    });

    res.json("PROBANDOOOO")
    return createSendToken(newAdmin, 201, res);
  });

  //---------------------------------------


  const getLogout = CatchAsync((req, res) => {
    res.cookie('token', '', { maxAge: 1 });
    res.redirect('/');
  });

  module.exports = {login, signUp, getLogout}