
const express = require('express');

const AdminRoutes = require ('../controllers/adminController.js');
const AuthRoute = require('../controllers/authController.js');
const AdminValidator = require('../validator/authValidator.js');

const router = express.Router();


router.post('/login', AdminValidator.validatorLoginAdmin, AuthRoute.login);//-
router.post('/signup', AuthRoute.signUp);//-
router.get('/logout', AuthRoute.getLogout);
router.get('/admin', AdminRoutes.getAdmin);//-
router.get('/administradores', AdminRoutes.getAllAdmin);//-
router.delete('/delete', AdminRoutes.deleteAdmin);//*
router.patch('/:id', AdminRoutes.updateAdmin);

module.exports = router;