import { Application } from 'express';
import bodyParser from 'body-parser';
import routes from '../routes';

export default async (app: Application) => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use('/api', routes);


    return app;
}
