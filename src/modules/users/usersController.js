import User from '../../db/models/user';

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
}
