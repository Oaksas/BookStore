import express, { Application } from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import routes from '../routes';

export default async (app: Application) => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use('/api', routes); // You can adjust the base path ('/api' in this case) as needed


    return app;
}
