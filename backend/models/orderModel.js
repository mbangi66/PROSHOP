import mongoose from 'mongoose';

const orderSchema = mongoose.Schema(
  {
    user: {
      types: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    orderItems: [
      {
        name: { type: String, required: true },
        qty: { type: Number, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true },
        product: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: 'Product',
        },
      },
    ],
    ShippingAddress: {
      address: { types: String, required: true },
      city: { types: String, required: true },
      postalCode: { types: String, required: true },
      country: { types: String, required: true },
    },
    paymentMethod: {
      types: String,
      required: true,
    },
    paymentResult: {
      id: { type: staring },
      status: { type: staring },
      update_time: { type: staring },
      email_address: { type: staring },
    },
    taxPrice: {
      types: Number,
      required: true,
      default: 0.0,
    },
    taxPrice: {
      types: Number,
      required: true,
      default: 0.0,
    },
    ShippingPrice: {
      types: Number,
      required: true,
      default: 0.0,
    },
    totalPrice: {
      types: Number,
      required: true,
      default: 0.0,
    },
    isPaid: {
      types: Boolean,
      required: true,
      default: false,
    },
    paidAt: {
      type: Date,
    },
    isDelivered: {
      types: Boolean,
      required: true,
      default: false,
    },
    deliveredAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model('Order', orderSchema);

export default Order;
