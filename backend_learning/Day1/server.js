// const http = require('http');

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end('Hello World! My first Node.js server is live 🚀');
// });

// server.listen(3000, () => {
//   console.log('Server running at http://localhost:3000');
// });


const http = require('http');
const url = require('url');
const { add, subtract, multiply, divide } = require('./calculator');

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const a = parseFloat(parsedUrl.query.a);
  const b = parseFloat(parsedUrl.query.b);

  let result;

  if (parsedUrl.pathname === '/add') {
    result = add(a, b);
  } else if (parsedUrl.pathname === '/subtract') {
    result = subtract(a, b);
  } else if (parsedUrl.pathname === '/multiply') {
    result = multiply(a, b);
  } else if (parsedUrl.pathname === '/divide') {
    result = divide(a, b);
  } else {
    res.writeHead(404);
    res.end('Not Found');
    return;
  }

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ result }));
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
