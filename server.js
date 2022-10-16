// --------------------------EXPRESS JS-----------------------//
const express = require('express')
const app = express()
const dotenv = require('dotenv').config();
// ---------------------CONFIG GLOBALES cambios-----------------------//
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
const adminRoutes = require('./src/Routes/adminRoutes')
const Routes = new routes()
app.use(Routes.start())

// --------------------------PUERTO--------------------------//
const PORT = configs.PORT
app.listen(PORT, () => {
  console.log(`Server working on port ${PORT}`)
})

//Middlaware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('docs'));
app.use('/api', adminRoutes)

//ROUTES

app.get('/', (req,res) => {
    res.send('Welcome to my API')
})
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }
  next();
});