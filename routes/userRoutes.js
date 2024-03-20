import express from 'express';
import {createUser, getAllUsers, getUserById, updateUser, deleteUser} from '../controllers/userController.js';

const userRoutes = express.Router();

userRoutes.route('/').post(createUser).get(getAllUsers);
userRoutes.route('/:userId').get(getUserById).put(updateUser).delete(deleteUser);


export default userRoutes;