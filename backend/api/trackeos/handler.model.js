const mongoose = require("mongoose");

const { Schema } = mongoose;

let Handler = null;

try {
  const HandlerSchema = new Schema({
    username: String,
    first_name: String,
    last_name: String,
    handlerConfirmed: {
      type: Boolean,
      default: false
    }
  });
  Handler = mongoose.model("Handler", HandlerSchema);
} catch (e) {
  Handler = mongoose.model("Handler");
}

module.exports = Handler;
