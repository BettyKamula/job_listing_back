import { check } from 'express-validator';

const jobValidator = () => {
  return [
    check('title')
      .not()
      .isEmpty()
      .withMessage('job title is required')
      .isLength({ min: 3 })
      .withMessage('Job title must be at least 3 characters long')
      .isLength({ max: 100 })
      .withMessage('Job title must be at most 100 characters long'),
    check('description')
      .not()
      .isEmpty()
      .withMessage('Job description is required')
      .isLength({ min: 10 })
      .withMessage('Job description must be at least 10 characters long'),
    check('company')
      .not()
      .isEmpty()
      .withMessage('Company name is required')
      .isLength({ min: 2 })
      .withMessage('Company name must be at least 2 characters long')
      .isLength({ max: 100 })
      .withMessage('Company name must be at most 100 characters long'),
    check('location')
      .not()
      .isEmpty()
      .withMessage('Job location is required')
      .isLength({ min: 2 })
      .withMessage('Location must be at least 2 characters long')
      .isLength({ max: 100 })
      .withMessage('Location must be at most 100 characters long'),
    check('jobType')
      .not()
      .isEmpty()
      .withMessage('Job type is required')
      .isIn(['Full-Time', 'Part-Time', 'Contract', 'Internship', 'Temporary'])
      .withMessage(
        'Invalid job type. Must be one of: Full-Time, Part-Time, Contract, Internship, or Temporary'
      ),
    check('salary')
      .isFloat({ gt: 0 }) // Salary must be a positive number
      .withMessage('Salary must be a positive number'),

    // Validate postedBy (Assuming it's a MongoDB ObjectId)
    check('postedBy')
      .not()
      .isEmpty()
      .withMessage('Posted by field is required')
      .isMongoId()
      .withMessage('Posted by must be a valid user ID'),

    // Validate appliedBy (Assuming it's an array of MongoDB ObjectIds)
    check('appliedBy')
      .optional()
      .isArray()
      .withMessage('Applied by should be an array of user IDs')
      .custom((value) => {
        return value.every((id) => /^[0-9a-fA-F]{24}$/.test(id)); // Custom validation to check if all are MongoDB ObjectIds
      })
      .withMessage('All appliedBy entries must be valid user IDs'),
  ];
};
export default jobValidator;
