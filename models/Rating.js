const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RatingSchema = new Schema({
  bobaItemId: {
    type: Schema.Types.ObjectId,
    ref: "storeBobaItems",
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
});

module.exports = Rating = mongoose.model("Ratings", RatingSchema);
