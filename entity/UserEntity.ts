import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../services/Database';

class User extends Model {
    public id!: number;
    public username!: string;
    public points!: number;
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
        points: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 100, // Default value for new customers
        },
    },
    {
        sequelize,
        modelName: 'User',
        tableName: 'users', // Adjust the table name as needed
    }
);

export default User;
