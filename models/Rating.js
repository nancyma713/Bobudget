const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RatingSchema = new Schema({
  bobaItemId: {
    type: Schema.Types.ObjectId,
    ref: "StoreBobaItems",
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = Rating = mongoose.model("Ratings", RatingSchema);
