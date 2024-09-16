import express from 'express';
import { UsersController } from './usersController';
import { check, validationResult } from 'express-validator';
import registerValidator from '../../middleware/validator';

const Router = express.Router();

Router.post('/register_user', registerValidator(), (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(400).json({ errors: errors.array() });
  UsersController.createUser(req, res);
});

export default Router;
