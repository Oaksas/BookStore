
import { Request, Response } from 'express';
import BookService from '../services/bookService';

export default {
  createBook: async (req: Request, res: Response) => {
    try {
      const { title, author, price } = req.body;
      const book = await BookService.createBook(title, author, price);
      res.status(201).json(book);
    } catch (error) {
      console.error(error);
      res.status(500).send('Failed to create book');
    }
  },

  getBook: async (req: Request, res: Response) => {
    try {
      const bookId = parseInt(req.params.bookId, 10);
      const book = await BookService.getBookById(bookId);

      if (book) {
        res.status(200).json(book);
      } else {
        res.status(404).send('Book not found');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Failed to get book');
    }
  },

  updateBook: async (req: Request, res: Response) => {
    try {
      const bookId = parseInt(req.params.bookId, 10);
      const { title, author, price } = req.body;
      const book = await BookService.updateBook(bookId, title, author, price);

      if (book) {
        res.status(200).json(book);
      } else {
        res.status(404).send('Book not found');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Failed to update book');
    }
  },

  deleteBook: async (req: Request, res: Response) => {
    try {
      const bookId = parseInt(req.params.bookId, 10);
      await BookService.deleteBook(bookId);
      res.status(204).send();
    } catch (error) {
      console.error(error);
      res.status(500).send('Failed to delete book');
    }
  },
};