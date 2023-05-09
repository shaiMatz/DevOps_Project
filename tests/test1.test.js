const request = require('supertest');
const app = require('../server.js');

describe('Testing root path:', () => {
    test('HTTP Request check', () => {
        return request(app).get('/').then(response => {
        expect(response.statusCode).toBe(200);
        })
    })

    test('HTTP Wrong Request check', () => {
        return request(app).get('/123').then(response => {
        expect(response.statusCode).toBe(404);
        })
    })
})
