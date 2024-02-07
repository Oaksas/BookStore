import express, { Router } from 'express';
import orderController from '../controller/orderController';

const router = express.Router();

router.post('/', orderController.createOrder);
router.get('/:orderId', orderController.getOrder);
router.delete('/:orderId', orderController.cancelOrder);


export default router;
