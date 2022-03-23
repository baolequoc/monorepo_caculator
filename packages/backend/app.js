import 'dotenv/config';
import express from 'express';
import { json, urlencoded } from 'body-parser';
import cors from 'cors';

const app = express();
const corsOptions = {
  origin: process.env.ORIGIN,
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(urlencoded({ extended: true }));

export default app;
