'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.getApp = void 0;
const common_routes_config_1 = require('../common/common.routes.config');
const shorturl_routes_config_1 = require('../shorturl/shorturl.routes.config');
const getApp = (app) => {
  const routes = [];
  routes.push(new common_routes_config_1.AppRoutes(app));
  routes.push(new shorturl_routes_config_1.ShortUrlRoutes(app));
  app.routes = routes;
  return app;
};
exports.getApp = getApp;
exports.default = exports.getApp;
//# sourceMappingURL=helpers.js.map
