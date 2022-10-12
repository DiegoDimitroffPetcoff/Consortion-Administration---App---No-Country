import express from 'express';

import * as AdminRoutes from '../controllers/adminController.js'
import * as AuthRoute from '../controllers/authController.js'
import * as AdminValidator from '../validators/authValidator.js'

const router = express.Router();


router.post('/login', AdminValidator.validatorLoginAdmin, AuthRoute.login);
router.post('/signup', AuthRoute.signUp);
router.get('/logout', AuthRoute.getLogout);
router.get('/:id', AdminRoutes.getAdmin);
router.get('/', AdminRoutes.getAllAdmin);
router.delete('/:id', AdminRoutes.deleteAdmin);
router.patch('/:id', AdminRoutes.updateAdmin);
