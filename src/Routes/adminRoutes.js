import express from 'express';
const router = express.Router();

import * as AuthRoute from '../controllers/authController.js';

router.post('/login', AuthRoute.login);
router.post('/signup',AuthRoute.signUp);
router.get('/logout', AuthRoute.getLogout);


export default router;