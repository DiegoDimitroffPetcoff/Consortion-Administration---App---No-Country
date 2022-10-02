// --------------------------EXPRESS JS-----------------------//
const express = require('express')
const app = express()

// ---------------------CONFIG GLOBALES-----------------------//
const configs = require("./src/config.js/globals");

// --------------------------FACTORY--------------------------//
const Factory = require('./src/Factory.js/factory');

// --------------------------PUERTO--------------------------//
const DBSelected = process.argv[2] || "mongo"
console.log(DBSelected);
const DBS = Factory.getInstance(DBSelected);
DBS.connection(DBSelected);

// --------------------------RUTAS----------------------------//
const routes = require('./src/Routes/routes.js')
const Routes = new routes()
app.use(Routes.start())

import adminRoutes from './src/Routes/adminRoutes'
app.use('/api/v1/admin', adminRoutes);

// --------------------------PUERTO--------------------------//
const PORT = configs.PORT
app.listen(PORT, () => {
  console.log(`Server working on port ${PORT}`)
})
// --------------------------ERROR--------------------------//
import AppError from './src/utils/appError.js'

app.all('*', (req, res, next) => {
  next(
    new AppError(`La ruta ${req.originalUrl} no existe en este servidor`, 404)
  );
});
