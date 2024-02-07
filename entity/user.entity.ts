import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../services/Database';
import Order from './order.entity';


export interface CreateUserDTO {
    username: string;
    password: string;
}

export interface UserResponseDTO {
    id: number;
    username: string;
    points: number;
}

export interface UserLoginDTO {
    username: string;
    password: string;
}

class User extends Model {
    public id!: number;
    public username!: string;
    public points!: number;
    public password!: string;
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        points: {
            type: DataTypes.FLOAT,
            allowNull: false,
            defaultValue: 100, // Default value for new customers
        },
    },
    {
        sequelize,
        modelName: 'User',
        tableName: 'Users', // Adjust the table name as needed
    }
);

export default User;
