import mongoose from 'mongoose';
const reviewsSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
    ref: "Uer",
  },
  name: {
    type: String,
    require: true,
  },
  rating: {
    type: Number,
    require: true,
  },
  comment: {
    type: String,
    require: true,
  },
},{timestamps:true});

const productSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
        require: true,
    ref:"Uer"
  },
  name: {
    type: String,
    require: true,
  },
  image: {
    type: String,
    require: true,
  },
  brand: {
    type: String,
    require: true,
  },
  category: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  reviews: [reviewsSchema],
  rating: {
    type: Number,
    require: true,
    default: 0,
  },
  numReviews: {
    type: Number,
    require: true,
    default: 0,
  },
  price: {
    type: Number,
    require: true,
    default: 0,
  },
  countInStock: {
    type: Number,
    require: true,
    default: 0,
  },
}, {
    timestamps:true,
});


const Product = mongoose.model("Product", productSchema);

export default Product