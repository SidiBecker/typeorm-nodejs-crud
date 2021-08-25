import express, { Router } from 'express';

import UserControllers from '../controllers/UserControllers';

const routes = Router();

routes.post('/', UserControllers.create);

routes.get('/', UserControllers.list);

routes.put('/', UserControllers.update);

routes.delete('/', UserControllers.delete);

routes.get('/:id', UserControllers.show);

export default routes;
