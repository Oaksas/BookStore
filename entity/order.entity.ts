import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../services/Database';

class Order extends Model {
    public id!: number;
    public customerId!: number;
    public bookId!: number;
    public quantity!: number;
}

Order.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        customerId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        bookId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'Order',
        tableName: 'Orders', // Adjust the table name as needed
    }
);

export default Order;
