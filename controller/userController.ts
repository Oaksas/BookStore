import { Request, Response } from 'express';
import User from '../entity/UserEntity';

export default {
    listUserOrders: async (req: Request, res: Response) => {
        try {
            const userId = parseInt(req.params.userId, 10);
            const user = await User.findByPk(userId, { include: Order });

            if (user) {
                const orders = user.Orders || [];
                res.status(200).json(orders);
            } else {
                res.status(404).send('User not found');
            }
        } catch (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        }
    },
};
