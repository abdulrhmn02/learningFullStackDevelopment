Here's your **`README.md`** for **Day 3** – beautifully structured with explanation, practice tasks, project walkthrough, and learning resources:

---

```markdown
# 📘 Day 3: Express.js & Basic Routing

Welcome to **Day 3** of the Full Stack Journey! Today we dive into the world of **Express.js**, a lightweight framework that simplifies building APIs and servers using Node.js.

---

## 📌 Topics Covered

### ✅ What is Express.js?
Express is a minimal and flexible Node.js web framework that helps us build server-side logic easily and cleanly.

- Built on top of Node.js
- Allows easy creation of routes
- Helps manage request/response flow
- Supports middleware and route parameters

---

## ⚙️ Setup Instructions

```bash
# Step 1: Create project folder
mkdir express-basics
cd express-basics

# Step 2: Initialize npm
npm init -y

# Step 3: Install Express
npm install express

# Step 4: Create index.js
touch index.js
```

---

## 🧠 Express Basics: Code & Explanation

```js
// index.js
const express = require('express'); // importing express
const app = express(); // initializing express

// Root Route
app.get('/', (req, res) => {
  res.send('Welcome to Express Day 3 🚀');
});

// Another route
app.get('/hello', (req, res) => {
  res.send('Hello, this is a GET route!');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});
```

### 🔍 Code Breakdown

| Code | What it does |
|------|--------------|
| `express()` | Creates an instance of the app |
| `app.get()` | Handles GET requests |
| `req` | Request object |
| `res` | Response object |
| `res.send()` | Sends a plain-text response |
| `app.listen()` | Starts the server at given port |

---

## 🧪 Practice Tasks

Try implementing the following routes:

1. `/about` – Respond with a message like "This is about us."
2. `/contact` – Respond with a JSON object `{ email: "test@example.com" }`.
3. `/greet?name=Rahman` – Use query params to greet by name.

Hint for query parameters:
```js
const name = req.query.name;
res.send(`Hello, ${name}`);
```

---

## 🛠️ Mini Project: Student Info API

### 💡 Objective:
Create a basic Express API that serves student data using routes.

### 📂 Folder Structure:
```
express-basics/
├── index.js
```

### 👨‍💻 Step-by-Step Code:

```js
const express = require('express');
const app = express();

const students = [
  { id: 1, name: 'Aisha', age: 20 },
  { id: 2, name: 'Rahman', age: 21 },
  { id: 3, name: 'Zara', age: 19 }
];

// Home route
app.get('/', (req, res) => {
  res.send('Welcome to Student Info API!');
});

// Get all students
app.get('/students', (req, res) => {
  res.json(students);
});

// Get a student by ID
app.get('/students/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const student = students.find(std => std.id === id);

  if (student) {
    res.json(student);
  } else {
    res.status(404).send('Student not found');
  }
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
```

### 🧠 Concepts Practiced

| Concept | Usage |
|--------|-------|
| `req.params` | Used to get dynamic parts from URL (`:id`) |
| `res.json()` | Sends a response in JSON format |
| `res.status(404)` | Sends a 404 error if student is not found |

---

## 📚 Resources

- 🔗 [Express.js Official Docs](https://expressjs.com/)
- 📘 [MDN - Express Basics](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs)
- 📺 [Net Ninja Express.js Crash Course](https://youtu.be/L72fhGm1tfE)
- 📺 [Codevolution Express Playlist](https://youtube.com/playlist?list=PLC3y8-rFHvwiWPS2RO3qT6Kh9sL6rZTWv)

---

## 🚀 What's Next?

Tomorrow we dive into **Day 4: REST API Basics (CRUD Operations)** using Express. We’ll learn how to:
- Handle POST, PUT, DELETE requests
- Use tools like Postman
- Simulate real-world REST APIs

Stay consistent 💪 — You’re building your own full-stack powers one day at a time!

---

```
