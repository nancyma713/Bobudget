const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StoreSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  zipcode: {
    type: String,
    required: true,
  },
});

module.exports = Store = mongoose.model("Store", StoreSchema);
