import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../services/Database';
import User from './user.entity';
import Book from './book.entity';

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
            references: {
                model: User,
                key: 'id',
            },
        },
        bookId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Book,
                key: 'id',
            },
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'Order',
        tableName: 'Orders',
    }
);

export default Order;
