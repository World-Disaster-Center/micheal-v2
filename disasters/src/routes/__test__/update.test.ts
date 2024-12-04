import request from 'supertest';
import { app } from '../../app';
import mongoose from 'mongoose';
import { Disaster } from '../../models/disaster';
import { natsWrapper } from '../../nats-wrapper';

it('returns a 404 if the provided id does not exist', async () => {
  const id = new mongoose.Types.ObjectId().toHexString();
  await request(app)
    .put(`/api/disasters/${id}`)
    .set('Cookie', global.signin())
    .send({
      name: 'test',
    })
    .expect(404);
});

it('returns a 401 if the user is not authenticated', async () => {
  const id = new mongoose.Types.ObjectId().toHexString();
  await request(app)
    .put(`/api/disasters/${id}`)
    .send({
      name: 'test',
    })
    .expect(401);
});

it('returns a 400 if the user provides an invalid name or price', async () => {
  const cookie = global.signin();
  const response = await request(app)
    .post('/api/disasters/')
    .set('Cookie', cookie)
    .send({
      name: 'test',
    })
    .expect(201);

  await request(app)
    .put(`/api/disasters/${response.body.id}`)
    .set('Cookie', cookie)
    .send({
      name: '',
    })
    .expect(400);
});

it('updates the disaster provided valid inputs', async () => {
  const cookie = global.signin();
  const response = await request(app)
    .post('/api/disasters/')
    .set('Cookie', cookie)
    .send({
      name: 'test',
    })
    .expect(201);

  await request(app)
    .put(`/api/disasters/${response.body.id}`)
    .set('Cookie', cookie)
    .send({
      name: 'new concert',
    })
    .expect(200);

  const ticketResponse = await request(app)
    .get(`/api/disasters/${response.body.id}`)
    .send();

  expect(ticketResponse.body.name).toEqual('new concert');
});

it('publishes an event', async () => {
  const cookie = global.signin();
  const response = await request(app)
    .post('/api/disasters/')
    .set('Cookie', cookie)
    .send({
      name: 'test',
    })
    .expect(201);

  await request(app)
    .put(`/api/disasters/${response.body.id}`)
    .set('Cookie', cookie)
    .send({
      name: 'new concert',
      price: 15,
    })
    .expect(200);

  expect(natsWrapper.client.publish).toHaveBeenCalled();
});
