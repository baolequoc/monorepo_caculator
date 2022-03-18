import 'dotenv/config';
import express from 'express';
import { json, urlencoded } from 'body-parser';
import cors from 'cors';

const app = express();
const corsOptions = {
  origin: 'http://localhost:8080',
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(urlencoded({ extended: true }));

// simple route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to bezkoder application.' });
});

export default app;
