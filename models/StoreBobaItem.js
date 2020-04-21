const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StoreBobaItemSchema = new Schema({
  bobaItemId: {
    type: Schema.Types.ObjectId,
    ref: "BobaItems",
  },
  storeId: {
    type: Schema.Types.ObjectId,
    ref: "Stores",
  },
  price: {
    type: Number,
    required: true,
  },
});

module.exports = StoreBobaItem = mongoose.model(
  "StoreBobaItems",
  StoreBobaItemSchema
);
