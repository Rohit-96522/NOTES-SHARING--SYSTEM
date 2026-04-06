import express from 'express';
import upload from '../middleware/uploadMiddleware.js';
import {
  uploadNote,
  getNotes,
  getNoteById,
  updateNote,
  updateNoteStatus,
  deleteNote,
} from '../controllers/noteController.js';

const router = express.Router();

router.route('/')
  .get(getNotes);

router.route('/upload')
  .post(upload.single('file'), uploadNote);

router.route('/:id')
  .get(getNoteById)
  .put(upload.single('file'), updateNote)
  .delete(deleteNote);

router.route('/:id/status')
  .patch(updateNoteStatus);

export default router;
