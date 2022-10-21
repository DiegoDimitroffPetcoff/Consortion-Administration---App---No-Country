const AdminSchema = require('../Models/AdminSchema.js')
const AppError = require('../utils/appError.js');
const CatchAsync = require('../utils/catchAsync.js');


const getAdmin = CatchAsync(async (req, res, next) => {
    const { email } = req.body;
    const admin = await AdminSchema.findOne({email: email});

    console.log("LO ENCUENTROO: ", admin)
    if (!email) {
      return next(new AppError('Ingrese el email del admin!', 400));
    }
    if(!admin){
      return next(new AppError('No se ha encontrado el usuario!', 400));
    }
    res.status(200).json(admin);
  });
  
  const getAllAdmin = CatchAsync(async (req, res, next) => {
    const admins = await AdminSchema.find();
    if (!admins) {
      return next(new AppError('No se ha encontrado ningun Administrador', 400));
    }
    res.status(200).json({
      status: 'success',
      results: admins.length,
      data: {
        admins,
      },
    });
  });
  
  const deleteAdmin = CatchAsync(async (req, res, next) => {
    const { email } = req.body;
    if (!email) {
      return next(new AppError('No se ha especificado el email!', 400));
    }
    const admin = await AdminSchema.findOne({email: email});
    if(!admin){
      return next(new AppError('No se ha encontrado al usuario!', 400));
    }
    console.log("ADMINNN: ", admin)
    await AdminSchema.deleteOne({admin}).then(res.status(200).send('Administrador eliminado correctamente' ))
    //return res.status(204).json('Administrador eliminado correctamente' );
  });
  
  const updateAdmin = CatchAsync(async (req, res, next) => {
    const { id } = req.params;
    const { nombre, apellidos, email } = req.body;
  
    let admin = await AdminSchema.findByPk(id);
    if (!admin.id || !admin) {
      return next(new AppError('No se ha especificado el id o Administrador no encontrado', 400));
    } else {
        admin = await admin.update({
        nombre,
        apellidos,
        email        
      });
      res.status(200).json({
        message: 'Administrador actualizado correctamente',
        admin,
      });
    }
  });

  module.exports = {getAdmin, getAllAdmin, deleteAdmin, updateAdmin}
  
