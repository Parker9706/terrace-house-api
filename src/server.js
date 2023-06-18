import dotenv from "dotenv";
import express from "express";
import path from 'path';
import rateLimit from 'express-rate-limit';
import router from "./routes.js";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { findAllMembers } from "./controllers/members.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(express.static(path.join(__dirname, 'frontend')));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10000, 
  message: 'You have made too many requests',
});

app.use(limiter);
dotenv.config();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  const language = req.query.language || 'en';
  req.language = language;
  next();
});

app.use('/api/v1', router);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'README.md'));
});

app.get('/members', async (req, res) => {
  const { language } = req.params;
  const result = await findAllMembers();
  return res.status(200).json(result);
});



app.use((req, res) => {
  return res.status(404).send('Endpoint not found...');
});

app.use((err, req, res) => {
  console.error(err.stack);
  return res.status(500).send('Internal Server Error');
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server listening on port ${PORT}`);
});

export default app;
