const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Подключаем папку public
app.use(express.static(path.join(__dirname, '../public')));

// Главная
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Health check
app.get('/health', (req, res) => {
  res.send('OK');
});

app.listen(PORT, () => {
  console.log('DarkService backend running on port', PORT);
});
