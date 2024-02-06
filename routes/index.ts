import express, { Router } from 'express';
import orderRoutes from './OrderRoute';
import userRoutes from './UserRoute';
import bookRoutes from './BookRoute';

const router = express.Router();

// Use the individual route files
router.use('/orders', orderRoutes);
router.use('/users', userRoutes);
router.use('/books', bookRoutes);

export default router;
