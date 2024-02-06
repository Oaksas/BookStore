import express, { Application } from 'express';
import bodyParser from 'body-parser';
import path from 'path';

export default async (app: Application) => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));


    return app;
}
