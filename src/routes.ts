import express, { Router } from 'express';

import UserRoutes from './routes/UserRoutes';

const routes = Router();

routes.use('/user', UserRoutes);

export default routes;
