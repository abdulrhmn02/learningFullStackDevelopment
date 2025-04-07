Sure! Here's your complete `README.md` for **Day 4** of your **100 Days of Full Stack Development Journey**. It includes:

- 📚 Topics learned  
- 🔧 Hands-on practice  
- 📁 Mini project  
- 📎 Resources  
- 🧠 Explanations (in simple words)

---

```markdown
# 📅 Day 4 – CRUD Operations in REST APIs | 100 Days of Full Stack Development

Welcome to **Day 4** of my Full Stack Web Development journey!  
Today was all about understanding and implementing the heart of any backend system — **CRUD operations** using **Node.js and Express**.

---

## 📘 What I Learned

### 🛠️ CRUD = Create, Read, Update, Delete

CRUD operations allow us to **interact with data** in meaningful ways via HTTP requests:

| Operation | HTTP Method | Description          | Endpoint Example     |
|-----------|-------------|----------------------|----------------------|
| Create    | POST        | Add new data         | `POST /notes`        |
| Read      | GET         | Fetch data           | `GET /notes`         |
| Update    | PUT         | Update existing data | `PUT /notes/:id`     |
| Delete    | DELETE      | Remove data          | `DELETE /notes/:id`  |

---

## 🧠 Concepts Explained Simply

### 🔁 REST API
REST (Representational State Transfer) is a way to structure our backend APIs so that clients (like browsers or frontend apps) can easily interact with them using URLs and HTTP methods.

### 📥 POST /notes
Used to create a new note by sending a request body with `title` and `content`.

### 📤 GET /notes
Used to fetch all notes from memory or a database.

### ✏️ PUT /notes/:id
Used to update an existing note. The `:id` is a placeholder for the unique identifier of the note.

### ❌ DELETE /notes/:id
Used to delete a specific note based on its ID.

---

## 🧪 Practice Code

Before the project, I practiced each CRUD operation inside a single Express server.  
Here’s a summary of how it worked:

- Notes were stored in a temporary **in-memory array** (no database yet).
- Each note had an `id`, `title`, and `content`.
- I created separate routes for all 4 operations using `app.get()`, `app.post()`, `app.put()`, and `app.delete()`.

**Note**: This is ideal for learning but won't persist data across server restarts.

---

## 💻 Mini Project – Notes REST API

### 🎯 Objective
Build a functional REST API for managing notes using **Node.js** and **Express**.

### 📁 Folder Structure
```
note-api-project/
├── app.js
├── package.json
└── README.md
```

### 📜 app.js
```js
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let notes = [];
let idCounter = 1;

app.get('/notes', (req, res) => {
  res.json(notes);
});

app.post('/notes', (req, res) => {
  const note = {
    id: idCounter++,
    title: req.body.title,
    content: req.body.content,
  };
  notes.push(note);
  res.status(201).json(note);
});

app.put('/notes/:id', (req, res) => {
  const noteId = parseInt(req.params.id);
  const note = notes.find(n => n.id === noteId);
  if (!note) return res.status(404).json({ error: 'Note not found' });

  note.title = req.body.title || note.title;
  note.content = req.body.content || note.content;
  res.json(note);
});

app.delete('/notes/:id', (req, res) => {
  const noteId = parseInt(req.params.id);
  notes = notes.filter(n => n.id !== noteId);
  res.json({ message: 'Note deleted' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
```

---

## 📝 How to Run

1. Initialize your project:
   ```bash
   npm init -y
   npm install express
   ```

2. Save the above code in `app.js`.

3. Start the server:
   ```bash
   node app.js
   ```

4. Use **Postman** or **curl** to test the routes!

---

## 🔗 Resources

- [Node.js HTTP Methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)
- [Express Routing Docs](https://expressjs.com/en/guide/routing.html)
- [Postman](https://www.postman.com/) – API testing tool

---

## ✅ What I Built

I successfully built a mini **Note-taking REST API** that supports:
- Adding a note (POST)
- Getting all notes (GET)
- Updating a note by ID (PUT)
- Deleting a note by ID (DELETE)

---

## 🚀 What's Next?

In **Day 5**, I will:
- Structure the project better with routers & controllers
- Learn about modular code
- Add error handling middleware
- Push it to GitHub
- Post about it on LinkedIn

Let’s keep shipping code every day! 💻🔥

---

_Thanks for reading! Feel free to fork the project or give feedback._ 😊
```

---

