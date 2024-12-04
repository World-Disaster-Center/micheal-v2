import request from 'supertest';
import { app } from '../../app';
import { Disaster } from '../../models/disaster';
import { natsWrapper } from '../../nats-wrapper';

it('has a route handler listening to /api/tickers for post requests', async () => {
  const response = await request(app).post('/api/disasters').send({});

  expect(response.status).not.toEqual(404);
});

it('can only be accessed if the user is signed in', async () => {
  await request(app).post('/api/disasters').send({}).expect(401);
});

it('returns a status other than 401 if the user is signed in', async () => {
  const response = await request(app)
    .post('/api/disasters')
    .set('Cookie', global.signin())
    .send({});

  expect(response.status).not.toEqual(401);
});

it('returns an error if an invalid name is provided', async () => {
  await request(app)
    .post('/api/disasters')
    .set('Cookie', global.signin())
    .send({
      name: '',
    })
    .expect(400);
});

it('create a disaster with valid input', async () => {
  let disaster = await Disaster.find({});
  expect(disaster.length).toEqual(0);

  const name = 'valid name';

  await request(app)
    .post('/api/disasters')
    .set('Cookie', global.signin())
    .send({
      name,
    });
  expect(201);

  disaster = await Disaster.find({});
  expect(disaster.length).toEqual(1);
  expect(disaster[0].name).toEqual(name);
});

it('publishes an event', async () => {
  await request(app).post('/api/disaster').set('Cookie', global.signin()).send({
    name: 'valid name',
  });
  expect(201);

  expect(natsWrapper.client.publish).toHaveBeenCalled();
});
