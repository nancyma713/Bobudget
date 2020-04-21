const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const Store = require("../../models/Store");
const validateStoreInput = require("../../validation/store");

router.post("/new", (req, res) => {
  const { errors, isValid } = validateStoreInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const newStore = new Store({
    name: req.body.name,
    zipcode: req.body.zipcode,
  });

  newStore.save().then((store) => res.json(store));
});

router.get("/", (req, res) => {
  Store.find((error, stores) => {
    if (error) return res.status(404).json({ error });

    res.json(stores.map((store) => store));
  });
});

router.get("/:id", (req, res) => {
  Store.findById(req.params.id)
    .then((store) => res.json(store))
    .catch((error) =>
      res.status(404).json({ noStoreFound: "No Store found with that ID" })
    );
});

module.exports = router;
