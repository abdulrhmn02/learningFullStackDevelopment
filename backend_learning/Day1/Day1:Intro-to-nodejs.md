

```markdown
# 100 Days of Code - Day 1: Building a Simple Calculator API with Node.js

## Introduction to Node.js

Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows you to run JavaScript on the server-side, enabling you to build scalable network applications using JavaScript. Node.js is particularly well-suited for building lightweight, fast, and scalable applications, such as web servers and APIs.

In this project, we'll be using Node.js to create a basic server and build a simple API that can perform arithmetic operations — specifically, an addition function.

## Day 1: Creating a Simple Calculator API with Node.js

In this project, you'll learn how to:
1. Set up a Node.js project.
2. Create a basic server.
3. Implement a simple `add` function.
4. Integrate the `add` function into a live API.
5. Test the API using a web browser or Postman.

---

### 🧘‍♂️ Simplified Plan for Day 1

We'll build a very basic calculator that adds two numbers using a function you created and exported. This will run on a local Node.js server and serve the result through a simple API endpoint (`/add`).

---

### 🔹 Step-by-Step Guide

#### ✅ Step 1: Create a Folder for Your Project
Start by creating a folder for your project and initializing it with `npm` (Node Package Manager).

```bash
mkdir node-day1
cd node-day1
npm init -y
```

---

#### ✅ Step 2: Create Two Files
Create two JavaScript files: `server.js` and `calculator.js`.

```bash
touch server.js calculator.js
```

---

#### ✅ Step 3: Write a Simple Add Function in `calculator.js`
In the `calculator.js` file, write a simple function that adds two numbers.

```js
// calculator.js

function add(a, b) {
  return a + b;
}

module.exports = add; // Export the add function to use in other files
```

---

#### ✅ Step 4: Create a Simple Server in `server.js`
In `server.js`, set up a basic HTTP server using Node.js's built-in `http` and `url` modules. We'll also integrate the `add` function from `calculator.js`.

```js
// server.js

const http = require('http');
const url = require('url');
const add = require('./calculator'); // Import the add function

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true); // Parse the URL and query parameters

  if (parsedUrl.pathname === '/add') {
    const a = parseFloat(parsedUrl.query.a); // Extract 'a' from the query
    const b = parseFloat(parsedUrl.query.b); // Extract 'b' from the query
    const result = add(a, b); // Call the add function

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ result: result })); // Send the result as a JSON response
  } else {
    res.writeHead(404);
    res.end('Not Found'); // Handle invalid routes
  }
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
```

---

#### ✅ Step 5: Run the Server
Start the server by running the following command:

```bash
node server.js
```

---

#### ✅ Step 6: Test the API
Now, you can test the API in a web browser or Postman. Open your browser and navigate to:

```
http://localhost:3000/add?a=5&b=3
```

You should see the following response:

```json
{
  "result": 8
}
```

---

### 🧠 Summary of Day 1

Today, you:
- Set up your first Node.js project ✅
- Built a simple HTTP server using Node.js ✅
- Created a basic function to perform arithmetic addition ✅
- Integrated the function into the server to build an API ✅

---



### Useful Resources:
- [Node.js Official Documentation](https://nodejs.org/en/docs/)
- [JavaScript Basics](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
```

---

This `README.md` file should give you a solid foundation for your Day 1 project. It explains the basic concepts, provides a clear step-by-step guide, and gives a summary of what you achieved. Let me know if you'd like me to make any changes or add anything else!