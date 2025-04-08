const express = require('express');
const app = express();
const notesRoutes = require('./routes/notes'); // ✅ Make sure this path is correct

app.use(express.json()); // Middleware to parse JSON
app.use('/api/notes', notesRoutes); // Mounting routes

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
