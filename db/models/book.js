'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {

    static associate(models) {
    }
  }
  Book.init({
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    price: DataTypes.FLOAT,
    tags: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};