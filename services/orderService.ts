import Order from '../entity/order.entity';
import OrderRepository from '../repository/orderRepository';

export default {
    createOrder: async (customerId: number, bookId: number, quantity: number): Promise<Order> => {
        try {
            const order = await OrderRepository.createOrder(customerId, bookId, quantity);
            return order;
        } catch (error) {
            console.error(error);
            throw new Error('Failed to create order');
        }
    },

    getOrderById: async (orderId: number): Promise<Order | null> => {
        try {
            const order = await OrderRepository.getOrderById(orderId);
            return order;
        } catch (error) {
            console.error(error);
            throw new Error('Failed to get order');
        }
    },

    cancelOrder: async (orderId: number): Promise<void> => {
        try {
            await OrderRepository.cancelOrder(orderId);
        } catch (error) {
            console.error(error);
            throw new Error('Failed to cancel order');
        }
    },
};
