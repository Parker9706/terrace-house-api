import dotenv from "dotenv";
import express from "express";
import rateLimit from 'express-rate-limit';
import router from "./routes.js";

const app = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 1000,
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

app.use((req, res) => {
  return res.status(404).send('Endpoint not found...');
});

app.use((err, req, res) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
