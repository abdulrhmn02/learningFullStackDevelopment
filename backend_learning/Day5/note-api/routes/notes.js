const express = require('express');
const router = express.Router();
const {
  getNotes,
  addNote,
  updateNote,
  deleteNote,
} = require('../controllers/notesController');

// Define routes
router.get('/', getNotes);       // GET all notes
router.post('/', addNote);       // POST new note
router.put('/:id', updateNote);  // PUT update a note
router.delete('/:id', deleteNote); // DELETE a note

module.exports = router;
