import { RoutesConfig } from './routes.config';
import { Application, Request, Response } from 'express';

export class AppRoutes extends RoutesConfig {
  constructor(app: Application) {
    super(app, 'AppRoutes');
  }

  configureRoutes() {
    this.app.route('/').get((req: Request, res: Response) => {
      res.status(200).send('Service is Healthy');
    });

    this.app.route('/healthcheck').get((req: Request, res: Response) => {
      res.status(200).send('Service is Healthy');
    });

    return this.app;
  }
}
