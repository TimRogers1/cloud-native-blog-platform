// index.js
const express = require('express');
const app = express();

app.use(express.json());

app.get('/api/posts', (req, res) => {
  res.send([{ id: 1, title: 'First Post', content: 'This is the first post.' }]);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

