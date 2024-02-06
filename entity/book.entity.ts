import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../services/Database';

export interface BookUpdateDTO {
    title?: string;
    author?: string;
    price?: number;
}

class Book extends Model {
    public id!: number;
    public title!: string;
    public author!: string;
    public price!: number;
}


Book.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'Book',
        tableName: 'Books',
    }
);

export default Book;
