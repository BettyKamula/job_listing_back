import { check } from 'express-validator';

export const ApplyJobValidator = () => {
  return [check('jobId').not().isEmpty().withMessage('Job Id is required')];
};
