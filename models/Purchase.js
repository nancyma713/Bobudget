const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PurchaseSchema = new Schema({
  bobaItemId: {
    type: Schema.Types.ObjectId,
    ref: "storeBobaItems",
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
});

module.exports = Purchase = mongoose.model("Purchases", PurchaseSchema);
