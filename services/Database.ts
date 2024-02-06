import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'root',
    database: 'bookstore',
});

const initDatabase = async (): Promise<void> => {
    try {
        await sequelize.authenticate();
        console.log('Connection to the database has been established successfully.');
        // Add synchronization or migration logic here if needed
    } catch (error) {
        console.error('Unable to connect to the database:', error);
        throw error;
    }
};

export default initDatabase;
