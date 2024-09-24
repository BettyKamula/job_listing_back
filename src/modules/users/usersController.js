import User from '../../db/models/user';
import { handleResponse } from '../../helpers/response';

export class UsersController {
  static async createUser(req, res) {
    // Collect data from req
    const { firstName, lastName, email, password, role } = req.body;

    // Add data to user db

    try {
      const payload = {
        firstName,
        lastName,
        email,
        password,
        role,
      };
      const user = await User.create(payload);
      await user.save();
      return res.status(201).json({
        success: true,
        status: 201,
        message: 'user successfully added',
      });
    } catch (error) {
      if (error.errorResponse.code === 11000) {
        return res.status(409).json({
          success: false,
          message: 'A user with this email exists',
        });
      } else {
        return res.status(500).json({
          success: false,
          message: 'internal server error',
        });
      }
    }
  }
  static async getUsers(req, res) {
    try {
      const search = req.query.search;
      let query = {};
      if (search) {
        query.$or = [{ firstName: { $regex: search, $options: 'i' } }];
      }
      const users = await User.find(query);
      return handleResponse(
        res,
        200,
        true,
        'users fetched successfully',
        users
      );
    } catch (e) {
      return handleResponse(res, 500, false, 'oops something went wrong');
    }
  }
  static async updateUser(req, res) {
    const { userId } = req.params;
    const options = { new: true };

    try {
      const user = await User.findById({ _id: userId });
      if (!user) {
        return handleResponse(res, 400, false, 'user not found');
      }
      const data = await User.findByIdAndUpdate(userId, req.body, options);
      return handleResponse(res, 200, true, 'updated successfully', data);
    } catch (e) {
      return handleResponse(res, 500, false, 'Oops something went wrong');
    }
  }
  static async deleteUser(req, res) {
    const { userId } = req.params;
    try {
      const user = await User.findById({ _id: userId });
      console.log(user);
      if (!user) {
        return handleResponse(res, 400, false, 'The user does not exist');
      }
      console.log('user', user);
      user.isActive = false;
      user.save();
      return handleResponse(res, 200, true, 'deleted Successfully');
    } catch (e) {
      return handleResponse(res, 500, false, 'Oops something went wrong');
    }
  }
}
