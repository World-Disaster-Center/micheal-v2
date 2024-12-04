import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';

import { errorHandler, NotfoundError, currentUser } from '@chmat/common';
import { createDisasterRouter } from './routes/new';
import { showDisasterRouter } from './routes/show';
import { indexDisasterRouter } from './routes';
import { updateDisasterRouter } from './routes/update';

const app = express();
app.set('trust proxy', true);
app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== 'test',
  })
);

app.use(currentUser);

app.use(createDisasterRouter);
app.use(showDisasterRouter);
app.use(indexDisasterRouter);
app.use(updateDisasterRouter);

app.all('*', async (res, req) => {
  throw new NotfoundError();
});

app.use(errorHandler);

export { app };
