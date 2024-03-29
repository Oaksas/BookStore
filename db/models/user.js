'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
    }
  }
  User.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    points: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};