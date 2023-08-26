import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import "./MovieList.css";

function MovieList() {
    
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movies);
  const history = useHistory();

  useEffect(() => {
    dispatch({ type: "FETCH_MOVIES" });
  }, []);

  function showDetails(movie) {
    dispatch({
      type: "SET_INFO",
      payload: {
        description: movie.description,
        image: movie.poster,
      },
    });

    dispatch({
      type: "GET_DETAILS",
      payload: movie.id,
    });
    history.push("/movies/:id");
  }

  return (
    <main>
      <h1>MovieList</h1>
      <section className="movies">
        {movies.map((movie) => {
          return (
            <Box sx={{ minWidth: 275 }}>
            <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            <div key={movie.id}>
                
              <h3>{movie.title}</h3>
              
              <img
                onClick={() => showDetails(movie)}
                src={movie.poster}
                alt={movie.title}
              />
              
            </div>
            
            </Typography>
            </CardContent>
            </Box>
          );
        })}
      </section>
    </main>
  );
}

export default MovieList;
