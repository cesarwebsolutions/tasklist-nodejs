import { Router } from "express";
import SessionController from "./app/controllers/SessionController";
import UserController from './app/controllers/UserController';

const routes = new Router();

routes.post('/user', UserController.store);
routes.post('/session', SessionController.store);

export default routes;