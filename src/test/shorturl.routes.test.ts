import app from '../app';
import request from 'supertest';
import getApp from './helpers';

const testApp = getApp(app);

describe('Short URL Routes Test', () => {
  describe('POST /api/shorturl', () => {
    it('should return 200 OK', async () => {
      const response = await request(testApp).post('/api/shorturl').send({ fullUrl: 'https://google.com' });
      expect(response.statusCode).toBe(200);
    });
  });
});
