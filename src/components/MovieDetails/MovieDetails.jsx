import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
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
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

function MovieDetails() {
  const genres = useSelector((store) => store.genres);
  const info = useSelector((store) => store.info);
  console.log(info);

  return (
    <>
      {/* <ul>
        {genres.map((movieData) => (
          <li key={movieData.title}>
            Movie: {movieData.title}
            <br />
            Genre: {movieData.genres.join(", ")}
          </li>
        ))}
        <li>{info.description}</li>

        <img src={info.image} alt="Please see the description" />
      </ul> */}
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
      </Card>
    </>
  );
}

export default MovieDetails;
