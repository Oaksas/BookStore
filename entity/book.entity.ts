import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../services/Database';

export interface BookUpdateDTO {
    title?: string;
    author?: string;
    price?: number;
    tags?: string;
}

class Book extends Model {
    public id!: number;
    public title!: string;
    public author!: string;
    public price!: number;
    public tags!: string;
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
        tags: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    {
        sequelize,
        modelName: 'Book',
        tableName: 'Books',
    }
);

export default Book;
