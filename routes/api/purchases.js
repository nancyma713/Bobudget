const express = require("express");
const router = express.Router();
const passport = require("passport");

const Purchase = require('../../models/Purchase');
const validatePurchaseInput = require("../../validation/purchase");

router.get("/", (req, res) => {
    Purchase.find((error, purchases) => {
      if (error) return res.status(404).json({ NoPurchases: "No record of any purchases." });
  
      res.json(purchases.map((purchase) => {
        return ({
          price: purchase.price,
          date: purchase.date,
          id: purchase.id
        })
      }));
    });
  });

router.post('/', 
    passport.authenticate("jwt", { session: false }), 
    (req,res) => {
        const { errors, isValid } = validatePurchaseInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }
        
        const newPurchase = new Purchase({
            price: req.body.price,
            userId: req.user.id
        })
        newPurchase.save().then((purchase) => res.json(purchase));
})

module.exports = router;