const mongoose = require("mongoose");
const db = require("./config/keys").mongoURI;
const BobaItem = require("./models/BobaItem");
const Store = require("./models/Store");

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => console.log(err));

// const store = new Store({
//   name: "Famous Scott's",
//   zipcode: "10520",
// });

// const bobaItem = new BobaItem({
//   name: "Taro",
//   store: store,
// });

// const bobaItem2 = new BobaItem({
//   name: "Chai",
//   store: store,
// });

// store.bobaItems.push(bobaItem, bobaItem2);

// store.save().then((store) => console.log(store));
// bobaItem.save().then((boba) => console.log(boba));
// bobaItem2.save().then((boba) => console.log(boba));
// Store.find({ ["bobaItems.name"]: "Taro" })
// Store.find({ bobaItems: { name: "Taro" } });
// Store.find({ "bobaItems.name": "Taro" }).then((store) => console.log(store));

BobaItem.find({ name: "Taro" })
  .populate("store")
  .then((bobaItems) => console.log(bobaItems));
