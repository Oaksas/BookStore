'use strict';
const { QueryInterface, Sequelize } = require('sequelize');
const books = require('../../utils/seederData.js');

console.log(books)
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Books', books.map((book) => ({
      ...book,
      createdAt: new Date(),
      updatedAt: new Date(),
    })), {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Books', {});
  },
};
