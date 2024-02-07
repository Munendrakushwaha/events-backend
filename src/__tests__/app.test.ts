import request from 'supertest';
import app from './user.test';

describe('Check app for health check and invalid routes', () => {
    it('should return 200 and a message', async () => {
        const res = await request(app).get('/health-check');
        expect(res.status).toBe(200);
        expect(res.text).toEqual('Health is ok');
    });
    it('should return 404 and a message - url not found', async () => {
        const res = await request(app).get('/hhgdshj');
        expect(res.status).toBe(404);
        expect(res.text).toEqual('URL not found');
    });
});
