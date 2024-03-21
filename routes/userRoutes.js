import express from 'express';
import {createUser, getAllUsers, getUserById, updateUser, deleteUser} from '../controllers/userController.js';
import { authValidator } from '../middlewares/authValidator.js';
import { isAdmin } from '../middlewares/isAdmin.js';

const userRoutes = express.Router();

userRoutes.route('/').post(createUser).get(authValidator, isAdmin, getAllUsers);
userRoutes.route('/:userId').get(getUserById).put(updateUser).delete(deleteUser);


export default userRoutes;