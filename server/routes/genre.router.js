const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  // Add query to get all genres
  const query = `
  SELECT g.name
  FROM genres g
  INNER JOIN movies_genres mg ON g.id = mg.genre_id
  WHERE mg.movie_id = $1
`;
  pool.query(query)
    .then( result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all movies', err);
  res.sendStatus(500)
});

module.exports = router;