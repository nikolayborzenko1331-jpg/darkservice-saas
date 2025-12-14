const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

/* Раздаём всё из public */
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log('DarkService backend running on port', PORT);
});
