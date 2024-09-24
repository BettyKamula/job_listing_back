import express from 'express';
import { UsersController } from './usersController';
import { validationResult } from 'express-validator';
import registerValidator from '../../middleware/registerValidator';
import { AuthController } from './authController';
import { ValidateToken } from '../../middleware/validateToken';

const Router = express.Router();

Router.post('/register_user', registerValidator(), (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(400).json({ errors: errors.array() });
  UsersController.createUser(req, res);
});

Router.post('/login', (req, res) => {
  AuthController.login(req, res);
});

Router.get(
  '/get_users',
  (req, res, next) => ValidateToken(req, res, next),
  (req, res) => {
    UsersController.getUsers(req, res);
  }
);

Router.patch(
  '/get_users/:userId',
  (req, res, next) => ValidateToken(req, res, next),
  (req, res) => {
    UsersController.updateUser(req, res);
  }
);

Router.patch(
  '/delete_user/:userId',
  (req, res, next) => ValidateToken(req, res, next),
  (req, res) => {
    UsersController.deleteUser(req, res);
  }
);

export default Router;
