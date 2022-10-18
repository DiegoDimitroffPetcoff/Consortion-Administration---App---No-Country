
/*const express = require("express");
const app = express();
const AdminRoutes = require ('../controllers/adminController.js');
const AuthRoute = require('../controllers/authController.js');
const AdminValidator = require('../validator/authValidator.js');
const Schema = require("../Models/AMINISTRADOR");


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./public"));
class Routes {
  constructor() {
  this.AdminValidatorr = AdminValidator
  this.AuthRoutee = AuthRoute
  this.AdminRoutess = AdminRoutes
  }
  start() {
    console.log("validacion: ",this.AdminValidatorr.validatorLoginAdmin)
    app.get("/", async (req, res) => {
      try {
        let objetoEJEMPLO = await Schema.find({});
        console.log("objeto: ",objetoEJEMPLO);
        res.send(objetoEJEMPLO);
      } catch (err) {
        console.log("ERROR");
        console.log(err);
      }
    });
    app.post('/login', this.AdminValidatorr.validatorLoginAdmin, this.AuthRoutee.login);
    app.post('/signup', AuthRoutee.signUp);
    app.get('/logout', this.AuthRoutee.getLogout);
    app.get('/:id', this.AdminRoutess.getAdmin);
    app.get('/', this.AdminRoutess.getAllAdmin);
    app.delete('/:id', this.AdminRoutess.deleteAdmin);
    app.patch('/:id', this.AdminRoutess.updateAdmin);
    return app;
  }
}

module.exports = Routes;
*/


const express = require('express');

const AdminRoutes = require ('../controllers/adminController.js');
const AuthRoute = require('../controllers/authController.js');
const AdminValidator = require('../validator/authValidator.js');

const router = express.Router();


router.post('/login', AdminValidator.validatorLoginAdmin, AuthRoute.login);
router.post('/signup', AuthRoute.signUp);
router.get('/logout', AuthRoute.getLogout);
router.get('/:id', AdminRoutes.getAdmin);
router.get('/', AdminRoutes.getAllAdmin);
router.delete('/:id', AdminRoutes.deleteAdmin);
router.patch('/:id', AdminRoutes.updateAdmin);

module.exports = router;