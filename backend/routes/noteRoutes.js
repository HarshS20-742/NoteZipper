const express = require('express');
const {getNotes,CreateNote,getNoteById, UpdateNote, DeleteNote} = require('../controllers/notesController');
const protect = require('../middlewares/authMiddleware');

const router = express.Router();

router.route('/').get( getNotes);

router.route('/create').post(protect,CreateNote);
router.route('/:id').get(getNoteById).put(protect,UpdateNote).delete(protect, DeleteNote);


module.exports = router