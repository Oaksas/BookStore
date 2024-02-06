import express from 'express';
import App from './services/ExpressApp';
import db from './services/Database';

require('dotenv').config();
const StartServer = async () => {
  const app = express();
  await db();
  await App(app);
  app.listen(3000, () => {
    console.log("Server is running on port 3000")
  })
}

StartServer();