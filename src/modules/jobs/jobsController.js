import JobSchema from '../../db/models/job';
import { handleResponse } from '../../helpers/response';

export class JobsController {
  static async create_job(req, res) {
    const {
      title,
      description,
      company,
      location,
      jobType,
      salary,
      postedBy,
      appliedBy,
    } = req.body;
    try {
      await JobSchema.create({
        title,
        description,
        company,
        location,
        jobType,
        salary,
        postedBy,
        appliedBy,
      });
      return handleResponse(res, 201, true, 'Job created successfully');
    } catch (e) {
      console.log(e);
      return handleResponse(res, 500, false, 'oops something went wrong');
    }
  }
}
