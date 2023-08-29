import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function MovieDetails() {
  const genres = useSelector((store) => store.genres);
  const info = useSelector((store) => store.info);
  const [expanded, setExpanded] = useState(false); // Add this line

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  const CenteredCardContainer = styled("div")({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh", // Adjust as needed
  });

  // This will show the movie title, and all genres for the image that was clicked.
  // it will also show the description in a dropdown menu provided by material ui
  return (
    <>
      <CenteredCardContainer>
        <Card sx={{ maxWidth: 345 }}>
          {genres.map((movieData) => (
            <CardHeader
              key={movieData.title}
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  M
                </Avatar>
              }
              title={movieData.title}
              subheader={movieData.genres.join(", ")}
            />
          ))}
          <CardMedia
            component="img"
            height="500"
            image={info.image}
            alt="Not sure what goes here"
          />
          <CardActions disableSpacing>
            <IconButton
              aria-label="expand description"
              onClick={handleExpandClick}
              aria-expanded={expanded}
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Description:</Typography>
              <Typography paragraph>{info.description}</Typography>
            </CardContent>
          </Collapse>
        </Card>
      </CenteredCardContainer>
    </>
  );
}

export default MovieDetails;
