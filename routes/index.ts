import express, { Router } from 'express';
import orderRoutes from './OrderRoute';
import userRoutes from './UserRoute';

const router = express.Router();

// Use the individual route files
router.use('/orders', orderRoutes);
router.use('/users', userRoutes);

export default router;
