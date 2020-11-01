import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
  {
    name: {
      types: String,
      required: true,
    },
    email: {
      types: String,
      required: true,
      unique: true,
    },
    password: {
      types: String,
      required: true,
    },
    isAdmin: {
      types: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('User', userSchema);

export default User;
