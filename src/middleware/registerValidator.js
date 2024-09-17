import { check } from 'express-validator';

const registerValidator = () => {
  return [
    check('firstName')
      .not()
      .isEmpty()
      .withMessage('First name is required')
      .isLength({ min: 3 })
      .withMessage('First name should be at least 3 characters long')
      .isLength({ max: 30 })
      .withMessage('First name should be at most 30 characters long'),
    check('lastName')
      .not()
      .isEmpty()
      .withMessage('Last name is required')
      .isLength({ min: 3 })
      .withMessage('Last name should be at least 3 characters long')
      .isLength({ max: 30 })
      .withMessage('Last name should be at most 30 characters long'),
    check('email')
      .not()
      .isEmpty()
      .withMessage('Email is required')
      .isEmail()
      .withMessage('Please fill a valid email'),
    check('password')
      .not()
      .isEmpty()
      .withMessage('Password is required')
      .isLength({ min: 8 })
      .withMessage('Password must be at least 8 characters long'),
  ];
};

export default registerValidator;
