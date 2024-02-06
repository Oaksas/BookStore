import express, { Router } from 'express';
import userController from '../controller/userController';

const router = express.Router();

// Define user routes
router.post('/', userController.createUser);
router.get('/:userId', userController.getUser);
router.put('/:userId', userController.updateUser);
router.delete('/:userId', userController.deleteUser);
// Add other user-related routes as needed

export default router;
