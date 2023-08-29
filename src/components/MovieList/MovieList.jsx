import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import MovieIcon from "@mui/icons-material/Movie";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import "./MovieList.css";

function MovieList() {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movies);
  const history = useHistory();

  useEffect(() => {
    dispatch({ type: "FETCH_MOVIES" });
  }, []);

  // when the showDetails is triggerdSends a payload of
  // the description and poster to my set info reducer.
  // and also the movie ID to the get details saga.
  // last the user will be sent to the movies:id page.
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
  // The return will map through the movies saga and list the images and movie titles
  // I've attached a onClick event to the image so when its clicked it will trigger the above
  // function.
  return (
    <main>
      <AppBar position="relative">
        <Toolbar>
          <MovieIcon />
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            style={{ textAlign: "center", flexGrow: 1 }}
          >
            MovieList!!!!
          </Typography>
        </Toolbar>
      </AppBar>
      <h1>MovieList</h1>
      <Grid container spacing={6}>
        {movies.map((movie) => {
          return (
            <Grid item xs={12} sm={6} md={4} key={movie.id}>
              <Card sx={{ maxWidth: 345 }}>
                <Typography gutterBottom variant="h5" component="div">
                  {movie.title}
                </Typography>
                <CardMedia
                  onClick={() => showDetails(movie)}
                  sx={{ height: 500 }}
                  image={movie.poster}
                  title={movie.title}
                />
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </main>
  );
}

export default MovieList;
