const AdminSchema = require('../Models/AdminSchema.js')
const AppError = require('../utils/appError.js');
const CatchAsync = require('../utils/catchAsync.js');


const getAdmin = CatchAsync(async (req, res, next) => {
    const { id } = req.params;
    const admin = await AdminSchema.findByPk(id);
    if (!id || !admin) {
      return next(new AppError('No se ha especificado el id o Administrador no encontrado', 400));
    }
    res.status(200).json(admin);
  });
  
  const getAllAdmin = CatchAsync(async (req, res, next) => {
    const admins = await AdminSchema.findAll();
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
    const { id } = req.params;
    const admin = await AdminSchema.findByPk(id);
    if (!admin || !id) {
      return next(new AppError('No se ha especificado el id o Administrador no encontrado', 400));
    }
    await admin.destroy();
    res.status(204).json({ message: 'Administrador eliminado correctamente' });
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

  module.exports = getAdmin, getAllAdmin, deleteAdmin, updateAdmin
  
