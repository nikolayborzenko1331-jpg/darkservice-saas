const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// 🔥 ВАЖНО: подключаем public
app.use(express.static(path.join(__dirname, '../public')));

// 🔥 Главная страница
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// 🔥 Проверка, что сервер жив
app.get('/health', (req, res) => {
  res.send('OK');
});

app.listen(PORT, () => {
  console.log('DarkService backend running on port', PORT);
});
