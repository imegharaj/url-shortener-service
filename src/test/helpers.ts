import { Application } from 'express';
import { AppRoutes } from '../common/common.routes.config';
import { RoutesConfig } from '../common/routes.config';
import { ShortUrlRoutes } from '../shorturl/shorturl.routes.config';

export const getApp = (app: Application) => {
  const routes: Array<RoutesConfig> = [];
  routes.push(new AppRoutes(app));
  routes.push(new ShortUrlRoutes(app));
  app.routes = routes;

  return app;
};

export default getApp;
