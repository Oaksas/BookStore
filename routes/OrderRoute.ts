import express, { Router } from 'express';
import orderController from '../controller/orderController';

const router = express.Router();

// Define order routes
router.post('/', orderController.createOrder);
router.get('/:orderId', orderController.getOrder);
router.delete('/:orderId', orderController.cancelOrder);

// Add other order-related routes as needed

export default router;
