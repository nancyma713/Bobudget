const express = require("express");
const router = express.Router();

const StoreBobaItem = require("../../models/StoreBobaItem");

router.get("/", (req, res) => {
  StoreBobaItem.find((error, items) => {
    if (error) return res.status(404).json({ NoItems: "No Items found." });
    res.json(items.map((item) => item));
  });
});

module.exports = router;
