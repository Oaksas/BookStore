import Order from '../entity/order.entity';

export default {
    createOrder: async (customerId: number, bookId: number, quantity: number): Promise<Order> => {
        try {
            const order = await Order.create({ customerId, bookId, quantity });
            return order;
        } catch (error) {
            console.error(error);
            throw new Error('Failed to create order');
        }
    },

    getOrderById: async (orderId: number): Promise<Order | null> => {
        try {
            const order = await Order.findByPk(orderId);
            return order;
        } catch (error) {
            console.error(error);
            throw new Error('Failed to get order');
        }
    },

    cancelOrder: async (orderId: number): Promise<void> => {
        try {
            const order = await Order.findByPk(orderId);

            if (order) {
                await order.destroy();
            } else {
                throw new Error('Order not found');
            }
        } catch (error) {
            console.error(error);
            throw new Error('Failed to cancel order');
        }
    },
};
