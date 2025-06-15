const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../src/app');

describe('API /tasks', () => {
    it('debería responder con un array vacío inicialmente', async () => {
        const res = await request(app).get('/tasks');
        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    }, 10000);

    it('debería permitir crear una nueva tarea', async () => {
    const nuevaTarea = {
        title: 'Aprender testing',
        done: false
    };

    const res = await request(app).post('/tasks').send(nuevaTarea);
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty('_id');
        expect(res.body.title).toBe('Aprender testing');
        expect(res.body.done).toBe(false);
    });

    afterAll(async () => {
        await mongoose.disconnect();
    });
});
