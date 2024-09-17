import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, 'First name is required'],
      trim: true,
      minLength: [3, 'First name should be at least 3 characters long'],
      maxLength: [30, 'First name should be at least 30 characters long'],
    },
    lastName: {
      type: String,
      required: [true, 'Last name is required'],
      trim: true,
      minLength: [3, 'Last name should be at least 3 characters long'],
      maxLength: [30, 'Last name should be at most 30 characters long'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      lowercase: true,
      trim: true,
      match: [
        /^\w+([.-]?\w+)@\w+([.-]?\w+)(\.\w{2,3})+$/,
        'Please fill a valid email',
      ],
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minLength: [8, 'Password must be at least 8 characters long'],
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    accessToken: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model('User', userSchema);
