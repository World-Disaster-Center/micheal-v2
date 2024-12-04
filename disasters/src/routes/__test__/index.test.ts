import request from 'supertest';
import { app } from '../../app';

const createDisaster = () => {
  return request(app)
    .post('/api/disasters')
    .set('Cookie', global.signin())
    .send({ name: 'BOOM' })
    .expect(201);
};

it('can fetch a list of disaster', async () => {
  await createDisaster();
  await createDisaster();
  await createDisaster();

  const response = await request(app).get('/api/disasters').send().expect(200);

  expect(response.body.length).toEqual(3);
});
