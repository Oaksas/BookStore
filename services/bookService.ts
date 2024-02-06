import bookRepository from "../repository/bookRepository";

export default {
  createBook: async (title: string, author: string, price: number) => {
    try {
      const book = await bookRepository.createBook(title, author, price);
      return book;
    } catch (error) {
      console.error(error);
      throw new Error('Failed to create book');
    }
  },

  getBookById: async (bookId: number) => {
    try {
      const book = await bookRepository.getBookById(bookId);
      return book;
    } catch (error) {
      console.error(error);
      throw new Error('Failed to get book');
    }
  },

  updateBook: async (bookId: number, title: string, author: string, price: number) => {
    try {
      const book = await bookRepository.updateBook(bookId, title, author, price);
      return book;
    } catch (error) {
      console.error(error);
      throw new Error('Failed to update book');
    }
  },

  deleteBook: async (bookId: number) => {
    try {
      await bookRepository.deleteBook(bookId);
    } catch (error) {
      console.error(error);
      throw new Error('Failed to delete book');
    }
  },
};
