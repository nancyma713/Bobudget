const mongoose = require("mongoose");
const db = require("./config/keys").mongoURI;
const BobaItem = require("./models/BobaItem");
const Store = require("./models/Store");

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => console.log(err));

const store = new Store({
  name: "Bar Pa Tea",
  zipcode: "10012",
});

const bobaItem = new BobaItem({
  name: "Lemon Green Tea",
  store: store,
  temp: "Cold",
});

const bobaItem2 = new BobaItem({
  name: "Taro",
  store: store,
  temp: "Both",
});

const bobaItem3 = new BobaItem({
  name: "Jasmine",
  store: store,
  temp: "Both",
});

store.bobaItems.push(bobaItem, bobaItem2, bobaItem3);

store.save();
bobaItem.save();
bobaItem2.save();
bobaItem3.save();
// Store.find({ ["bobaItems.name"]: "Taro" })
// Store.find({ bobaItems: { name: "Taro" } });
// Store.find({ "bobaItems.name": "Taro" }).then((store) => console.log(store));

// BobaItem.find({ name: "Taro" })
//   .populate("store")
//   .then((bobaItems) => console.log(bobaItems));
