const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FavoriteSchema = new Schema({
  bobaItemId: {
    type: Schema.Types.ObjectId,
    ref: "BobaItem",
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  }
});

module.exports = Rating = mongoose.model("Ratings", RatingSchema);
