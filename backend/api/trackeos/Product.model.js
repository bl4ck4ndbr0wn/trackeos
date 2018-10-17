const mongoose = require("mongoose");

const { Schema } = mongoose;

let Product = null;

try {
  const ProductSchema = new Schema({
    _id: String,
    initiator: String,
    product_name: String,
    product_producer: String,
    processes: [
      {
        _id: String,
        handler: {
          type: Schema.Types.ObjectId,
          ref: "Handler"
        },
        process_name: String,
        processing_date: Date.now()
      }
    ],
    productConfirmed: {
      type: Boolean,
      default: false
    },
    creation_date: Date
  });
  Product = mongoose.model("Product", ProductSchema);
} catch (e) {
  Product = mongoose.model("Product");
}

module.exports = Product;
