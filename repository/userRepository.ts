import User, { UserLoginDTO } from '../entity/user.entity';
import { Op } from 'sequelize';

export default {
    createUser: async (username: string, password: string): Promise<User> => {
        try {
            // Check if a user with the same username already exists
            const existingUser = await User.findOne({
                where: {
                    username: {
                        [Op.iLike]: username, // Case-insensitive comparison
                    },
                },
            });

            if (existingUser) {
                throw new Error('Username already exists');
            }

            // Create the user if it doesn't exist          

            const user = await User.create({ username, password });
            return user;
        } catch (error) {
            console.error(error);
            throw new Error('Failed to create user');
        }
    },

    loginUser: async (username: string, password: string): Promise<User | null> => {
        try {
            const user = await User.findOne({
                where: {
                    username: {
                        [Op.iLike]: username,
                    },
                },
            });

            if (user) {
                const isPasswordValid = password === user.password
                if (isPasswordValid) {
                    return user;
                }
            }
            return null;
        } catch (error) {
            console.error(error);
            throw new Error('Failed to login user');
        }
    },

    getUserById: async (userId: number, options?: any): Promise<User | null> => {
        try {
            const user = await User.findByPk(userId, options);
            return user;
        } catch (error) {
            console.error(error);
            throw new Error('Failed to get user');
        }
    },

    updateUser: async (userId: number, username: string): Promise<User | null> => {
        try {
            const user = await User.findByPk(userId);

            if (user) {
                user.username = username;
                await user.save();
                return user;
            } else {
                throw new Error('User not found');
            }
        } catch (error) {
            console.error(error);
            throw new Error('Failed to update user');
        }
    },

    deleteUser: async (userId: number): Promise<void> => {
        try {
            const user = await User.findByPk(userId);

            if (user) {
                await user.destroy();
            } else {
                throw new Error('User not found');
            }
        } catch (error) {
            console.error(error);
            throw new Error('Failed to delete user');
        }
    },
};
