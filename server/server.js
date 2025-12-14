const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

/* 🔥 ВАЖНО: раздаём статические файлы */
app.use(express.static(path.join(__dirname, 'public')));

/* Главная страница */
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log('DarkService backend running on port', PORT);
});
