Here's your complete `README.md` file for **Day 5 – Note-taking API using Express.js**:

---

```markdown
# 📘 Day 5 – Note-taking API using Node.js & Express.js

Welcome to **Day 5** of my **100 Days of Full Stack Development** challenge! 🚀  
Today, I built a fully functional **Note-taking REST API** using `Node.js`, `Express.js`, and file-based JSON storage – simulating a basic backend without a database.

---

## 🔥 What I Learned

✅ Core backend concepts using Express.js  
✅ CRUD Operations (Create, Read, Update, Delete)  
✅ HTTP Methods: `GET`, `POST`, `PUT`, `DELETE`  
✅ Structuring backend projects with MVC pattern (routes, controllers)  
✅ Reading/writing JSON files using the `fs` module  
✅ Testing APIs using Postman or Thunder Client  

---

## 🧠 Project Explanation (Simple Terms)

We created an API that allows you to:
- **✍️ Add** a new note
- **📖 Read** all notes
- **📝 Update** a note using its ID
- **🗑️ Delete** a note using its ID

Instead of using a database, we’re storing the notes in a `notes.json` file. The project is cleanly organized using **routes** and **controllers**, just like a professional app.

---

## 📁 Folder Structure

```
note-api/
│
├── server.js                  # Entry point of the app
├── notes.json                 # Acts as a mock database
├── routes/
│   └── notes.js               # All API routes
├── controllers/
│   └── notesController.js     # Logic for CRUD operations
```

---

## ⚙️ How It Works

### 1. `server.js`

Sets up the Express app and routes:
```js
const express = require('express');
const app = express();
const notesRoutes = require('./routes/notes');

app.use(express.json()); // Parse JSON request body
app.use('/api/notes', notesRoutes); // Use note routes

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
```

---

### 2. `notes.json`

Stores notes in this format:
```json
[
  {
    "id": 1712345678901,
    "title": "Learn Node.js",
    "content": "Practiced CRUD operations."
  }
]
```

---

### 3. `routes/notes.js`

Defines the API endpoints:
```js
const express = require('express');
const router = express.Router();
const {
  getNotes,
  addNote,
  updateNote,
  deleteNote,
} = require('../controllers/notesController');

router.get('/', getNotes);
router.post('/', addNote);
router.put('/:id', updateNote);
router.delete('/:id', deleteNote);

module.exports = router;
```

---

### 4. `controllers/notesController.js`

Handles logic like reading from and writing to the `notes.json` file:
```js
const fs = require('fs');
const path = './notes.json';

const readData = () => JSON.parse(fs.readFileSync(path));
const writeData = (data) => fs.writeFileSync(path, JSON.stringify(data, null, 2));

exports.getNotes = (req, res) => {
  const notes = readData();
  res.json(notes);
};

exports.addNote = (req, res) => {
  const notes = readData();
  const newNote = { id: Date.now(), ...req.body };
  notes.push(newNote);
  writeData(notes);
  res.status(201).json(newNote);
};

exports.updateNote = (req, res) => {
  const notes = readData();
  const id = Number(req.params.id);
  const updatedNotes = notes.map(note => note.id === id ? { ...note, ...req.body } : note);
  writeData(updatedNotes);
  res.json({ message: 'Note updated successfully' });
};

exports.deleteNote = (req, res) => {
  const notes = readData();
  const id = Number(req.params.id);
  const filteredNotes = notes.filter(note => note.id !== id);
  writeData(filteredNotes);
  res.json({ message: 'Note deleted successfully' });
};
```

---

## 🧪 How to Test (Postman or Thunder Client)

### 🔹 Add a Note (POST)
**URL:** `http://localhost:3000/api/notes`  
**Body:**
```json
{
  "title": "My First Note",
  "content": "This is my first note using Express API."
}
```

---

### 🔹 Get All Notes (GET)
**URL:** `http://localhost:3000/api/notes`

---

### 🔹 Update a Note (PUT)
**URL:** `http://localhost:3000/api/notes/{id}`  
**Body:**
```json
{
  "title": "Updated Note",
  "content": "This note has been updated."
}
```

---

### 🔹 Delete a Note (DELETE)
**URL:** `http://localhost:3000/api/notes/{id}`

---

## 💻 Sample Test Data

```json
{
  "title": "Grocery List",
  "content": "Eggs, Milk, Bread"
}
```

```json
{
  "title": "Learn Express",
  "content": "Build APIs using Node.js and Express.js"
}
```

---

## 📚 Helpful Resources

- 📘 [Express Routing Basics](https://expressjs.com/en/guide/routing.html)  
- 📁 [Node.js fs Module](https://nodejs.org/api/fs.html)  
- 🔥 [Postman](https://www.postman.com/) – for API testing  
- 📺 [Node.js REST API Crash Course – FreeCodeCamp](https://www.youtube.com/watch?v=l8WPWK9mS5M)  
- 🧪 [Thunder Client (VS Code Extension)](https://www.thunderclient.com/)

---

## 🏁 Conclusion

This project helped me understand how APIs work in real-world applications. I can now:
- Design and implement backend routes
- Handle JSON data
- Perform file-based storage as a database simulation
- Build real-world CRUD APIs 🚀

---


---

