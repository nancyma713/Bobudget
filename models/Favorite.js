const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FavoritesSchema = new Schema({
  bobaItemId: {
    type: Schema.Types.ObjectId,
    ref: "BobaItem",
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  }
});

module.exports = Favorite = mongoose.model("Favorite", FavoritesSchema);
