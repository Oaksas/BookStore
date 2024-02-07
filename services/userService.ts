import UserRepository from '../repository/userRepository';
import User from '../entity/user.entity';

export default {
    createUser: async (username: string, password: string): Promise<User> => {
        try {
            const user = await UserRepository.createUser(username, password);
            return user;
        } catch (error) {
            throw new Error('Failed to create user');
        }
    },

    loginUser: async (username: string, password: string): Promise<User | null> => {
        try {
            const user = await UserRepository.loginUser(username, password);
            return user;
        } catch (error) {
            throw new Error('Failed to login user');
        }
    },

    getUserById: async (userId: number): Promise<User | null> => {
        try {
            const user = await UserRepository.getUserById(userId);
            return user;
        } catch (error) {
            throw new Error('Failed to get user');
        }
    },

    updateUser: async (userId: number, username: string): Promise<User | null> => {
        try {
            const user = await UserRepository.updateUser(userId, username);
            return user;
        } catch (error) {
            throw new Error('Failed to update user');
        }
    },

    deleteUser: async (userId: number): Promise<void> => {
        try {
            await UserRepository.deleteUser(userId);
        } catch (error) {
            throw new Error('Failed to delete user');
        }
    },

    reducePoints: async (userId: number, amount: number) => {
        try {
            const user = await User.findByPk(userId);

            if (user) {
                if (user.points >= amount) {
                    user.points -= amount;
                    await user.save();
                } else {
                    throw new Error('Insufficient balance');
                }
            } else {
                throw new Error('User not found');
            }
        } catch (error) {
            throw new Error('Failed to reduce points');
        }
    },


};
