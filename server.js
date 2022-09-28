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
const routes = require('./src/Routes/routes')
const Routes = new routes()
app.use(Routes.start())

// --------------------------PUERTO--------------------------//
const PORT = configs.PORT
app.listen(PORT, () => {
  console.log(`Server working on port ${PORT}`)
})