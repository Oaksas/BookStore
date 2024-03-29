import express, { Router } from 'express';
import userController from '../controller/userController';

const router = express.Router();

router.post('/', userController.createUser);
router.get('/:userId', userController.getUser);
router.post('/login', userController.loginUser);
router.put('/:userId', userController.updateUser);
router.delete('/:userId', userController.deleteUser);
router.get('/:userId/orders', userController.getOrders);



export default router;
