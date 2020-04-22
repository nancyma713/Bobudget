const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BobaItemSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  store: {
    type: Schema.Types.ObjectId,
    ref: "Store",
  },
});

module.exports = BobaItem = mongoose.model("BobaItems", BobaItemSchema);
