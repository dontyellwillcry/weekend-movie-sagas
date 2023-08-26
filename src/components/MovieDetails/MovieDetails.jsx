import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function MovieDetails() {
  const genres = useSelector((store) => store.genres);

  return (
    <>
      <ul>
        {/* <li>{genres.movie}</li>
        <li>{genres.description}</li>
        <img src={genres.image} alt={genres.movie}/> */}
        {genres.map((movieData) => (
          <li key={movieData.title}>
            Movie: {movieData.title}
            <br />
            Genre: {movieData.genres.join(", ")}
          </li>
        ))}
      </ul>
    </>
  );
}

export default MovieDetails;
