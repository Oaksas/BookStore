import { Request, Response } from 'express';
import OrderService from '../services/orderService';

export default {
    createOrder: async (req: Request, res: Response) => {
        try {
            const { customerId, bookId, quantity } = req.body;
            const order = await OrderService.createOrder(customerId, bookId, quantity);
            res.status(201).json(order);
        } catch (error) {
            res.status(500).send('Internal Server Error');
        }
    },

    getOrder: async (req: Request, res: Response) => {
        try {
            const orderId = parseInt(req.params.orderId, 10);
            const order = await OrderService.getOrderById(orderId);

            if (order) {
                res.status(200).json(order);
            } else {
                res.status(404).send('Order not found');
            }
        } catch (error) {
            res.status(500).send('Internal Server Error');
        }
    },

    cancelOrder: async (req: Request, res: Response) => {
        try {
            const orderId = parseInt(req.params.orderId, 10);
            await OrderService.cancelOrder(orderId);
            res.status(204).send();
        } catch (error) {
            res.status(500).send('Internal Server Error');
        }
    },
};
