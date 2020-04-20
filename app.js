const express = require("express");
const app = express();
const db = require("./config/keys").mongoURI;

const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const users = require("./routes/api/users");
const bobas = require("./routes/api/bobas");

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("Hello World"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/users", users);
app.use("/api/bobas", bobas);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
