import { BookUpdateDTO } from "../entity/book.entity";
import bookRepository from "../repository/bookRepository";

export default {
  createBook: async (title: string, author: string, price: number, tags: [string], rating: number) => {
    try {
      const book = await bookRepository.createBook(title, author, price, tags, rating);
      return book;
    } catch (error) {
      throw new Error('Failed to create book');
    }
  },

  getBookById: async (bookId: number) => {
    try {
      const book = await bookRepository.getBookById(bookId);
      return book;
    } catch (error) {
      throw new Error('Failed to get book');
    }
  },

  getAllBooks: async () => {
    try {
      const books = await bookRepository.getAllBooks();
      return books;
    } catch (error) {
      throw new Error('Failed to get books');
    }
  },

  updateBook: async (bookId: number, updateData: BookUpdateDTO) => {
    try {
      const book = await bookRepository.updateBook(bookId, updateData);
      return book;
    } catch (error) {
      throw new Error('Failed to update book');
    }
  },

  deleteBook: async (bookId: number) => {
    try {
      await bookRepository.deleteBook(bookId);
    } catch (error) {
      throw new Error('Failed to delete book');
    }
  },
};
