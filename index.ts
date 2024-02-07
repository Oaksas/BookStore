import express from 'express';
import App from './services/ExpressApp';
import db from './services/Database';
import cors from 'cors';

require('dotenv').config();
const corsOptions = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};

const StartServer = async () => {
  const app = express();
  app.use(cors(corsOptions));
  await db();
  await App(app);
  app.listen(3000, () => {
    console.log("Server is running on port 3000")
  })
}

StartServer(); 