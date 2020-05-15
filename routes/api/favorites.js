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

router.get("/:userId", (req, res) => {
  Favorite.find({ userId: req.params.userId }, (error, favorites) => {
    if (error) return res.status(404).json({ NoFavorites: "No Favorites found." });

    res.json(favorites.map((favorite) => favorite));
  });
});


router.delete("/:favoriteId",
  passport.authenticate('jwt', { session: false }),
  (req, res) => {

    Favorite.findByIdAndRemove(req.params.favoriteId)
      .then((favorite) => {
        if (!favorite) {
          return res.status(404).send({
            message: "Favorite not found",
          });
        }
        return res.send({ message: "Removed from favorites" });
      })
      .catch((err) => {
        res.status(400).send({ message: "Could not remove favorite" });
      });

  });


module.exports = router;