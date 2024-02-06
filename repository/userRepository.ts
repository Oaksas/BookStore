import User from '../entity/user.entity';

export default {
    createUser: async (username: string, password: string): Promise<User> => {
        try {
            const user = await User.create({ username, password });
            return user;
        } catch (error) {
            console.error(error);
            throw new Error('Failed to create user');
        }
    },

    getUserById: async (userId: number): Promise<User | null> => {
        try {
            const user = await User.findByPk(userId);
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
