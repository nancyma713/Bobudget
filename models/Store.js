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

const StoreSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  zipcode: {
    type: String,
    required: true,
  },
  bobaItems: [BobaItemSchema],
});

module.exports = Store = mongoose.model("Store", StoreSchema);
