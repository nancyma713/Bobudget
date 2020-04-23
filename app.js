const express = require("express");
const app = express();
const db = require("./config/keys").mongoURI;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");

if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => console.log(err));

const users = require("./routes/api/users");
const bobas = require("./routes/api/bobas");
const stores = require("./routes/api/stores");
const purchases = require("./routes/api/purchases");
const favorites = require("./routes/api/favorites");
const storebobaitems = require("./routes/api/storebobaitems");

app.get("/", (req, res) => res.send("Hello World!!!"));

app.use(passport.initialize());
require("./config/passport")(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/users", users);
app.use("/api/bobas", bobas);
app.use("/api/stores", stores);
app.use("/api/purchases", purchases);
app.use("/api/favorites", favorites);
app.use("/api/storebobaitems", storebobaitems);
app.use("/api/favorites", favorites);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
