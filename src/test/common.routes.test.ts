import app from '../app';
import request from 'supertest';
import getApp from './helpers';

const testApp = getApp(app);

describe('Common Routes Test', () => {
  describe('GET /', () => {
    it('should return 200 OK', async () => {
      const response = await request(testApp).get('/').send();
      expect(response.statusCode).toBe(200);
    });
  });

  describe('GET /healthcheck', () => {
    it('should return 200 OK', async () => {
      const response = await request(testApp).get('/healthcheck').send();
      expect(response.statusCode).toBe(200);
    });
  });
});
