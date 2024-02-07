import Order from '../entity/order.entity';
import OrderRepository from '../repository/orderRepository';
import bookService from './bookService';
import userService from './userService';

export default {
    createOrder: async (customerId: number, bookId: number, quantity: number): Promise<Order> => {
        try {
            const user = await userService.getUserById(customerId);
            const book = await bookService.getBookById(bookId);

            if (!user) {
                throw new Error('User not found');
            }
            if (!book) {
                throw new Error('Book not found');
            }
            const totalPrice = book.price * quantity;
            if (user.points < totalPrice) {
                throw new Error('Insufficient balance');
            }
            await userService.reducePoints(customerId, totalPrice);

            const order = await OrderRepository.createOrder(customerId, bookId, quantity);


            return order;
        } catch (error) {
            throw new Error('Failed to create order');
        }
    },

    getOrderById: async (orderId: number): Promise<Order | null> => {
        try {
            const order = await OrderRepository.getOrderById(orderId);
            return order;
        } catch (error) {
            throw new Error('Failed to get order');
        }
    },

    cancelOrder: async (orderId: number): Promise<void> => {
        try {
            await OrderRepository.cancelOrder(orderId);
        } catch (error) {
            throw new Error('Failed to cancel order');
        }
    },
};
