import { Request, Response } from 'express';
import UserService from '../services/userService';
import { CreateUserDTO, UserResponseDTO } from '../entity/user.entity';
import userRepository from '../repository/userRepository';
import orderRepository from '../repository/orderRepository';

export default {
    createUser: async (req: Request, res: Response) => {
        try {
            const { username, password }: CreateUserDTO = req.body;
            const user = await UserService.createUser(username, password);
            const userResponse: UserResponseDTO = {
                id: user.id,
                username: user.username,
                points: user.points,
            };

            res.status(201).json(userResponse);
        } catch (error) {
            console.error(error);
            res.status(500).send('Failed to create user');
        }
    },

    loginUser: async (req: Request, res: Response) => {
        try {
            const { username, password }: CreateUserDTO = req.body;
            const user = await UserService.loginUser(username, password);
            if (user) {
                const userResponse: UserResponseDTO = {
                    id: user.id,
                    username: user.username,
                    points: user.points,
                };

                res.status(200).json(userResponse);
            }
            else {
                res.status(404).send('Incorrect username or password ');
            }

        } catch (error) {
            console.error(error);
            res.status(500).send('Failed to login user');
        }
    },

    getUser: async (req: Request, res: Response) => {
        try {
            const userId = parseInt(req.params.userId, 10);
            const user = await UserService.getUserById(userId);

            if (user) {
                res.status(200).json(user);
            } else {
                res.status(404).send('User not found');
            }
        } catch (error) {
            console.error(error);
            res.status(500).send('Failed to get user');
        }
    },

    updateUser: async (req: Request, res: Response) => {
        try {
            const userId = parseInt(req.params.userId, 10);
            const { username } = req.body;
            const user = await UserService.updateUser(userId, username);

            if (user) {
                res.status(200).json(user);
            } else {
                res.status(404).send('User not found');
            }
        } catch (error) {
            console.error(error);
            res.status(500).send('failed to update user');
        }
    },

    deleteUser: async (req: Request, res: Response) => {
        try {
            const userId = parseInt(req.params.userId, 10);
            await UserService.deleteUser(userId);
            res.status(204).send();
        } catch (error) {
            console.error(error);
            res.status(500).send('failed to delete user');
        }
    },

    // Assuming you have a model for User and Order, and UserRepository with methods like getUserById

    getOrders: async (req: Request, res: Response) => {
        try {
            const userId = parseInt(req.params.userId, 10);
            const user = await userRepository.getUserById(userId);

            if (user) {
                // Assuming you have a method in OrderRepository to fetch orders by user ID
                const orders = await orderRepository.getOrderbyCustomerId(userId);

                res.status(200).json(orders);
            } else {
                res.status(404).send('User not found');
            }
        } catch (error) {
            console.error(error);
            res.status(500).send('Failed to get orders');
        }
    }

};
