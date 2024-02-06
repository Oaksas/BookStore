import express, { Router } from 'express';
import BookController from '../controller/bookController';

const router: Router = express.Router();

// Define book routes
router.post('/', BookController.createBook);
router.get('/:bookId', BookController.getBook);
router.put('/:bookId', BookController.updateBook);
router.delete('/:bookId', BookController.deleteBook);

export default router;
