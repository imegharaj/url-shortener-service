import errorHandler from 'errorhandler';
import { AppRoutes } from './common/common.routes.config';
import app from './app';
import { RoutesConfig } from './common/routes.config';
import { ShortUrlRoutes } from './shorturl/shorturl.routes.config';
import logger from './utils/logger';

const routes: Array<RoutesConfig> = [];

/**
 * Error Handler. Provides full stack
 */
if (process.env.NODE_ENV === 'development') {
  app.use(errorHandler());
}

/**
 * Start Express server.
 */
const server = app.listen(app.get('port'), () => {
  console.log('  App is running at http://localhost:%d in %s mode', app.get('port'), app.get('env'));
  console.log('  Press CTRL-C to stop\n');

  routes.push(new AppRoutes(app));
  routes.push(new ShortUrlRoutes(app));

  routes.forEach((route: RoutesConfig) => {
    logger.debug(`Routes configured for ${route.getName()}`);
  });

  app.routes = routes;
});

export default server;
