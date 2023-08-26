const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:id', (req, res) => {
  const queryText = `
  SELECT m.title,  g.name as genre
  FROM movies m
  INNER JOIN movies_genres mg ON m.id = mg.movie_id
  INNER JOIN genres g ON mg.genre_id = g.id
  WHERE m.id = $1;
`;
  pool.query(queryText, [req.params.id])
    .then((result) => { res.send(result.rows); })
    .catch((err) => {
      console.log('Error completing SELECT plant query', err);
      res.sendStatus(500);
    });
});

module.exports = router;