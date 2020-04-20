const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StoreBobaItemSchema = new Schema({
  bobaItemId: {
    type: Schema.Types.ObjectId,
    ref: "bobaItems",
  },
  storeId: {
    type: Schema.Types.ObjectId,
    ref: "stores",
  },
  price: {
    type: Number,
    required: true,
  },
});

module.exports = StoreBobaItem = mongoose.model("StoreBobaItems", StoreBobaItemSchema);
