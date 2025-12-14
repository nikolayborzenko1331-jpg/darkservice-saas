import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// чтобы сервер понимал JSON
app.use(express.json());

// отдаём сайт
app.use(express.static(path.join(__dirname, "../public")));

// ПРИЁМ ЗАЯВКИ С САЙТА
app.post("/api/request", (req, res) => {
  const { name, phone, device, problem } = req.body;

  console.log("📩 НОВАЯ ЗАЯВКА");
  console.log("Имя:", name);
  console.log("Телефон:", phone);
  console.log("Устройство:", device);
  console.log("Проблема:", problem);

  res.status(200).json({ ok: true });
});

// запуск сервера
app.listen(PORT, () => {
  console.log("🔥 DarkService backend запущен на порту", PORT);
});
