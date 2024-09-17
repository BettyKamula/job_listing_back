import mongoose, { Schema } from 'mongoose';

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Job title is required'],
      trim: true,
      minlength: [3, 'Job title must be at least 3 characters long'],
      maxlength: [100, 'Job title must be at most 100 characters long'],
    },
    description: {
      type: String,
      required: [true, 'Job description is required'],
      trim: true,
      minlength: [10, 'Job description must be at least 10 characters long'],
    },
    company: {
      type: String,
      required: [true, 'Company name is required'],
      trim: true,
      minlength: [2, 'Company name must be at least 2 characters long'],
      maxlength: [100, 'Company name must be at most 100 characters long'],
    },
    location: {
      type: String,
      required: [true, 'Job location is required'],
      trim: true,
      minlength: [2, 'Location must be at least 2 characters long'],
      maxlength: [100, 'Location must be at most 100 characters long'],
    },
    jobType: {
      type: String,
      enum: ['Full-Time', 'Part-Time', 'Contract', 'Internship', 'Temporary'],
      default: 'Full-Time',
      required: [true, 'Job type is required'],
    },
    salary: {
      type: Number,
      min: [0, 'Salary must be a positive number'],
    },
    postedBy: {
      type: Schema.Types.ObjectId,
      ref: 'User', // Ensure this matches your User model name
      required: [true, 'Job must be posted by a user'],
    },
    // *New Field: appliedBy*
    appliedBy: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model('Job', jobSchema);
