import { RoutesConfig } from '../common/routes.config';
import { Application } from 'express';
import { createShortUrl, deleteShortUrl, getShortUrl, handleRedirect, updateShortUrl } from './shortUrl.controller';
import shortUrlSchema, { shortUrlQuery } from './shortUrl.schema';
import { validateResource } from '../common/validate.resource';

export class ShortUrlRoutes extends RoutesConfig {
  constructor(app: Application) {
    super(app, 'UrlRoutes');
  }

  configureRoutes() {
    this.app.route('/api/shorturl').post(validateResource(shortUrlSchema), createShortUrl);

    this.app.route('/:urlId').get(validateResource(shortUrlQuery), handleRedirect);

    this.app
      .route('/api/:urlId')
      .get(getShortUrl)
      .put(validateResource(shortUrlSchema), updateShortUrl)
      .delete(deleteShortUrl);

    return this.app;
  }
}
