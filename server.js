// index.js
import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import run from './utils/sendEmail.js';
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/SESMail', async (req, res) => {
  try {
    await run();
    res.send('Mail Sent!');
  } catch (err) {
    res.send('Mail Not Sent')
  }
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
