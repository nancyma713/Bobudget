const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PurchaseSchema = new Schema({
  bobaItemId: {
    type: Schema.Types.ObjectId,
    ref: "StoreBobaItems",
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = Purchase = mongoose.model("Purchases", PurchaseSchema);
