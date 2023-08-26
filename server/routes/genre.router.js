const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

// The array_agg is a posgres funciton that will group all the columns into an array
// for the value you pass. In our case the genres names.
// I tried this out due to my .map function listing the same movie title
// with a different genres IF the movie had multiple ganres.
// But then i had to figure out the .join method but that wasnt so bad.
router.get("/:id", (req, res) => {
  const queryText = `
  SELECT movies.title, array_agg(genres.name) as genres
  FROM movies
  INNER JOIN movies_genres ON movies.id = movies_genres.movie_id
  INNER JOIN genres ON movies_genres.genre_id = genres.id
  WHERE movies.id = $1
  GROUP BY movies.title;
`;
  pool
    .query(queryText, [req.params.id])
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("Error completing SELECT plant query", err);
      res.sendStatus(500);
    });
});

module.exports = router;
