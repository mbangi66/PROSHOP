import mongoose from 'mongoose';

const reviewSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const productSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    name: {
      types: String,
      required: true,
    },
    image: {
      types: String,
      required: true,
    },
    brand: {
      types: String,
      required: true,
    },
    category: {
      types: String,
      required: true,
    },
    description: {
      types: String,
      required: true,
    },
    reviews: [reviewSchema],
    rating: {
      types: Number,
      required: true,
      default: 0,
    },
    numReviews: {
      types: Number,
      required: true,
      default: 0,
    },
    price: {
      types: Number,
      required: true,
      default: 0,
    },
    countInStock: {
      types: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model('Product', productSchema);

export default Product;
