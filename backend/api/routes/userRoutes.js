// const express = require('express');
import express from 'express';
import userController from '../controllers/userController.js';
// const userController = require('../controllers/userController')
// const validateMiddleWare = require('../../utils/middlewares/schema-validator');
// const validateUser = require('../../db/models/user-schema').validateUser;
import { validateUser } from '../../db/models/user-schema.js';
import validateMiddleWare from '../../utils/middlewares/schema-validator.js';


const userRoutes = express.Router();

userRoutes.post('/add_new_user',[validateMiddleWare(validateUser)],userController.Register)
userRoutes.post('/login_user',userController.Login)
userRoutes.put('/update_user',userController.Update)
userRoutes.delete('/delete_user',userController.Delete)


// userRoutes.patch('/update_user',userController.Update)
// userRoutes.delete('/delete_user',userController.Delete)

export default userRoutes;