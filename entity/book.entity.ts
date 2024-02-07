import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../services/Database';

export interface BookUpdateDTO {
    title?: string;
    author?: string;
    price?: number;
    rating?: number;
    tags?: [string];
}

class Book extends Model {
    public id!: number;
    public title!: string;
    public author!: string;
    public price!: number;
    public rating!: number;
    public tags!: [string];
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
        rating: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        tags: {
            type: DataTypes.ARRAY(DataTypes.STRING),
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
