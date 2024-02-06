import { Request, Response } from 'express';
import UserService from '../services/userService';
import { CreateUserDTO, UserResponseDTO } from '../entity/user.entity';

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
        
            res.status(201).json(userResponse);        } catch (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
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
            res.status(500).send('Internal Server Error');
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
            res.status(500).send('Internal Server Error');
        }
    },

    deleteUser: async (req: Request, res: Response) => {
        try {
            const userId = parseInt(req.params.userId, 10);
            await UserService.deleteUser(userId);
            res.status(204).send();
        } catch (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        }
    },
};
