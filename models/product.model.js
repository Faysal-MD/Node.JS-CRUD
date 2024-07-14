const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    quantity: {
      type: Number,
      required: true,
      default: 0,
    },

    price: {
      type: Number,
      required: true,
      default: 0,
    },

    image: {
      type: String,
      required: false,
    },
  },

  { timestamps: true } // this will create 2 more extra field "created_at" and "updated_at"
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
