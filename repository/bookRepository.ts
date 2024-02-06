import Book from "../entity/book.entity";

export default {
  createBook: async (title: string, author: string, price: number) => {
    try {
      const book = await Book.create({ title, author, price });
      return book;
    } catch (error) {
      console.error(error);
      throw new Error('Failed to create book');
    }
  },

  getBookById: async (bookId: number) => {
    try {
      const book = await Book.findByPk(bookId);
      return book;
    } catch (error) {
      console.error(error);
      throw new Error('Failed to get book');
    }
  },

  updateBook: async (bookId: number, title: string, author: string, price: number) => {
    try {
      const book = await Book.findByPk(bookId);

      if (book) {
        // Update book attributes
        book.title = title;
        book.author = author;
        book.price = price;

        await book.save();
        return book;
      } else {
        throw new Error('Book not found');
      }
    } catch (error) {
      console.error(error);
      throw new Error('Failed to update book');
    }
  },

  deleteBook: async (bookId: number) => {
    try {
      const book = await Book.findByPk(bookId);

      if (book) {
        await book.destroy();
      } else {
        throw new Error('Book not found');
      }
    } catch (error) {
      console.error(error);
      throw new Error('Failed to delete book');
    }
  },
};
