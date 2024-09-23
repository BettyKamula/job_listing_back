import express from 'express';
import { ValidateToken } from '../../middleware/validateToken';
import { JobsController } from './jobsController';
import JobValidator from '../../middleware/createJobValidator';
import { validationResult } from 'express-validator';
import { ApplyJobValidator } from '../../middleware/applyJob';
const Router = express.Router();

Router.post(
  '/create-job',
  (req, res, next) => ValidateToken(req, res, next),
  JobValidator(),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });
    JobsController.create_job(req, res);
  }
);
Router.get(
  '/get-jobs',
  (req, res, next) => ValidateToken(req, res, next),
  (req, res) => {
    JobsController.get_jobs(req, res);
  }
);

Router.patch(
  '/get-jobs/:jobId',
  (req, res, next) => ValidateToken(req, res, next),
  (req, res) => {
    JobsController.update_job(req, res);
  }
);

Router.delete(
  '/get-jobs/:jobId',
  (req, res, next) => ValidateToken(req, res, next),
  (req, res) => {
    JobsController.delete_job(req, res);
  }
);

Router.patch(
  '/apply-job',
  (req, res, next) => ValidateToken(req, res, next),
  ApplyJobValidator(),

  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    JobsController.apply_job(req, res);
  }
);
export default Router;
