import { Router } from "express";
import SessionController from "./app/controllers/SessionController";
import UserController from './app/controllers/UserController';
import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/session', SessionController.store);

routes.post('/user', UserController.store);


// assim, todas as rotas abaixo passaram pelo middleware
routes.use(authMiddleware);
// routes.put('/users', authMiddleware,UserController.update);
routes.put('/users', authMiddleware,UserController.update);

export default routes;