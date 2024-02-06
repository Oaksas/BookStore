import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize({
    dialect: 'postgres',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE,

});

const initDatabase = async (): Promise<void> => {
    try {
        await sequelize.authenticate();
        console.log('Connection to the database has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
        throw error;
    }
};

export default initDatabase;
