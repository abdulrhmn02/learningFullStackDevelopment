const fs = require('fs');
const path = './notes.json';

// Helper functions to read/write JSON file
const readData = () => {
  const data = fs.readFileSync(path);
  return JSON.parse(data);
};

const writeData = (data) => {
  fs.writeFileSync(path, JSON.stringify(data, null, 2));
};

// GET /api/notes
exports.getNotes = (req, res) => {
  const notes = readData();
  res.json(notes);
};

// POST /api/notes
exports.addNote = (req, res) => {
  const notes = readData();
  const newNote = { id: Date.now(), ...req.body }; // Generate unique ID
  notes.push(newNote);
  writeData(notes);
  res.status(201).json(newNote);
};

// PUT /api/notes/:id
exports.updateNote = (req, res) => {
  const notes = readData();
  const id = Number(req.params.id);
  const updatedNotes = notes.map(note =>
    note.id === id ? { ...note, ...req.body } : note
  );
  writeData(updatedNotes);
  res.json({ message: 'Note updated successfully' });
};

// DELETE /api/notes/:id
exports.deleteNote = (req, res) => {
  const notes = readData();
  const id = Number(req.params.id);
  const filteredNotes = notes.filter(note => note.id !== id);
  writeData(filteredNotes);
  res.json({ message: 'Note deleted successfully' });
};
