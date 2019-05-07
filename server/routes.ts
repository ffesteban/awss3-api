import { Application } from 'express';
import examplesRouter from './api/controllers/examples/router'
import filesRouter from './api/controllers/files/router'
export default function routes(app: Application): void {
  app.use('/api/examples', examplesRouter);
  app.use('/api/files', filesRouter);
};