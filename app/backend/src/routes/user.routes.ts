import { Router } from 'express';
import UserController from '../controllers/UserController';
import UserService from '../services/UserService'
import { IUserService } from '../interfaces/UserInterfaces';

const userService: IUserService = new UserService()
const userController = new UserController(userService)

const LoginRoutes = Router();

LoginRoutes.post('/login', (req, res, next) => {
  userController.loginUser(req, res, next);
});

LoginRoutes.post('/validate', (req, res, next) => {
  userController.validateUser(req, res, next);
});

export default LoginRoutes;
