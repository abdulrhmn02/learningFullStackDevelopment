const http = require('http');
const fs = require('fs');
const os = require('os');
const path = require('path');
const url = require('url');
const logger = require('./logger');

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const { pathname, query } = parsedUrl;

  if (pathname === '/add-note') {
    const title = query.title;
    const content = query.content;

    const note = `Title: ${title}\nContent: ${content}\n---\n`;

    fs.appendFileSync(path.join(__dirname, 'notes.txt'), note);

    logger.emit('note-added', `Note "${title}" added!`);

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Note saved successfully!');
  }

  else if (pathname === '/sysinfo') {
    const info = {
      platform: os.platform(),
      freeMemory: os.freemem(),
      cpus: os.cpus().length,
    };

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(info));
  }

  else {
    res.writeHead(404);
    res.end('Page not found');
  }
});

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
