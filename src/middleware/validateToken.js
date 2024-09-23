import Users from '../db/models/user';
import { handleResponse } from '../helpers/response';

export const ValidateToken = async (req, res, next) => {
  const authorizationHeader = req.headers.authorization;
  if (!authorizationHeader) {
    return handleResponse(res, 401, false, 'access token is missing');
  }

  const token = authorizationHeader?.split(' ')[1];
  try {
    const user = await Users.findOne({ accessToken: token });
    if (user.accessToken !== token) {
      return handleResponse(res, 401, false, 'invalid token');
    }
    req.user = user;
    next();
  } catch (e) {
    console.log('error', e);
    return handleResponse(res, 500, false, 'oops something went wrong');
  }
};
