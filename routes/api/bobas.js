const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const BobaItem = require("../../models/BobaItem");
const StoreBobaItem = require("../../models/StoreBobaItem");
const Store = require("../../models/Store");
const validateBobaInput = require("../../validation/boba");

router.get("/test", (req, res) => res.json({ msg: "This is the boba route" }));

router.get("/", (req, res) => {
  BobaItem.find((error, bobas) => {
    if (error) return res.status(404).json({ NoBobas: "No Bobas found." });

    res.json(bobas.map((boba) => boba));
  });
});

router.post(
  "/new",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateBobaInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newBoba = new BobaItem({
      name: req.body.name,
    });

    newBoba.save().then((boba) => res.json(boba));
  }
);

router.get(
  "/:id",

  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    BobaItem.findById(req.params.id)
      .then((boba) => res.json(boba))
      .catch((error) =>
        res.status(404).json({ noBobaFound: "No Boba found with that ID" })
      );
  }
);

router.get("/search/:boba_name", (req, res) => {
  const regex = new RegExp(["^.*", req.params.boba_name, ".*$"].join(""), "i");

  BobaItem.find({ name: regex })
    .populate("store")
    .then((bobaItems) => res.json(bobaItems))
    .catch((err) => res.json(err));
});

module.exports = router;
