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

  static async get_jobs(req, res) {
    try {
      const { search } = req.query;
      let query = {};
      if (search) {
        query.$or = [
          { title: { $regex: search, $options: 'i' } },
          { description: { $regex: search, $options: 'i' } },
          { company: { $regex: search, $options: 'i' } },
        ];
      }
      const jobs = await JobSchema.find(query).populate(
        'postedBy',
        'username email'
      );
      return handleResponse(res, 200, true, 'Jobs fetched successfully', jobs);
    } catch (e) {
      return handleResponse(res, 500, false, 'oops something went wrong');
    }
  }

  static async update_job(req, res) {
    const { jobId } = req.params;
    try {
      const options = {
        new: true,
      };
      const job = await JobSchema.findById({ _id: jobId });
      if (!job) {
        handleResponse(res, 400, false, 'The job does not exist');
      }
      const data = await JobSchema.findByIdAndUpdate(jobId, req.body, options);

      handleResponse(res, 200, true, 'Updated Successfully', data);
    } catch (e) {
      handleResponse(res, 500, false, 'Oops something went wrong');
    }
  }

  static async delete_job(req, res) {
    const { jobId } = req.params;
    try {
      const job = await JobSchema.findById({ _id: jobId });
      if (!job) {
        handleResponse(res, 400, false, 'The job does not exist');
      }
      await JobSchema.findByIdAndDelete(jobId);

      handleResponse(res, 200, true, 'deleted Successfully');
    } catch (e) {
      handleResponse(res, 500, false, 'Oops something went wrong');
    }
  }
}
