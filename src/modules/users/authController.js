import Users from '../../db/models/user';
import jwt from 'jsonwebtoken';
import { handleResponse } from '../../helpers/response';

export class AuthController {
  static async login(req, res) {
    // get data from req body
    const { email, password } = req.body;
    try {
      const user = await Users.findOne({ email });

      if (!user) {
        return handleResponse(
          res,
          400,
          false,
          'sorry, invalid email or password'
        );
      }

      if (password !== user.password) {
        return handleResponse(
          res,
          400,
          false,
          'sorry, invalid email or password',
          ''
        );
      }
      const token = jwt.sign({ userId: user._id }, '1234', {
        expiresIn: '1hr',
      });
      return handleResponse(res, 200, true, 'login successful', token);
    } catch (e) {
      console.log('error', e);
      return handleResponse(res, 500, false, 'oops something went wrong');
    }
  }
}
