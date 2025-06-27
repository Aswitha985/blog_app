const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Sample route
app.get('/api/posts', (req, res) => {
  res.json([
    { id: 1, title: 'Hello World', content: 'This is a post from backend.' },
    { id: 2, title: 'Second Post', content: 'Another blog post here.' }
  ]);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

