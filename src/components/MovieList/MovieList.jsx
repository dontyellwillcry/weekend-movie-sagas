import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CssBaseline, AppBar, Toolbar } from "@mui/material";
import MovieIcon from "@mui/icons-material/Movie";

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
      <CssBaseline>
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
        {/* <h1>MovieList</h1> */}
        <section className="movies">
          {movies.map((movie) => (
            <Box
                key={movie.id}
              sx={{ minWidth: 275, margin: "16px", height: "400px" }}
            >
              <Card variant="outlined">
                <CardContent>
                  <Typography
                    sx={{ fontSize: 18 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    {movie.title}
                  </Typography>

                  <img
                    onClick={() => showDetails(movie)}
                    src={movie.poster}
                    alt={movie.title}
                    style={{ maxHeight: "100%", width: "auto" }}
                  />
                </CardContent>
              </Card>
            </Box>
          ))}
        </section>
      </CssBaseline>
    </main>
  );
}

export default MovieList;
