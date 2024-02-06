import express, { Router } from 'express';
import userController from '../controller/UserController';

const router = express.Router();

// Define user routes
router.get('/:userId/orders', userController.listUserOrders);
// Add other user-related routes as needed

export default router;
