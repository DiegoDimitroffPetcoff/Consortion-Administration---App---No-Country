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