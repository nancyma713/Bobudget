const express = require('express');
const router = express.Router();
const passport = require('passport');

const Favorite = require('../../models/Favorite');

router.post('/new',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {

    const newFavorite = new Favorite({
      bobaItemId: req.body.bobaItemId,
      userId: req.body.userId
    });

    newFavorite.save().then(favorite => res.json(favorite));
  });

module.exports = router;